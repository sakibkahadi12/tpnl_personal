"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { InputFile } from "../ui/input-file";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { useEffect } from "react";

const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  course: z.string().min(1, { message: "Course is required" }),
  type: z.string().min(1, { message: "Type is required" }),
  percentage: z.string().min(1, { message: "Percentage is required" }),
  deadline: z.string().min(1, { message: "Deadline is required" }),
  status: z.string().default("Active"),
  details: z.string().min(1, { message: "Scholarship details is required" }),
  how_to_apply: z.string().optional(),
  file: z.any().optional(),
  // apply_link: z.string().min(1, { message: "Apply link is required" }),
});

const ScholarshipForm = ({ slug }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      course: "",
      type: "",
      percentage: "",
      deadline: "",
      status: "Active",
      details: "",
      how_to_apply: "",
      file: null,
      // apply_link: "",
    },
  });
useEffect(() => {
  console.log("Errors:", form.formState.errors);
}, [form.formState.errors]);
  const handleLoginSubmit = async (data) => {
    try {
      console.log("data", data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLoginSubmit)}>
          {/* row-1 */}
          <div className="mb-5 grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[16px] font-medium text-[#303132]">
                    Title <span className="text-[#E94949]">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={
                        "h-[53px] rounded-[10px] border-none bg-[#EAF1F6] px-4 text-[16px] font-medium text-[#525355]"
                      }
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="course"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[16px] font-medium text-[#303132]">
                    Course <span className="text-[#E94949]">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger
                        className={
                          "h-[53px] w-full rounded-[10px] border border-none bg-[#EAF1F6] text-[#525355] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                        }
                      >
                        <SelectValue placeholder="Choose Course" />
                      </SelectTrigger>
                      <SelectContent className={"bg-[#EAF1F6]"}>
                        <SelectItem value="Featured">Featured</SelectItem>
                        <SelectItem value="More News">More News</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[16px] font-medium text-[#303132]">
                    Type <span className="text-[#E94949]">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger
                        className={
                          "h-[53px] w-full rounded-[10px] border border-none bg-[#EAF1F6] text-[#525355] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                        }
                      >
                        <SelectValue placeholder="Choose Type" />
                      </SelectTrigger>
                      <SelectContent className={"bg-[#EAF1F6]"}>
                        <SelectItem value="Featured">Featured</SelectItem>
                        <SelectItem value="More News">More News</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* row-2 */}
          <div className="mb-5 grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FormField
              control={form.control}
              name="percentage"
              render={({ field }) => (
                // percentage
                <FormItem>
                  <FormLabel className="text-[16px] font-medium text-[#303132]">
                    Percentage(%) <span className="text-[#E94949]">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={
                        "h-[53px] rounded-[10px] border-none bg-[#EAF1F6] px-4 text-[16px] font-medium text-[#525355]"
                      }
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* dealine */}
            <FormField
              control={form.control}
              name="deadline"
              render={({ field }) => (
                <FormItem className={""}>
                  <FormLabel className="text-[16px] font-medium text-[#303132]">
                    Deadline <span className="text-[#E94949]">*</span>
                  </FormLabel>
                  <FormControl>
                    {/* deadline  */}
                    <Input
                      className={
                        "grid h-[53px] grid-cols-1 rounded-[10px] border-none bg-[#EAF1F6] px-4 text-[16px] font-medium text-[#525355] md:px-2 lg:px-4"
                      }
                      type="date"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[16px] font-medium text-[#303132]">
                    Status <span className="text-[#E94949]">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger
                        className={
                          "h-[53px] w-full rounded-[10px] border border-none bg-[#EAF1F6] text-[#525355] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                        }
                      >
                        <SelectValue placeholder="Active" />
                      </SelectTrigger>
                      <SelectContent className={"bg-[#EAF1F6]"}>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="More News">More News</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Scholarship details */}
          <div className="mb-5 grid">
            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem className={""}>
                  <FormLabel className="text-[16px] font-medium text-[#303132]">
                    Scholarship Details{" "}
                    <span className="text-[#E94949]">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className={
                        "min-h-[160px] rounded-[10px] border-2 border-dotted border-[#9EC0D7] bg-[#EAF1F6] px-4 text-[16px] font-medium text-[#525355]"
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* how to apply */}
          <div className="mb-5 grid">
            <FormField
              control={form.control}
              name="how_to_apply"
              render={({ field }) => (
                <FormItem className={""}>
                  <FormLabel className="text-[16px] font-medium text-[#303132]">
                    How to apply
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className={
                        "min-h-[160px] rounded-[10px] border-2 border-dotted border-[#9EC0D7] bg-[#EAF1F6] px-4 text-[16px] font-medium text-[#525355]"
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* thumnail */}
          <div className="mb-5 grid">
            <FormField
              control={form.control}
              name="file"
              render={() => (
                <FormItem className={"mb-5 w-full sm:w-[458px] md:w-1/2"}>
                  <FormLabel className="text-[16px] font-medium text-[#303132]">
                    Thumbnail <span className="text-[#E94949]">*</span>
                  </FormLabel>
                  <InputFile onChange={(e) => console.log("object")} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* apply link
          <div className="mb-5 grid">
            {!slug && (
              <FormField
                control={form.control}
                name="apply_link"
                render={({ field }) => (
                  <FormItem className="lg:w-[310px]">
                    <FormLabel className="text-[16px] font-medium text-[#303132]">
                      Apply link <span className="text-[#E94949]">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className={
                          "h-[53px] rounded-[10px] border-none bg-[#EAF1F6] px-4 text-[16px] font-medium text-[#525355]"
                        }
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div> */}

          <div className="flex justify-end">
            <Button
              type="submit"
              className="mt-5 h-[53px] w-[154px] cursor-pointer rounded-[10px] bg-[#2D77A8]"
            >
              <p className="text-[16px] font-semibold text-[#EAF1F6]">Save</p>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ScholarshipForm;
