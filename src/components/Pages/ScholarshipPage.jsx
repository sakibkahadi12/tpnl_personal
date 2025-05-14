"use client";

import ScholarshipUploadFile from "@/components/Dialogs/ScholarshipUploadFile";
import TitleSection from "@/components/TitleSection";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import useScholarshipList from "@/hooks/QueryHooks/Scholarship/useScholarshipList";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const dummyData = [
  {
    uuid: "d8sad5w6q4d8as74d5as456ds7ad7",
    upload_files: [
      {
        id: 1,
        file_url:
          "https://s3-alpha-sig.figma.com/img/0337/cdfc/0dd5585c501ac3fe250fd59647cff6a4?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kGoVu1ZTgyRLN8fadC4aD20cNVdskmQClgWWdummu0m0DaPMBPzGY2EdjmGq~J3m2Ne6RRdOelbP-RWKSTZIg3MLHwd~E6TPRGycphwD2R-MeKo874abuzFm0XCwapcM5jO1IiQOEAQnlezYnASzN8C~x1AEuO826rAp4pPiJJf~TgV~d9Mj9UjDRHWQZBjIA~xPGxMPNF-bTjHW5xkuVQrGKP2VGOD6LsUyW1AigzqHprbHyAIi8oUd0VlW58JypuB2WEurHFBeOs0sf6n-QtJGvDMSHtdvGxtzad52dmTlFpbqp6h80r9MyF4yIvD7S0xNKML~iJH9gU-xExmEIw__",
      },
    ],
    title: "Narotam Sekhsaria Foundation",
    details:
      "Applicable for international students who are applying to master’s or PhD Courses",
    how_to_apply:
      "Applicable for international students who are applying to master’s or PhD Courses",
    course: "Cambridge United Kingdom (UK)",
    percentage: "40",
    type: "Need-based",
    deadline: "12.05.25",
    status: "Active",
  },
  {
    uuid: "d8sad5w6q4d8as74d5as456ds7ad7",
    upload_files: [],
    title: "Narotam Sekhsaria Foundation",
    details:
      "Applicable for international students who are applying to master’s or PhD Courses",
    how_to_apply:
      "Applicable for international students who are applying to master’s or PhD Courses",
    course: "Cambridge United Kingdom (UK)",
    percentage: "40",
    type: "Need-based",
    deadline: "12.05.25",
    status: "Active",
  },
  {
    uuid: "d8sad5w6q4d8as74d5as456ds7ad7",
    upload_files: [],
    title: "Narotam Sekhsaria Foundation",
    details:
      "Applicable for international students who are applying to master’s or PhD Courses",
    how_to_apply:
      "Applicable for international students who are applying to master’s or PhD Courses",
    course: "Cambridge United Kingdom (UK)",
    percentage: "40",
    type: "Need-based",
    deadline: "12.05.25",
    status: "Active",
  },
  {
    uuid: "d8sad5w6q4d8as74d5as456ds7ad7",
    upload_files: [
      {
        id: 1,
        file_url:
          "https://s3-alpha-sig.figma.com/img/0337/cdfc/0dd5585c501ac3fe250fd59647cff6a4?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kGoVu1ZTgyRLN8fadC4aD20cNVdskmQClgWWdummu0m0DaPMBPzGY2EdjmGq~J3m2Ne6RRdOelbP-RWKSTZIg3MLHwd~E6TPRGycphwD2R-MeKo874abuzFm0XCwapcM5jO1IiQOEAQnlezYnASzN8C~x1AEuO826rAp4pPiJJf~TgV~d9Mj9UjDRHWQZBjIA~xPGxMPNF-bTjHW5xkuVQrGKP2VGOD6LsUyW1AigzqHprbHyAIi8oUd0VlW58JypuB2WEurHFBeOs0sf6n-QtJGvDMSHtdvGxtzad52dmTlFpbqp6h80r9MyF4yIvD7S0xNKML~iJH9gU-xExmEIw__",
      },
    ],
    title: "Narotam Sekhsaria Foundation",
    details:
      "Applicable for international students who are applying to master’s or PhD Courses",
    how_to_apply:
      "Applicable for international students who are applying to master’s or PhD Courses",
    course: "Cambridge United Kingdom (UK)",
    percentage: "40",
    type: "Need-based",
    deadline: "12.05.25",
    status: "Active",
  },
  {
    uuid: "d8sad5w6q4d8as74d5as456ds7ad7",
    upload_files: [
      {
        id: 1,
        file_url:
          "https://s3-alpha-sig.figma.com/img/0337/cdfc/0dd5585c501ac3fe250fd59647cff6a4?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kGoVu1ZTgyRLN8fadC4aD20cNVdskmQClgWWdummu0m0DaPMBPzGY2EdjmGq~J3m2Ne6RRdOelbP-RWKSTZIg3MLHwd~E6TPRGycphwD2R-MeKo874abuzFm0XCwapcM5jO1IiQOEAQnlezYnASzN8C~x1AEuO826rAp4pPiJJf~TgV~d9Mj9UjDRHWQZBjIA~xPGxMPNF-bTjHW5xkuVQrGKP2VGOD6LsUyW1AigzqHprbHyAIi8oUd0VlW58JypuB2WEurHFBeOs0sf6n-QtJGvDMSHtdvGxtzad52dmTlFpbqp6h80r9MyF4yIvD7S0xNKML~iJH9gU-xExmEIw__",
      },
    ],
    title: "Narotam Sekhsaria Foundation",
    details:
      "Applicable for international students who are applying to master’s or PhD Courses",
    how_to_apply:
      "Applicable for international students who are applying to master’s or PhD Courses",
    course: "Cambridge United Kingdom (UK)",
    percentage: "40",
    type: "Need-based",
    deadline: "12.05.25",
    status: "Active",
  },
  {
    uuid: "d8sad5w6q4d8as74d5as456ds7ad7",
    upload_files: [],
    title: "Narotam Sekhsaria Foundation",
    details:
      "Applicable for international students who are applying to master’s or PhD Courses",
    how_to_apply:
      "Applicable for international students who are applying to master’s or PhD Courses",
    course: "Cambridge United Kingdom (UK)",
    percentage: "40",
    type: "Need-based",
    deadline: "12.05.25",
    status: "Active",
  },
  {
    uuid: "d8sad5w6q4d8as74d5as456ds7ad7",
    upload_files: [
      {
        id: 1,
        file_url:
          "https://s3-alpha-sig.figma.com/img/0337/cdfc/0dd5585c501ac3fe250fd59647cff6a4?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kGoVu1ZTgyRLN8fadC4aD20cNVdskmQClgWWdummu0m0DaPMBPzGY2EdjmGq~J3m2Ne6RRdOelbP-RWKSTZIg3MLHwd~E6TPRGycphwD2R-MeKo874abuzFm0XCwapcM5jO1IiQOEAQnlezYnASzN8C~x1AEuO826rAp4pPiJJf~TgV~d9Mj9UjDRHWQZBjIA~xPGxMPNF-bTjHW5xkuVQrGKP2VGOD6LsUyW1AigzqHprbHyAIi8oUd0VlW58JypuB2WEurHFBeOs0sf6n-QtJGvDMSHtdvGxtzad52dmTlFpbqp6h80r9MyF4yIvD7S0xNKML~iJH9gU-xExmEIw__",
      },
    ],
    title: "Narotam Sekhsaria Foundation",
    details:
      "Applicable for international students who are applying to master’s or PhD Courses",
    how_to_apply:
      "Applicable for international students who are applying to master’s or PhD Courses",
    course: "Cambridge United Kingdom (UK)",
    percentage: "40",
    type: "Need-based",
    deadline: "12.05.25",
    status: "Active",
  },
  {
    uuid: "d8sad5w6q4d8as74d5as456ds7ad7",
    upload_files: [],
    title: "Narotam Sekhsaria Foundation",
    details:
      "Applicable for international students who are applying to master’s or PhD Courses",
    how_to_apply:
      "Applicable for international students who are applying to master’s or PhD Courses",
    course: "Cambridge United Kingdom (UK)",
    percentage: "40",
    type: "Need-based",
    deadline: "12.05.25",
    status: "Active",
  },
];

