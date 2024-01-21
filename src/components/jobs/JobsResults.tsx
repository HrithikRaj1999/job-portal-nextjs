import { getJobsResults } from "@/utils/jobs/jobUtilFunctions";
import JobListItem from "./JobListItem";
import { Suspense } from "react";
import { JobFilterTypes } from "@/lib/validation";
import Link from "next/link";
import Pagination from "./Pagination";
import { Loader2 } from "lucide-react";

interface JobResultsProps {
  filterValues: JobFilterTypes;
  page?: number
}
const JobsResults = async ({
  filterValues,
  page = 1 //default page number
}: JobResultsProps) => {
  const { search, type, remote, location } = filterValues
  const jobsPerPage = 3; 
  const skip = (page - 1) * jobsPerPage //if we are on page 1 then 0 items must be skipped
  const { jobs, totalResults } = await getJobsResults({ search, type, remote, location, jobsPerPage, skip });
  if (!jobs || !jobs.length) {
    return <>No Jobs Found Sorry !</>;
  }
  return (
    <Suspense fallback={<Loader2 size={16} className="animate-spin" />}>
      <div className="space-y-4">
        {jobs.map((job) => (
          <Link href={`job/${job.slug}`} key={job.id}>
            <JobListItem job={job} />
          </Link>
        ))}
        {jobs.length > 0 ? <Pagination currentPage={page} totalPages={Math.ceil(totalResults / jobsPerPage)} filterValues={filterValues} /> : null}
      </div>
    </Suspense>
  );
};

export default JobsResults;
