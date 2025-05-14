"use client";

import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { InputFile } from "../ui/input-file";

const CoursesUploadFile = ({ open, onOpenChange }) => {
  return (
    <DialogContent className="rounded-[20px] bg-white p-0">
      <DialogTitle className="rounded-tl-[20px] rounded-tr-[20px] bg-[#9EC0D7] py-2.5 text-center text-[20px] font-[400] text-[#303132] lg:text-[25px]">
        Upload Documents
      </DialogTitle>

      <DialogDescription className="my-2 px-6 text-center text-[16px] font-normal text-[#303132] lg:my-8 lg:text-[20px]">
        Supported format documents{" "}
        <span className="text-[#3EA3DB]">“.xlsx”</span>
      </DialogDescription>

      <div className="mb-12 px-6 lg:px-[63px]">
        <InputFile onChange={(e) => console.log("object")} />
      </div>

      <div className="mb-10 flex items-center justify-between px-6 lg:px-[63px]">
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          className="h-[53px] cursor-pointer rounded-[10px] border border-[#E94949] px-6 text-[14px] font-semibold text-[#E94949] lg:w-[154px] lg:text-[16px]"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="h-[53px] cursor-pointer rounded-[10px] bg-[#2D77A8] px-6 text-[14px] font-semibold text-[#EAF1F6] lg:w-[154px] lg:text-[16px]"
        >
          Upload
        </button>
      </div>
    </DialogContent>
  );
};



export default CoursesUploadFile;