const ScholarshipPage = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const { data, isPending } = useScholarshipList();

  const handleDialogChange = (isOpen) => {
    setOpen(isOpen);
  };

  const columns = [
    {
      accessorKey: "file",
      header: "Image",
      size: 108,
      cell: ({ row }) => {
        const files = row.original.upload_files;

        return (
          <div className="h-auto w-[87px]">
            {files.length > 0 ? (
              <img
                src={files[0].file_url}
                alt="Uploaded File"
                style={{ width: "100%", height: "100%", borderRadius: "6px" }}
              />
            ) : (
              <p className="text-center text-[14px] font-[400] text-[#303132]">
                N/A
              </p>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "title",
      header: "Title",
      size: 122,
    },
    {
      accessorKey: "details",
      header: "Details",
      size: 156,
    },
    {
      accessorKey: "how_to_apply",
      header: "How to Apply",
      size: 134,
    },
    {
      accessorKey: "course",
      header: "Course",
      size: 117,
    },
    {
      accessorKey: "percentage",
      header: "Percentage(%)",
      size: 130,
    },
    {
      accessorKey: "type",
      header: "Type",
      size: 76,
    },
    {
      accessorKey: "deadline",
      header: "Deadline",
      size: 93,
    },
    {
      accessorKey: "status",
      header: "Status",
      size: 99,
      cell: ({ row }) => {
        const status = row.original.status;
        const statusColors = {
          Active: "#3FAD4A",
          Pending: "#FF9F0E",
        };

        return (
          <div>
            <span
              style={{
                color: statusColors[status],
              }}
            >
              {status === "Active" ? "Active" : "Unconverted"}
            </span>
          </div>
        );
      },
    },
    {
      header: "Action",
      id: "actions",
      size: 94,
      cell: ({ row }) => {
        return (
          <div className="flex items-center gap-4">
            <Image
              src="/assets/images/icons/edit.svg"
              alt="edit"
              width={24}
              height={24}
              onClick={() =>
                router.push(`/scholarship/update/${row?.original?.uuid}`)
              }
              className="cursor-pointer"
            />
            <Image
              src="/assets/images/icons/delete.svg"
              alt="delete"
              width={24}
              height={24}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <TitleSection title={"Scholarships"} />

      <Dialog open={open} onOpenChange={handleDialogChange}>
        <DataTable
          title="scholarships"
          columns={columns}
          data={dummyData}
          customContent={
            <div className="flex items-center gap-2 lg:gap-6">
              <DialogTrigger asChild>
                {/* upload */}
                <Button
                  variant="outline"
                  className="flex h-11 cursor-pointer items-center space-x-2 rounded-[6px] border-2 border-[#9EC0D7] bg-transparent px-2.5 hover:border-2 hover:border-[#2D77A8]"
                >
                  <span className="hidden text-[16px] font-medium text-[#303132] lg:block">
                    Upload File
                  </span>
                  <Image
                    src="/assets/images/icons/upload-file.svg"
                    alt="upload-file"
                    width={24}
                    height={24}
                  />
                </Button>
              </DialogTrigger>
              {/* add new */}

              <Button
                onClick={() => router.push("/scholarship/create")}
                variant="contained"
                className="flex h-11 cursor-pointer items-center space-x-2 rounded-[6px] bg-[#2D77A8] px-2.5 hover:opacity-80"
              >
                <span className="hidden text-[16px] font-medium text-white lg:block">
                  Add New
                </span>
                <Image
                  src="/assets/images/icons/add-new.svg"
                  alt="add-new"
                  width={24}
                  height={24}
                />
              </Button>
            </div>
          }
        />

        <ScholarshipUploadFile open={open} onOpenChange={handleDialogChange} />
      </Dialog>
    </div>
  );
};

export default ScholarshipPage;
