import { getJobsResults } from "@/utils/jobs/jobUtilFunctions";
import JobListItem from "./JobListItem";
import { Suspense } from "react";
import { JobFilterTypes } from "@/lib/validation";
import Link from "next/link";

interface JobResultsProps {
  filterValues: JobFilterTypes;
}
const JobsResults = async ({
  filterValues: { search, type, remote, location },
}: JobResultsProps) => {
  const jobs = await getJobsResults({ search, type, remote, location });
  if (!jobs || !jobs.length) {
    return <>No Jobs Found Sorry !</>;
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="space-y-4">
        {jobs.map((job) => (
          <Link href={`job/${job.slug}`} key={job.id}>
            <JobListItem job={job} />
          </Link>
        ))}
      </div>
    </Suspense>
  );
};

export default JobsResults;
