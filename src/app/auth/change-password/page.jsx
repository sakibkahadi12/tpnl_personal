"use client";
import { useState } from "react";
import { InputPassword } from "@/components/ui/input-password";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleNewPasswordChange = (e) => {
    const value = e.target.value;
    setNewPassword(value);
    validatePassword(value, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    validatePassword(newPassword, value);
  };

  const validatePassword = (password, confirmPassword) => {
    let error = "";

    if (password.length < 8) {
      error = "Password must be at least 8 characters long.";
    } else if (!/[A-Z]/.test(password)) {
      error = "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(password)) {
      error = "Password must contain at least one lowercase letter.";
    } else if (!/\d/.test(password)) {
      error = "Password must contain at least one number.";
    } else if (password !== confirmPassword) {
      error = "Passwords do not match.";
    }

    setPasswordError(error);
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
          htmlFor="Password"
          className="block pl-2 text-[24px] leading-[36px] font-[500] text-[#303132]"
        >
          New Password <span className="text-red-500">*</span>
        </Label>
        <InputPassword
          value={newPassword}
          onChange={handleNewPasswordChange}
          className={
            "h-[53px] rounded-[10px] border-none bg-white px-4 text-[16px] leading-[24px] font-medium text-[#525355]"
          }
          placeholder="Enter your new password"
        />
        {passwordError && (
          <div className="mt-2 text-sm text-red-500">{passwordError}</div>
        )}
      </div>
      <div className="mb-4 w-full max-w-[643px]">
        <Label
          htmlFor="ConfirmPassword"
          className="block pl-2 text-[24px] leading-[36px] font-[500] text-[#303132]"
        >
          Confirm Password <span className="text-red-500">*</span>
        </Label>
        <InputPassword
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className={
            "h-[53px] rounded-[10px] border-none bg-white px-4 text-[16px] leading-[24px] font-medium text-[#525355]"
          }
          placeholder="Confirm your new password"
        />
        {passwordError && (
          <div className="mt-2 text-sm text-red-500">{passwordError}</div>
        )}
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
          className="h-[60px] cursor-pointer rounded-[10px] bg-[#2D77A8] px-2 text-[24px] leading-[34px] font-[600] text-[#EAF1F6] hover:bg-[#246089]"
          disabled={!!passwordError}
        >
          Change Password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
