"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import MenuItemsData from "@/constants/MenuItemsData";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingComponent from "../LoadingComponent";
import Sidebar from "./Sidebar";
import { AuthProvider } from "@/context/AuthContext";

// Auth routes
const authRoutes = ["/auth/login", "/auth/forgot-password"];

// Main routes that can have sub-routes
const mainRoutes = [
  "/profile",
  "/campus",
  "/courses",
  "/scholarship",
  "/scholarship/update",
  "/settings",
];

export default function LayoutProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setIsContentVisible(true);
      }, 100);
    }, 500);

    return () => clearTimeout(loadTimer);
  }, []);

  // Check if the current path is an auth route
  const isAuthRoute = authRoutes.includes(pathname);

  // Function to check if a path is valid
  const isValidPath = (path) => {
    // Root path is valid
    if (path === "/") return true;

    // Check if the path starts with any of the main routes
    return mainRoutes.some((route) => {
      // Exact match is valid
      if (path === route) return true;
      // Sub-route is valid if it starts with the main route and has only one additional segment
      if (path.startsWith(route + "/")) {
        const remainingPath = path.slice(route.length + 1);
        // Check if there are no more forward slashes (only one level deep)
        return !remainingPath.includes("/");
      }
      return false;
    });
  };

  if (isLoading) {
    return <LoadingComponent />;
  }

  const contentOpacity = `transition-opacity duration-300 ease-in-out min-h-screen ${pathname === "/settings" || pathname=== "/profile" || pathname=== "/dashboard" ? "bg-[#bed5e4]":"bg-[#eaf1f6]"} ${
    isContentVisible ? "opacity-100" : "opacity-0"
  } `;

  // Determine what to render based on path validity
  const renderContent = () => {
    if (isAuthRoute) {
      return (
        <div className={contentOpacity}>
          <main >{children}</main>
        </div>
      );
    }

    if (!isValidPath(pathname)) {
      return <div className={contentOpacity}>{children}</div>;
    }

    return (
      <div className={contentOpacity}>
        {/* Mobile */}
        <div className="p-5 md:hidden">
          <Drawer direction="left">
            <DrawerTrigger>
              <Menu className="h-8 w-8 " />
            </DrawerTrigger>
            <DrawerContent className="w-2/3 bg-[#032031] text-white">
              <DrawerHeader>
                <DrawerTitle />
                <DrawerDescription />
              </DrawerHeader>

              {MenuItemsData?.map((item, index) => (
                <DrawerClose asChild key={index}>
                  <li
                    className="mx-5 mt-5 flex cursor-pointer items-center gap-3 rounded-[5px] border p-1 text-white transition-all duration-200 hover:bg-[#0A2A3C]"
                    onClick={() => router.push(item.path)}
                  >
                    <div className="flex h-[30px] w-[34px] items-center justify-center">
                      <img
                        src={item?.icon}
                        alt={item?.name}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="text-[14px] leading-[15px] font-medium text-white">
                      {item?.name}
                    </span>
                  </li>
                </DrawerClose>
              ))}
            </DrawerContent>
          </Drawer>

          <main className="mt-3 flex-grow">{children}</main>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex">
          <div className="flex w-full gap-12 px-6 py-8">
            <Sidebar />
            <main className="w-1 flex-grow">{children}</main>
          </div>
        </div>
      </div>
    );
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{renderContent()}</AuthProvider>
    </QueryClientProvider>
  );
}
