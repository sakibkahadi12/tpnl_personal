import React from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Upload } from "lucide-react";

const ProfileComponent = () => {
  return (
    <div className="mt-6 mb-4 w-full">
      <div className="h-[60px] rounded-tl-[24px] rounded-tr-[24px] bg-[#9EC0D7] p-[10px] pl-[20px] sm:pl-[65px]">
        <p className="text-[25px] font-[400]">Update Profile</p>
      </div>
      <div className="space-y-4 rounded-b-[24px] bg-white p-6 sm:px-[65px]">
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <Label
              htmlFor="name"
              className="block pl-2 text-[16px] font-[500] text-[#303132]"
            >
              Name of the School <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              className="mt-1 rounded-[10px] border-none bg-[#EAF1F6] p-[16px]"
            />
          </div>
          <div>
            <Label
              htmlFor="name"
              className="block pl-2 text-[16px] font-[500] text-[#303132]"
            >
              Currency <span className="text-red-500">*</span>
            </Label>
            {/* <Select id="currency" className="mt-1">
              <option value="USD ($)">USD ($)</option>
            </Select> */}
          </div>
          <div>
            <Label
              htmlFor="name"
              className="block pl-2 text-[16px] font-[500] text-[#303132]"
            >
              Tuition Range <span className="text-red-500">*</span>
            </Label>
            {/* <Select id="tuition" className="mt-1">
              <option value="$12,000-$15,000">$12,000-$15,000</option>
            </Select> */}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <Label
              htmlFor="name"
              className="block pl-2 text-[16px] font-[500] text-[#303132]"
            >
              World Ranking
            </Label>
            <Input
              id="name"
              className="mt-1 rounded-[10px] border-none bg-[#EAF1F6] p-[16px]"
            />
          </div>
          <div>
            <Label
              htmlFor="name"
              className="block pl-2 text-[16px] font-[500] text-[#303132]"
            >
              Country Ranking
            </Label>

            <Input
              id="name"
              className="mt-1 rounded-[10px] border-none bg-[#EAF1F6] p-[16px]"
            />
          </div>
          <div>
            <Label
              htmlFor="name"
              className="block pl-2 text-[16px] font-[500] text-[#303132]"
            >
              Address <span className="text-red-500">*</span>
            </Label>

            <Input
              id="name"
              className="mt-1 rounded-[10px] border-none bg-[#EAF1F6] p-[16px]"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <Label
              htmlFor="name"
              className="block pl-2 text-[16px] font-[500] text-[#303132]"
            >
              Country <span className="text-red-500">*</span>
            </Label>
          </div>
          <div>
            <Label
              htmlFor="name"
              className="block pl-2 text-[16px] font-[500] text-[#303132]"
            >
              State <span className="text-red-500">*</span>
            </Label>
            {/* <Select id="currency" className="mt-1">
              <option value="USD ($)">USD ($)</option>
            </Select> */}
          </div>
          <div>
            <Label
              htmlFor="name"
              className="block pl-2 text-[16px] font-[500] text-[#303132]"
            >
              City <span className="text-red-500">*</span>
            </Label>
            {/* <Select id="tuition" className="mt-1">
              <option value="$12,000-$15,000">$12,000-$15,000</option>
            </Select> */}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <Label
              htmlFor="name"
              className="block pl-2 text-[16px] font-[500] text-[#303132]"
            >
              Zip Code/Postcode <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              className="mt-1 rounded-[10px] border-none bg-[#EAF1F6] p-[16px]"
            />
          </div>
          <div>
            <Label
              htmlFor="name"
              className="block pl-2 text-[16px] font-[500] text-[#303132]"
            >
              Latitude on Map (x)
            </Label>

            <Input
              id="name"
              className="mt-1 rounded-[10px] border-none bg-[#EAF1F6] p-[16px]"
            />
          </div>
          <div>
            <Label
              htmlFor="name"
              className="block pl-2 text-[16px] font-[500] text-[#303132]"
            >
              Longitude on Map (y)
            </Label>

            <Input
              id="name"
              className="mt-1 rounded-[10px] border-none bg-[#EAF1F6] p-[16px]"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <Label
              htmlFor="name"
              className="block pl-2 text-[16px] font-[500] text-[#303132]"
            >
              Accommodation
            </Label>
          </div>
          <div>
            <Label
              htmlFor="name"
              className="block pl-2 text-[16px] font-[500] text-[#303132]"
            >
              Airport Pick-Up
            </Label>
            {/* <Select id="currency" className="mt-1">
              <option value="USD ($)">USD ($)</option>
            </Select> */}
          </div>
          <div>
            <Label
              htmlFor="name"
              className="block pl-2 text-[16px] font-[500] text-[#303132]"
            >
              Website <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              className="mt-1 rounded-[10px] border-none bg-[#EAF1F6] p-[16px]"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <Label
              htmlFor="name"
              className="block pl-2 text-[16px] font-[500] text-[#303132]"
            >
              Main Contact <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              className="mt-1 rounded-[10px] border-none bg-[#EAF1F6] p-[16px]"
            />
          </div>
          <div>
            <Label
              htmlFor="name"
              className="block pl-2 text-[16px] font-[500] text-[#303132]"
            >
              Contact Email <span className="text-red-500">*</span>
            </Label>

            <Input
              id="name"
              className="mt-1 rounded-[10px] border-none bg-[#EAF1F6] p-[16px]"
            />
          </div>
          <div>
            <Label
              htmlFor="name"
              className="block pl-2 text-[16px] font-[500] text-[#303132]"
            >
              Contact Number <span className="text-red-500">*</span>
            </Label>

            <Input
              id="name"
              className="mt-1 rounded-[10px] border-none bg-[#EAF1F6] p-[16px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
          <div>
            <Label
              htmlFor="logo"
              className="block pl-2 text-[16px] font-[500] text-[#303132]"
            >
              Logo <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="logo"
                className="mt-1 h-[100px] rounded-[10px] border-none bg-[#EAF1F6] p-[16px]"
              />
              <div className="absolute inset-0 flex items-center justify-center text-[16px] font-[400] text-[#9B9B9B] sm:hidden">
                <Upload />
                Upload
              </div>
              <div className="absolute inset-0 mx-[120px] hidden items-center justify-center text-center text-[16px] leading-[36px] font-[500] text-[#737578] sm:flex">
                Click to browse or drag and drop your files
              </div>
            </div>
          </div>
          <div>
            <Label
              htmlFor="banner"
              className="block pl-2 text-[16px] font-[500] text-[#303132]"
            >
              Banner <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="banner"
                className="mt-1 h-[100px] rounded-[10px] border-none bg-[#EAF1F6] p-[16px]"
              />
              <div className="absolute inset-0 flex items-center justify-center text-[16px] font-[400] text-[#9B9B9B] sm:hidden">
                <Upload />
                Upload
              </div>
              <div className="absolute inset-0 mx-[120px] hidden items-center justify-center text-center text-[16px] leading-[36px] font-[500] text-[#737578] sm:flex">
                Click to browse or drag and drop your files
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1">
          <div>
            <Label
              htmlFor="name"
              className="block pl-2 text-[16px] font-[500] text-[#303132]"
            >
              Accreditation Details
            </Label>
            <textarea
              id="name"
              className="mt-1 h-[150px] w-full rounded-[10px] border-none bg-[#EAF1F6] p-[16px]"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            variant="primary"
            className="h-[55px] w-[155px] cursor-pointer rounded-[10px] bg-[#2D77A8] text-white"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
