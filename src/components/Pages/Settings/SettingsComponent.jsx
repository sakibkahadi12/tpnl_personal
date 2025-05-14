"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputPassword } from "@/components/ui/input-password";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";

const formSchema = z.object({
  // email: z.string().email({ message: "Email address is required" }),
  new_password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters long." }),
});

const SettingsComponent = () => {
  const [error, setError] = useState("");

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      new_password: "",
    },
  });

  const handleChangePassword = async (data) => {
    try {
      const { new_password } = data;
      // console.log("email", email);
      console.log("password", new_password);

      router.push("/");
    } catch (error) {
      setError("An unexpected error occurred");
    }
  };
  return (
    <div className="mt-6 mb-4 w-full">
      <div className="h-[60px] rounded-tl-[24px] rounded-tr-[24px] bg-[#9EC0D7] p-[10px] pl-[20px] sm:pl-[65px]">
        <p className="text-[25px] font-[400] text-[#303132]">Update Password</p>
      </div>

      <div className="space-y-4 rounded-b-[24px] bg-white p-6 sm:px-[65px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleChangePassword)}>
            {error && <div className="mb-4 text-sm text-red-500">{error}</div>}

            <div className="mb-8 sm:w-[70%]">
              <div className="sm:w-1/2">
                <FormField
                  control={form.control}
                  name="new_password"
                  render={({ field }) => (
                    <FormItem className="mb-2">
                      <FormLabel className="text-[16px] leading-[36px] font-[500] text-[#303132]">
                        Current Password
                      </FormLabel>
                      <FormControl>
                        <InputPassword
                          className={
                            "h-[53px] rounded-[10px] border-none bg-[#EAF1F6] px-4 text-[16px] leading-[24px] font-[500] text-[#525355]"
                          }
                          placeholder="**************"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="gap-4 mb-8 flex flex-col sm:flex-row sm:w-[70%]">
              <div className="sm:w-1/2">
                <FormField
                  control={form.control}
                  name="new_password"
                  render={({ field }) => (
                    <FormItem className="mb-2">
                      <FormLabel className="text-[16px] leading-[36px] font-[500] text-[#303132]">
                        Create New Password{" "}
                      </FormLabel>
                      <FormControl>
                        <InputPassword
                          className={
                            "h-[53px] rounded-[10px] border-none bg-[#EAF1F6] px-4 text-[16px] leading-[24px] font-[500] text-[#525355]"
                          }
                          placeholder="**************"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="sm:w-1/2">
                <FormField
                  control={form.control}
                  name="new_password"
                  render={({ field }) => (
                    <FormItem className="mb-2">
                      <FormLabel className="text-[16px] leading-[36px] font-[500] text-[#303132]">
                        Create New Password{" "}
                      </FormLabel>
                      <FormControl>
                        <InputPassword
                          className={
                            "h-[53px] rounded-[10px] border-none bg-[#EAF1F6] px-4 text-[16px] leading-[24px] font-[500] text-[#525355]"
                          }
                          placeholder="**************"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="h-[60px] w-[155px] cursor-pointer rounded-[10px] bg-[#2D77A8] text-[16px] leading-[34px] font-bold text-[#EAF1F6]"
              >
                Change
              </button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SettingsComponent;
