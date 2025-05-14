"use client";
import { useState, useRef } from "react";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(Array(5).fill(""));
  const inputRefs = useRef([]);

  const handleOtpChange = (index, value) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleOtpKeyDown = (index, event) => {
    if (event.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
      handleOtpChange(index - 1, "");
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const pastedData = event.clipboardData.getData("text/plain");
    const updatedOtp = pastedData
      .slice(0, 6)
      .split("")
      .map((char, index) => otp[index] || char);
    setOtp(updatedOtp);
    updatedOtp.forEach((_, index) => {
      inputRefs.current[index].value = updatedOtp[index];
    });
    inputRefs.current[4].focus();
  };

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
          htmlFor="OTP"
          className="block pl-2 text-[24px] leading-[36px] font-[500] text-[#303132]"
        >
          Enter OTP <span className="text-red-500">*</span>
        </Label>
        <div className="flex justify-between gap-4">
          {otp.map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={otp[index]}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleOtpKeyDown(index, e)}
              onPaste={handlePaste}
              ref={(ref) => (inputRefs.current[index] = ref)}
              className="h-[60px] w-[15%] rounded-[10px] border border-[#d1d5db] bg-white px-4 text-center text-[24px] leading-[34px] font-[600] text-[#525355] focus:border-[#2D77A8] focus:outline-none"
            />
          ))}
        </div>
      </div>
      <div className="flex w-full max-w-[643px] justify-between gap-4">
        <button
          type="button"
          className="h-[60px] px-4 cursor-pointer rounded-[10px] border border-[#2D77A8] bg-transparent text-[24px] leading-[34px] font-[600] text-[#2D77A8] hover:bg-[#ffffff]"
        >
          Resend code
        </button>

        <button
          type="submit"
          className="h-[60px] w-1/4 cursor-pointer rounded-[10px] bg-[#2D77A8] text-[24px] leading-[34px] font-[600] text-[#EAF1F6] hover:bg-[#246089]"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default VerifyOtp;
