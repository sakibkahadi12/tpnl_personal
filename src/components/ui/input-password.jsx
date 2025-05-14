"use client"
import { cn } from "@/lib/utils";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import * as React from "react";

const InputPassword = React.forwardRef(
  ({ className, type, onChange, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = (e) => {
      e.preventDefault(); // Prevent form submission
      setShowPassword((prev) => !prev);
    };

    const handleInputChange = (e) => {
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          className={cn(
            "bg-background placeholder:text-muted-foreground flex w-full rounded-md px-3 py-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          onChange={handleInputChange}
          {...props}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-3 flex cursor-pointer items-center focus:outline-none"
          aria-label={showPassword ? "Hide password" : "Show password"}
          tabIndex={-1} // Prevent tab focus since it's just a visual toggle
        >
          {showPassword ? (
            <EyeIcon className="h-[20px] w-[20px] text-[#2D77A8]" />
          ) : (
            <EyeOffIcon className="h-[20px] w-[20px] text-[#2D77A8]" />
          )}
        </button>
      </div>
    );
  },
);
InputPassword.displayName = "InputPassword";

export { InputPassword };
