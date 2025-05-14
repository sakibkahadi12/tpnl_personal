"use client";

import CoursesUploadFile from "@/components/Dialogs/CoursesUploadFile";
import Delete from "@/components/Dialogs/Delete";
import ScholarshipUploadFile from "@/components/Dialogs/ScholarshipUploadFile";
import LoadingComponent from "@/components/LoadingComponent";
import TitleSection from "@/components/TitleSection";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import useCourseDelete from "@/hooks/QueryHooks/Courses/useCourseDelete";
import useCourseList from "@/hooks/QueryHooks/Courses/useCourseList";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const dummyData = [
  {
    uuid: "d8sad5w6q4d8as74d5as456ds7ad7",
    courses: "Applied Social Studies",
    degree: "Bachelor",
    duration: "12",
    intake: "Summer",
    tution: "1500",
    details: "This is a very englaging......",
    min_ielts_score: "9",
    min_toefl_score: "70",
    min_pte_score: "6",
    duoling_score: "8",
    gre: "8",
    gmat: "8  ",
    minimum_qualification: "B.Sc.",
  },
  {
    uuid: "d8sad5w6q4d8as74d5as456ds7ad7",
    courses: "Applied Social Studies",
    degree: "Bachelor",
    duration: "12",
    intake: "Summer",
    tution: "1500",
    details: "This is a very englaging......",
    min_ielts_score: "9",
    min_toefl_score: "70",
    min_pte_score: "6",
    duoling_score: "8",
    gre: "8",
    gmat: "8  ",
    minimum_qualification: "B.Sc.",
  },
  {
    uuid: "d8sad5w6q4d8as74d5as456ds7ad7",
    courses: "Applied Social Studies",
    degree: "Bachelor",
    duration: "12",
    intake: "Summer",
    tution: "1500",
    details: "This is a very englaging......",
    min_ielts_score: "9",
    min_toefl_score: "70",
    min_pte_score: "6",
    duoling_score: "8",
    gre: "8",
    gmat: "8  ",
    minimum_qualification: "B.Sc.",
  },
  {
    uuid: "d8sad5w6q4d8as74d5as456ds7ad7",
    courses: "Applied Social Studies",
    degree: "Bachelor",
    duration: "12",
    intake: "Summer",
    tution: "1500",
    details: "This is a very englaging......",
    min_ielts_score: "9",
    min_toefl_score: "70",
    min_pte_score: "6",
    duoling_score: "8",
    gre: "8",
    gmat: "8  ",
    minimum_qualification: "B.Sc.",
  },
  {
    uuid: "d8sad5w6q4d8as74d5as456ds7ad7",
    courses: "Applied Social Studies",
    degree: "Bachelor",
    duration: "12",
    intake: "Summer",
    tution: "1500",
    details: "This is a very englaging......",
    min_ielts_score: "9",
    min_toefl_score: "70",
    min_pte_score: "6",
    duoling_score: "8",
    gre: "8",
    gmat: "8  ",
    minimum_qualification: "B.Sc.",
  },
  {
    uuid: "d8sad5w6q4d8as74d5as456ds7ad7",
    courses: "Applied Social Studies",
    degree: "Bachelor",
    duration: "12",
    intake: "Summer",
    tution: "1500",
    details: "This is a very englaging......",
    min_ielts_score: "9",
    min_toefl_score: "70",
    min_pte_score: "6",
    duoling_score: "8",
    gre: "8",
    gmat: "8  ",
    minimum_qualification: "B.Sc.",
  },
  {
    uuid: "d8sad5w6q4d8as74d5as456ds7ad7",
    courses: "Applied Social Studies",
    degree: "Bachelor",
    duration: "12",
    intake: "Summer",
    tution: "1500",
    details: "This is a very englaging......",
    min_ielts_score: "9",
    min_toefl_score: "70",
    min_pte_score: "6",
    duoling_score: "8",
    gre: "8",
    gmat: "8  ",
    minimum_qualification: "B.Sc.",
  },
  {
    uuid: "d8sad5w6q4d8as74d5as456ds7ad7",
    courses: "Applied Social Studies",
    degree: "Bachelor",
    duration: "12",
    intake: "Summer",
    tution: "1500",
    details: "This is a very englaging......",
    min_ielts_score: "9",
    min_toefl_score: "70",
    min_pte_score: "6",
    duoling_score: "8",
    gre: "8",
    gmat: "8  ",
    minimum_qualification: "B.Sc.",
  },
];

