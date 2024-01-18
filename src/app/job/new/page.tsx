import { Metadata } from "next";
import React from "react";
import NewJobForm from "./NewJobForm";

//this page is need becase we can only create a metadata in server component
export const metadata: Metadata = {
  title: "Create new job",
};
const page = () => {
  return <NewJobForm />;
};

export default page;
