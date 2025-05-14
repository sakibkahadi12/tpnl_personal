"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import useDashboardList from "@/hooks/QueryHooks/Dashboard/useDashboardList";

const DashboardComponent = () => {
  const router = useRouter();
  const { data, isPending } = useDashboardList();

  return (
    <div className="mt-[25px] grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
      <Card
        className="cursor-pointer border-none bg-[#007AFF] px-4 py-[30px]"
        onClick={() => router.push(`/campus`)}
      >
        <CardHeader className="flex items-center justify-between px-0 pr-2 sm:pr-4">
          <div className="flex">
            <Button variant="secondary" className="rounded-full p-2">
              <img src="/assets/images/campus.png" />
            </Button>
            <h3 className="text-[24px] leading-[34px] font-[500] text-white">
              Campus
            </h3>
          </div>

          <p className="text-[32px] leading-[44px] font-[600] text-white">
            {/* {data?.data?.total_campus} */} 12
          </p>
        </CardHeader>
      </Card>

      <Card
        className="cursor-pointer border-none bg-[#DE7A62] px-4 py-[30px]"
        onClick={() => router.push(`/courses`)}
      >
        <CardHeader className="flex items-center justify-between px-0 pr-2 sm:pr-4">
          <div className="flex">
            <Button variant="secondary" className="rounded-full p-2">
              <img src="/assets/images/courses.png" />
            </Button>
            <h3 className="text-[24px] leading-[34px] font-[500] text-white">
              Courses
            </h3>
          </div>

          <p className="text-[32px] leading-[44px] font-[600] text-white">
            {/* {data?.data?.total_course} */}
            123
          </p>
        </CardHeader>
      </Card>
      <Card
        className="cursor-pointer border-none bg-[#EBB000] px-4 py-[30px]"
        onClick={() => router.push(`/scholarship`)}
      >
        <CardHeader className="flex items-center justify-between px-0 pr-2 sm:pr-4">
          <div className="flex">
            <Button variant="secondary" className="rounded-full p-2">
              <img src="/assets/images/scholarship.png" />
            </Button>
            <h3 className="text-[24px] leading-[34px] font-[500] text-white">
              Scholarship
            </h3>
          </div>

          <p className="text-[32px] leading-[44px] font-[600] text-white">
            {/* {data?.data?.total_scholarship} */}
            12
          </p>
        </CardHeader>
      </Card>
    </div>
  );
};

export default DashboardComponent;
