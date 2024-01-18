"use client";
import LocationInput from "@/components/jobs/LocationInput";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import H1 from "@/components/ui/h1";
import { Input } from "@/components/ui/input";
import Select from "@/components/ui/select";
import { jobTypes, locationTypes } from "@/constants/jobs/job-types";
import { CreateJobValues, createJobSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import RichTextEditor from "@/components/ui/RichTextEditor";
import { draftToMarkdown } from "markdown-draft-js";
import LoadingButton from "@/components/ui/LoadingButton";

const NewJobForm = () => {
  const form = useForm<CreateJobValues>({
    resolver: zodResolver(createJobSchema),
  });
  const {
    handleSubmit,
    watch,
    trigger,
    control,
    setValue,
    setFocus,
    formState: { isSubmitting },
  } = form;
  const onSumit = (values: CreateJobValues) => {
    try {
      alert(JSON.stringify(values, null, 4));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <main className=" mx-auto my-10 max-w-sm  space-y-10 border border-gray-900/10 p-3  sm:max-w-lg ">
      <H1>Get the best Candidate for your Company</H1>
      <Form {...form}>
        <form className="space-y-8" noValidate onSubmit={handleSubmit(onSumit)}>
          <FormField
            name="title"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="eg. Mern Stack developer"
                    {...field}
                    //onBlur={() => trigger("title")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="type"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type of Job</FormLabel>
                <FormControl>
                  <Select
                    {...field}
                    defaultValue={""}
                    //onBlur={() => trigger("type")}
                  >
                    <option value="" hidden>
                      Select an option
                    </option>
                    {jobTypes.map((jobType) => (
                      <option key={jobType}>{jobType}</option>
                    ))}
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />{" "}
          <FormField
            name="companyName"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organisation Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="eg. google"
                    {...field}
                    //onBlur={() => trigger("companyName")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="companyLogo"
            control={control}
            render={({ field: { value, ...fieldValues } }) => (
              <FormItem>
                <FormLabel>Organisation Logo</FormLabel>
                <FormControl>
                  <Input
                    {...fieldValues}
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files![0];
                      fieldValues.onChange(file);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="locationType"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location of Job</FormLabel>
                <FormControl>
                  <Select
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      if (e.currentTarget.value === "Remote")
                        trigger("location");
                    }}
                    defaultValue={""}
                    // //onBlur={() => trigger("locationType")}
                  >
                    <option value="" hidden>
                      Select an option
                    </option>
                    {locationTypes.map((locationType) => (
                      <option key={locationType}>{locationType}</option>
                    ))}
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="location"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Office Location</FormLabel>
                <FormControl>
                  <LocationInput
                    onLocationSelected={field.onChange}
                    ref={field.ref}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-y-2">
            <FormLabel>Apply using</FormLabel>
            <div className="flex items-center justify-between">
              <FormField
                name="applicationEmail"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email"
                        {...field}
                        //onBlur={() => trigger("companyName")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex"> OR</div>

              <FormField
                name="applicationUrl"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="website"
                        {...field}
                        //onBlur={() => trigger("companyName")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your details to Hiring Manager</FormLabel>
                <FormControl>
                  <RichTextEditor
                    onChange={(draft) => draftToMarkdown(draft)}
                    ref={field.ref}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="salary"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Salary</FormLabel>
                <FormControl>
                  <Input placeholder="$100LPA" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <LoadingButton type="submit" loading={isSubmitting}>
            Submit
          </LoadingButton>
        </form>
      </Form>
    </main>
  );
};

export default NewJobForm;
