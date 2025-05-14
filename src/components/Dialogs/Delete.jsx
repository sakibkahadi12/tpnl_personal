"use client";

import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";


const Delete = ({ open, onOpenChange ,handleDelete }) => {
    
  return (
    <DialogContent className="h-[349px] rounded-[20px] bg-white p-0">
      <DialogTitle className="flex items-center justify-center rounded-tl-[20px] rounded-tr-[20px] bg-[#9EC0D7] text-center text-[20px] font-[400] text-[#303132] lg:text-[25px]">
        Delete
      </DialogTitle>

      <DialogDescription className="my-2 px-6 text-center text-[16px] font-normal text-[#303132] lg:my-8 lg:text-[20px]">
        Are you sure you want to selected{" "}
        <span className="text-[#E94949]">Delete</span> Object?
      </DialogDescription>

      <div className="flex items-center justify-between px-6 lg:mb-10 lg:px-[63px]">
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          className="h-[53px] cursor-pointer rounded-[10px] border border-[#2D77A8] px-6 text-[14px] font-semibold text-[#2D77A8] hover:bg-[#2d77a8] hover:text-[#EAF1F6] lg:w-[154px] lg:text-[16px]"
        >
          Back
        </button>
        <button onClick={handleDelete}
          type="submit"
          className="h-[53px] cursor-pointer rounded-[10px] bg-[#E94949] px-6 text-[14px] font-semibold text-[#EAF1F6] hover:opacity-90 lg:w-[154px] lg:text-[16px]"
        >
          Delete
        </button>
      </div>
    </DialogContent>
  );
};



export default Delete;
