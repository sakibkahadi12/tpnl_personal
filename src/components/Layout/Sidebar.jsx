"use client";

import MenuItemsData from "@/constants/MenuItemsData";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  // Handle hydration mismatch
  useEffect(() => {
    setIsClient(true);
    setCurrentPath(pathname || "/");
  }, [pathname]);

  // Check if a menu item should be considered active
  const isMenuItemActive = (itemPath) => {
    // Exact match for root path
    if (itemPath === "/" && currentPath === "/") {
      return true;
    }

    // For other paths, check if current path starts with the menu item path
    // But only if the menu item path is not the root path
    if (itemPath !== "/") {
      return currentPath.startsWith(itemPath);
    }

    return false;
  };

  if (!isClient) {
    return null; // Prevent hydration mismatch
  }

  return (
    <aside className="w-[212px] rounded-[22px] bg-[#2D77A8] px-[14px] pt-[18px]">
      <div
        onClick={() => router.push("/")}
        className="mb-[58px] flex h-[60px] cursor-pointer items-center justify-center rounded-[10px] border border-[#303132] bg-white"
      >
        <img
          src="/assets/images/sidebar-logo.svg"
          alt="tpnl-logo"
          className="h-[37px] w-[40px]"
        />
      </div>

      <nav className="pb-[58px]">
        <ul className="space-y-3">
          {MenuItemsData.map((item, index) => (
            <MenuItem
              key={index}
              {...item}
              isActive={isMenuItemActive(item.path)}
              onClick={() => router.push(item.path)}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
