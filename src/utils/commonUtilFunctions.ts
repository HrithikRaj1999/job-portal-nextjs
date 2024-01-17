import { JobFilterTypes } from "@/lib/validation";

export const getTitle = ({ search, type, location, remote }: JobFilterTypes) => {
  let titlePrefix = "";
  if (search) titlePrefix += `${search} Jobs `;
  if (type) titlePrefix += search ? `, ${type} Developer Jobs ` : `${type} Developer Jobs`;
  if (remote) titlePrefix += `Remote Developer Jobs`;
  const titleSufix = location ? ` in ${location}` : "";
  return `${titlePrefix}${titleSufix}`;
};
