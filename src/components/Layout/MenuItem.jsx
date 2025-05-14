"use client";

import Link from "next/link";
import { useState } from "react";

const MenuItem = ({ name, icon, iconHover, isActive, onClick, href = "#" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className={`flex h-11 cursor-pointer items-center gap-4 rounded-2xl px-3.5 py-2.5 no-underline ${isActive ? "bg-[#EAF1F6]" : isHovered ? "bg-[#EAF1F6]" : "bg-transparent"}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex h-6 w-6 items-center justify-center">
        <img
          src={isActive || isHovered ? iconHover : icon}
          alt={name}
          className="h-6 w-6 object-contain"
        />
      </div>

      <span
        className={`text-base font-normal ${isActive || isHovered ? "text-[#303132]" : "text-[#ECF6FB]"}`}
      >
        {name}
      </span>
    </Link>
  );
};

export default MenuItem;
