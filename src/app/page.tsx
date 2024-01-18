import JobFilterSideBar from "@/components/jobs/JobFilterSideBar";
import JobsResults from "@/components/jobs/JobsResults";
import H1 from "@/components/ui/h1";
import { JobFilterTypes } from "@/lib/validation";
import { getTitle } from "@/utils/commonUtilFunctions";
import { Metadata } from "next";

interface JobFilter {
  searchParams: {
    search?: string;
    type?: string;
    location?: string;
    remote?: string;
  };
}
//function name has be generateMetadata else next js will not identify this.
export function generateMetadata({ searchParams: { search, type, location, remote } }: JobFilter): Metadata {
  return {
    title: `${getTitle({ search, type, location, remote: remote === "true" })} | Swapna Karya | Find your dream job`,
    description: getTitle({ search, type, location, remote: remote === "true" }),
  };
}

export default async function Home({ searchParams: { search, type, location, remote } }: JobFilter) {
  const filterValues: JobFilterTypes = {
    search,
    type,
    location,
    remote: remote === "true",
  };
  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <H1>{getTitle({ ...filterValues })}</H1>
        <p className="text-muted-foreground"> Choose the job you like</p>
      </div>
      <section className="flex flex-col gap-4 md:flex-row">
        <JobFilterSideBar filterValues={filterValues} />
        <JobsResults filterValues={filterValues} />
      </section>
    </main>
  );
}
