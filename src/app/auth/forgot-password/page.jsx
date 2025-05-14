import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const ForgotPassword = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#EAF1F6]">
      <div className="mb-[58px] h-[149px] w-[150px]">
        <Image
          src={"/assets/images/auth-tpnl-logo.svg"}
          alt="tpnl-logo"
          width={131}
          height={129}
        />
      </div>
      <div className="mb-4 w-full max-w-[643px]">
        <Label
          htmlFor="Email"
          className="block pl-2 text-[24px] leading-[36px] font-[500] text-[#303132]"
        >
          Email Address <span className="text-red-500">*</span>
        </Label>
        <Input
          className={
            "h-[53px] rounded-[10px] border-none bg-white px-4 text-[16px] leading-[24px] font-medium text-[#525355]"
          }
          placeholder="Ex: Johndoe@gmail.com"
          type="email"
          // {...field}
        />
      </div>
      <div className="flex w-full max-w-[643px] justify-between gap-4">
        <button
          type="button"
          className="h-[60px] w-1/4 cursor-pointer rounded-[10px] border border-[#2D77A8] bg-transparent text-[24px] leading-[34px] font-[600] text-[#2D77A8] hover:bg-[#ffffff]"
        >
          Back
        </button>

        <button
          type="submit"
          className="h-[60px] w-1/4 cursor-pointer rounded-[10px] bg-[#2D77A8] text-[24px] leading-[34px] font-[600] text-[#EAF1F6] hover:bg-[#246089]"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