const CoursesComponent = () => {
  const { data, isLoading } = useCourseList();
  const [open, setOpen] = useState(false);
  const [selectedUuid, setSelectedUuid] = useState(null); // State to store the selected UUID
  const { mutate: handleCourseDelete } = useCourseDelete();
  const handleDialogChange = (isOpen, uuid = null) => {
    setOpen(isOpen);
    setSelectedUuid(uuid); // Set the UUID when the dialog is opened
  };

  const handleDelete = (uuid) => {
    // delete logic completed 
    console.log(uuid)
    // handleCourseDelete(
    //   { uuid },
    //   {
    //     onSuccess: () => {
    //       setOpen(false);
    //     },
    //   },
    // );
  };

  const mappedData =
    data?.data?.map((item) => ({
      uuid: item.uuid,

      courses: item?.name,
      degree: item?.degree_id,
      duration: item?.duration,
      intake: item?.duration,
      tution: item?.tuition_fee,
      details: item?.details,
      min_ielts_score: item?.min_ielts_score,
      min_toefl_score: item?.min_toefl_score,
      min_pte_score: item?.min_pte_score,
      duoling_score: item?.duolingo_score,
      gre: item?.gre_score,
      gmat: item?.gmat_score,
      minimum_qualification: item?.min_qualification,
    })) || [];
  const columns = [
    
    {
      accessorKey: "courses",
      header: "Course Name",
      size: 122,
    },
    {
      accessorKey: "degree",
      header: "Degree",
      size: 100,
    },
    {
      accessorKey: "duration",
      header: "Duration(Year)",
      size: 134,
    },
    {
      accessorKey: "intake",
      header: "Intake",
      size: 120,
    },
    {
      accessorKey: "tution",
      header: "Tuition Fee ($)",
      size: 130,
    },
    {
      accessorKey: "details",
      header: "Details",
      size: 120,
    },
    {
      accessorKey: "min_ielts_score",
      header: "Min. IELTS Score",
      size: 100,
    },
    {
      accessorKey: "min_toefl_score",
      header: "Min. TOEFL Score",
      size: 100,
    },
    {
      accessorKey: "min_pte_score",
      header: "Min. PTE Score",
      size: 100,
    },
    {
      accessorKey: "duoling_score",
      header: "Duolingo Score",
      size: 100,
    },
    {
      accessorKey: "gre",
      header: "GRE",
      size: 100,
    },
    {
      accessorKey: "gmat",
      header: "GMAT",
      size: 100,
    },
    {
      accessorKey: "minimum_qualification",
      header: "Minimum Qualification",
      size: 120,
    },
    
    {
      header: "Action",
      id: "actions",
      size: 100,
        cell: ({ row }) => {
              const uuid = row.original.uuid; // Get the UUID of the current row
              return (
                <div className="flex items-center ">
                  <Dialog
                    open={open}
                    onOpenChange={(isOpen) => handleDialogChange(isOpen, uuid)}
                  >
                    <DialogTrigger asChild>
                      <Image
                        src="/assets/images/icons/delete.svg"
                        alt="delete"
                        width={24}
                        height={24}
                        className="cursor-pointer"
                      />
                    </DialogTrigger>
                    
                  </Dialog>
                </div>
              );
            },
    },
  ];
  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div>
      <TitleSection title={"Courses"} />

      <Dialog open={open} onOpenChange={handleDialogChange}>
        <DataTable
          title="Courses"
          columns={columns}
          data={mappedData}
          customContent={
            <div className="flex items-center gap-6">
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

             
            </div>
          }
        />

<Delete
          handleDelete={() => handleDelete(selectedUuid)} // Use selectedUuid if needed
          open={open}
          onOpenChange={handleDialogChange}
        />
    
      </Dialog>
    </div>
  );
};

export default CoursesComponent;
