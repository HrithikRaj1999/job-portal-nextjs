import { JobFilterTypes } from "@/lib/validation";

export const getTitle = ({
  search,
  type,
  location,
  remote,
}: JobFilterTypes) => {
  let titlePrefix = "";
  if (search) titlePrefix += `${search} Jobs `;
  if (type)
    titlePrefix += search
      ? `, ${type} Developer Jobs `
      : `${type} Developer Jobs`;
  if (remote) titlePrefix += `Remote Developer Jobs`;
  const titleSufix = location ? ` in ${location}` : "";
  return `${titlePrefix}${titleSufix}`;
};

export function createSlug(str: string) {
  return str
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}
