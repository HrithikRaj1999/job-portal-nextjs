import React, { PropsWithChildren } from "react";

const Badge = ({ children }: PropsWithChildren) => {
  return <span className="text-md rounded border bg-muted px-2 py-0.5 font-medium text-muted-foreground">{children}</span>;
};

export default Badge;
