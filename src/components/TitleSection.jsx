"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TitleSection = ({ isBackButton = true, title = "" }) => {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await signOut({ redirect: false });
      router.push("/auth/login");
      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="mb-7 flex items-center justify-between">
      {/* tittle and backbutton */}
      <div className="flex items-center gap-3">
        {isBackButton && (
          <div className="relative h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14">
            <Image
              src="/assets/images/icons/back-button.svg"
              alt="back-button"
              fill
              className="cursor-pointer object-contain"
              onClick={() => router.back()}
            />
          </div>
        )}
        <p className="text-[20px] font-normal text-[#303132] sm:text-[32px]">
          {title}
        </p>
      </div>

      {/* logout and profile button */}

      <div className="flex items-center gap-2">
        {/* Profile Image */}
        <div
          className="relative h-10 w-10 cursor-pointer rounded-full bg-[#2D77A8] p-1 sm:h-12 sm:w-12 md:h-14 md:w-14"
          onClick={() => router.push("/profile")}
        >
          <Image
            src="/assets/images/profile-image.png"
            alt="profile"
            fill
            className="rounded-full object-contain"
          />
        </div>

        {/* Logout Icon */}
        <div
          className={`relative h-10 w-10 cursor-pointer sm:h-12 sm:w-12 md:h-14 md:w-14 ${
            isLoggingOut ? "pointer-events-none opacity-50" : ""
          }`}
          onClick={handleLogout}
        >
          <Image
            src="/assets/images/icons/logout.svg"
            alt="logout-icon"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
