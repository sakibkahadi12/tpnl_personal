import * as React from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

const InputSearch = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <>
      {props.label && (
        <p className="mb-[12px] text-[14px] leading-[20px] font-medium text-[#DEDEDE]">
          {props.label}
        </p>
      )}
      <div className="relative flex items-center">
        <input
          type={type}
          style={props.style}
          className={cn(
            "bg-background placeholder:text-muted-foreground flex w-full rounded-[10px] border border-[#006988] py-2 pr-1 pl-7 text-sm text-white focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:px-10",
            className,
          )}
          ref={ref}
          {...props}
        />
        <Search className="absolute left-2 h-[16px] w-[16px] text-[#006988] md:left-3" />
      </div>
    </>
  );
});
InputSearch.displayName = "InputSearch";

export { InputSearch };
