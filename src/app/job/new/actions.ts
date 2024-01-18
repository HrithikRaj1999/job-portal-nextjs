"use server";

import { createJobSchema } from "@/lib/validation";
import { createSlug } from "@/utils/commonUtilFunctions";
import { nanoid } from "nanoid";
import { put } from "@vercel/blob";
import path from "path";
import { redirect } from "next/navigation";
export const createJobPosting = async (formData: FormData) => {
  const values = Object.fromEntries(formData.entries());
  const { companyLogo, ...filteredValues } = createJobSchema.parse(values);
  const slug = `${createSlug(filteredValues.title)}-${nanoid(10)}`;
  let companyLogoUrl: string | undefined;
  if (companyLogo) {
    const blob = await put(
      `company_logos/${slug}${path.extname(companyLogo.name)}`,
      companyLogo,
      {
        access: "public",
        addRandomSuffix: false,
      },
    );
    companyLogoUrl = blob.url;
  }

  await prisma.job.create({
    data: {
      slug,
      ...filteredValues,
      companyLogoUrl,
      description: filteredValues.description?.trim() || "",
      salary: parseFloat(filteredValues.salary),
    },
  });

  redirect("/job/job-submitted");
};
