import { formatCurrency, getTimeDifferenceOfCreatedAndNow } from "@/lib/utils";
import { Job } from "@prisma/client";
import { Banknote, Briefcase, Clock, Globe2, MapPin } from "lucide-react";
import Image from "next/image";
import Badge from "../ui/Badge";

interface JobListItemsProps {
  job: Job;
}
const JobListItem = ({
  job: {
    title,
    companyName,
    type,
    salary,
    location,
    locationType,
    companyLogoUrl,
    createdAt,
  },
}: JobListItemsProps) => {
  return (
    <>
      {" "}
      <article className=" m-1 flex gap-4 rounded-lg  border p-2 hover:bg-muted/60">
        <Image
          className="self-center rounded-xl"
          src={companyLogoUrl || "/company-logo.png"}
          alt={""}
          width={100}
          height={100}
        />
        <div className=" flex w-full justify-between">
          <div className=" flex-col space-y-3">
            <div>
              <h2 className="text-xl font-medium">{title}</h2>
              <h3 className="text-sm text-muted-foreground">{companyName}</h3>
            </div>
            <div className="text-muted-foreground">
              <p className="flex items-center gap-1.5 sm:hidden">
                <Briefcase size={16} className="shrink-0" />
                {type}
              </p>
              <p className="flex items-center gap-1.5 ">
                <MapPin size={16} className="shrink-0" />
                {locationType}
              </p>
              <p className="flex items-center gap-1.5 ">
                <Globe2 size={16} className="shrink-0" />
                {location}
              </p>
              <p className="flex items-center gap-1.5 ">
                <Banknote size={16} className="shrink-0" />
                {formatCurrency(salary)}
              </p>
            </div>
          </div>
          <div className="mx-2 hidden shrink-0 flex-col items-end justify-between sm:flex">
            <Badge>{type}</Badge>
            <p className="flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground">
              <Clock size={16} />
              {getTimeDifferenceOfCreatedAndNow(createdAt)}
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default JobListItem;
