import { PropsWithChildren } from "react";
import { ClerkProvider } from "@clerk/nextjs"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin",
};
export default function Layout({ children }: PropsWithChildren) {
    return <ClerkProvider>{children}</ClerkProvider>
}
