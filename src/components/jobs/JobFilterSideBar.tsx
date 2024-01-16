import { filterJobs, getDistinctLocation } from "@/utils/jobs/commonFunctions";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Select from "../ui/select";
import { jobTypes } from "@/constants/jobs/job-types";
import { Button } from "../ui/button";
const OptionGenerate = ({ from }: { from: string[] }) => (
  <>
    <option value="">All</option>
    {from.map((entity) => (
      <option key={entity} value={entity}>
        {entity}
      </option>
    ))}
  </>
);

const JobFilterSideBar = async () => {
  const distinctLocation = await getDistinctLocation();
  return (
    <aside className="sticky top-0 h-fit rounded-lg border bg-background">
      <form action={filterJobs}>
        <div className="flex flex-col ">
          <div className="flex flex-col gap-3 p-4">
            <Label htmlFor="search" className="text-md">
              Search
            </Label>
            <Input id="search" name="search" placeholder="Title, company, etc." />
          </div>
          <div className="flex flex-col gap-3 p-4">
            <Label htmlFor="type" className="text-md">
              Job Type
            </Label>
            <Select id="type" name="type">
              <OptionGenerate from={jobTypes} />
            </Select>
          </div>
          <div className="flex flex-col gap-3 p-4">
            <Label htmlFor="location" className="text-md">
              Location
            </Label>
            <Select id="location" name="location">
              <OptionGenerate from={distinctLocation} />
            </Select>
          </div>
          <div className="flex items-center gap-3 p-4">
            <input id="remote" type="checkbox" name="remote" className="scale-125 accent-slate-900" />
            <Label htmlFor="remote">Remote Jobs</Label>
          </div>
          <div className="flex items-center gap-3 p-4">
            <Button className=" w-full">Filter Jobs</Button>
          </div>
        </div>
      </form>
    </aside>
  );
};
export default JobFilterSideBar;
