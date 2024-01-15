import JobFilterSideBar from "@/components/jobs/JobFilterSideBar";
import JobListItem from "@/components/jobs/JobListItem";
import prisma from "@/lib/prisma";
import { Job } from "@prisma/client";

export default async function Home() {
  const jobs = await prisma.job.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });
  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Developer Jobs
        </h1>
        <p className="text-muted-foreground"> Choose the job you like</p>
      </div>
      <section className="flex flex-col gap-4 md:flex-row">
        <JobFilterSideBar />
        <div className="space-y-4">
          {jobs.map((job) => (
            <JobListItem key={job.id} job={job} />
          ))}
        </div>
      </section>
    </main>
  );
}
