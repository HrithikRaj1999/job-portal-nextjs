import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import React, { forwardRef } from "react";

const Select = forwardRef<HTMLSelectElement, React.HTMLProps<HTMLSelectElement>>(({ className, children, ...props }, ref) => {
  return (
    <div className="relative">
      <select className={cn("ring-offset-none h-10 w-full appearance-none truncate rounded-md border border-input bg-background px-3 py-2 text-sm", className)} ref={ref} {...props}>
        {children}
      </select>
      <ChevronDownIcon className="absolute right-4 top-2 h-5 w-5 opacity-50" />
    </div>
  );
});

export default Select;
