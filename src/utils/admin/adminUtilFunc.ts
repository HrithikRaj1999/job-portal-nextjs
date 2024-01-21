import { UserResource } from "@clerk/types";
import { User } from "@clerk/nextjs/server";
export function isAdmin(user: UserResource | User) {
  return user.publicMetadata?.role === "admin";
}
