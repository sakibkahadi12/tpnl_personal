"use client";

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
import { AuthContext } from "@/context/AuthContext";
import { useAuth } from "@/hooks/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email({ message: "Email address is required" }),
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters long." }),
});

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLoginSubmit = async (data) => {
    try {
      setIsLoading(true);
      setError("");
      const { email, password } = data;

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password");
      } else {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleLoginSubmit)}>
        {error && (
          <div className="mb-4 rounded-[10px] bg-red-50 p-3 text-sm text-red-500">
            {error}
          </div>
        )}

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="text-[24px] leading-[36px] font-medium text-[#303132]">
                Email Address <span className="text-[#E94949]">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  className={
                    "h-[53px] rounded-[10px] border-none bg-white px-4 text-[16px] leading-[24px] font-medium text-[#525355]"
                  }
                  placeholder="Ex: Johndoe@gmail.com"
                  type="email"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mb-2">
              <FormLabel className="text-[24px] leading-[36px] font-medium text-[#303132]">
                Password <span className="text-[#E94949]">*</span>
              </FormLabel>
              <FormControl>
                <InputPassword
                  className={
                    "h-[53px] rounded-[10px] border-none bg-white px-4 text-[16px] leading-[24px] font-medium text-[#525355]"
                  }
                  placeholder="**************"
                  type="password"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <p className="mb-6 text-right text-[16px] leading-[24px] font-medium text-[#3EA3DB]">
          <Link href="/auth/forgot-password" className="cursor-pointer">
            Forgot Password
          </Link>
        </p>

        <button
          type="submit"
          disabled={isLoading}
          className="h-[60px] w-full cursor-pointer rounded-[10px] bg-[#2D77A8] text-[24px] leading-[34px] font-bold text-[#EAF1F6] disabled:opacity-70"
        >
          {isLoading ? "Loading..." : "Log In"}
        </button>
      </form>
    </Form>
  );
}
