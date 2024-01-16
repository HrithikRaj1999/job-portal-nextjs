import { JobFilterTypes, jobFilterSchema } from "@/lib/validation";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
export const getDistinctLocation = async () => {
  try {
    return (await prisma?.job
      .findMany({
        where: { approved: true },
        select: { location: true },
        distinct: ["location"],
      })
      .then((locations) =>
        locations.map(({ location }) => location).filter(Boolean),
      )) as string[];
  } catch (error) {
    return ["Patna"];
  }
};

export const filterJobs = async (formData: FormData) => {
  "use server";
  const values = Object.fromEntries(formData.entries());
  const { search, type, remote, location } = jobFilterSchema.parse(values);
  const searchParams = new URLSearchParams({
    ...(search && { search: search.trim() }),
    ...(type && { type }),
    ...(location && { location }),
    ...(remote && { remote: "true" }),
  });
  redirect(`/?${searchParams.toString()}`);
};

export const getJobsResults = async ({
  search,
  type,
  remote,
  location,
}: JobFilterTypes) => {
  const searchText = search?.replaceAll(" ", "&");
  console.log({ searchText, type, remote, location });
  const searchFilter: Prisma.JobWhereInput = searchText
    ? {
        OR: [
          { title: { search: searchText } },
          { description: { search: searchText, mode: "insensitive" } },
          { companyName: { search: searchText, mode: "insensitive" } },
          { location: { search: searchText, mode: "insensitive" } },
          { locationType: { search: searchText, mode: "insensitive" } },
          { type: { search: searchText, mode: "insensitive" } },
        ],
      }
    : {};
  const where: Prisma.JobWhereInput = {
    AND: [
      searchFilter,
      type ? { type } : {},
      location ? { location } : {},
      remote ? { locationType: "Remote" } : {},
      { approved: true },
    ],
  };
  try {
    return await prisma.job.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error(error);
  }
};
