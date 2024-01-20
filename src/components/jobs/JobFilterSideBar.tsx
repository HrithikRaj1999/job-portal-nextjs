import { filterJobs, getDistinctLocation } from "@/utils/jobs/jobUtilFunctions";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Select from "../ui/select";
import { jobTypes } from "@/constants/jobs/job-types";
import FormSubmitButton from "../ui/FormSubmitButton";
import { JobFilterTypes } from "@/lib/validation";
const OptionGenerate = ({
  from,
  ...rest
}: {
  from: string[];
  [x: string]: any;
}) => (
  <>
    <option value="">All</option>
    {from.map((entity) => (
      <option {...rest} key={entity} value={entity}>
        {entity}
      </option>
    ))}
  </>
);

const JobFilterSideBar = async ({
  filterValues: { search, type, location, remote },
}: {
  filterValues: JobFilterTypes;
}) => {
  const distinctLocation = await getDistinctLocation();
  console.log({ search, type, location, remote });
  return (
    <aside className="sticky top-0 h-fit rounded-lg border bg-background">
      <form
        action={filterJobs}
        key={JSON.stringify({ search, type, location, remote })}
      >
        <div className="flex flex-col ">
          <div className="flex flex-col gap-3 p-4">
            <Label htmlFor="search" className="text-md">
              Search
            </Label>
            <Input
              defaultValue={search}
              id="search"
              name="search"
              placeholder="Title, company, etc."
            />
          </div>
          <div className="flex flex-col gap-3 p-4">
            <Label htmlFor="type" className="text-md">
              Job Type
            </Label>
            <Select id="type" name="type" defaultValue={type ?? ""}>
              <OptionGenerate from={jobTypes} />
            </Select>
          </div>
          <div className="flex flex-col gap-3 p-4">
            <Label htmlFor="location" className="text-md">
              Location
            </Label>
            <Select id="location" name="location" defaultValue={location ?? ""}>
              <OptionGenerate from={distinctLocation} />
            </Select>
          </div>
          <div className="flex items-center gap-3 p-4">
            <input
              id="remote"
              type="checkbox"
              name="remote"
              defaultChecked={remote}
              className="scale-125 accent-slate-900"
            />
            <Label htmlFor="remote">Remote Jobs</Label>
          </div>
          <div className="flex items-center gap-3 p-4">
            <FormSubmitButton className=" w-full">Filter Jobs</FormSubmitButton>
          </div>
        </div>
      </form>
    </aside>
  );
};
export default JobFilterSideBar;
