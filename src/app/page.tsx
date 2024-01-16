import JobFilterSideBar from "@/components/jobs/JobFilterSideBar";
import JobsResults from "@/components/jobs/JobsResults";
import H1 from "@/components/ui/h1";
import { JobFilterTypes } from "@/lib/validation";

interface JobFilter {
  searchParams: {
    search?: string;
    type?: string;
    location?: string;
    remote?: string;
  };
}
export default async function Home({
  searchParams: { search, type, location, remote },
}: JobFilter) {
  const filterValues: JobFilterTypes = {
    search,
    type,
    location,
    remote: remote === "true",
  };
  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <H1>Developer Jobs</H1>
        <p className="text-muted-foreground"> Choose the job you like</p>
      </div>
      <section className="flex flex-col gap-4 md:flex-row">
        <JobFilterSideBar filterValues={filterValues} />
        <JobsResults filterValues={filterValues} />
      </section>
    </main>
  );
}
