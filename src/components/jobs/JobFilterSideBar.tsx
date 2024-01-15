import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function JobFilterSideBar() {
  async function filterJobs(formData: FormData) {
    "use server";
  }
  return (
    <aside className="sticky top-5 h-fit rounded-lg border bg-background">
      <form action={filterJobs}>
        <div className="flex flex-col gap-3 p-4">
          <Label htmlFor="search" className="text-md">
            Search
          </Label>
          <Input id="search" name="search" placeholder="Title, company, etc." />
        </div>
      </form>
    </aside>
  );
}
