"use client";

import CampusUploadFile from "@/components/Dialogs/CampusUploadFile";
import CoursesUploadFile from "@/components/Dialogs/CoursesUploadFile";
import Delete from "@/components/Dialogs/Delete";
import ScholarshipUploadFile from "@/components/Dialogs/ScholarshipUploadFile";
import LoadingComponent from "@/components/LoadingComponent";
import TitleSection from "@/components/TitleSection";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import useCampusDelete from "@/hooks/QueryHooks/Campus/useCampusDelete";
import useCampusList from "@/hooks/QueryHooks/Campus/useCampusList";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CampusComponent = () => {
  const router = useRouter();
  const { data, isLoading } = useCampusList();
  const [open, setOpen] = useState(false);
  const [selectedUuid, setSelectedUuid] = useState(null); // State to store the selected UUID
const {mutate:handleCampusDelete, } = useCampusDelete()
  const handleDialogChange = (isOpen, uuid = null) => {
    setOpen(isOpen);
    setSelectedUuid(uuid); // Set the UUID when the dialog is opened
  };
  
  const handleDelete = (uuid) => {
   
   handleCampusDelete({uuid}, {onSuccess:()=>{setOpen(false)}})
   
  };

  const mappedData =
    data?.data?.map((item) => ({
      uuid: item.uuid,
      campus_name: item.name,
      country: item.country_id.country_name,
      state: item.state_id.state_name,
      city: item.city_id.city_name,
      address: item.address,
      zip_code: item.zip_code,
      latitude: item.latitude,
      longitude: item.longitude,
      upload_files: item.upload_files,
    })) || [];

  const columns = [
    {
      accessorKey: "campus_name",
      header: "Campus Name",
      size: 150,
    },
    {
      accessorKey: "country",
      header: "Country",
      size: 100,
    },
    {
      accessorKey: "state",
      header: "State",
      size: 100,
    },
    {
      accessorKey: "city",
      header: "City",
      size: 100,
    },
    {
      accessorKey: "address",
      header: "Address",
      size: 200,
    },
    {
      accessorKey: "zip_code",
      header: "Zip-code / Postcode",
      size: 120,
    },
    {
      accessorKey: "latitude",
      header: "Latitude",
      size: 100,
    },
    {
      accessorKey: "longitude",
      header: "Longitude",
      size: 100,
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
      <TitleSection title={"Campus"} />

      <Dialog open={open} onOpenChange={(isOpen) => handleDialogChange(isOpen)}>
        <DataTable
          title="Campus"
          columns={columns}
          data={mappedData}
          customContent={
            <div className="flex items-center gap-6">
              <DialogTrigger asChild>
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

export default CampusComponent;
