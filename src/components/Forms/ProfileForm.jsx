"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Textarea } from "@/components/ui/textarea";
import { InputFile } from "../ui/input-file";
import { useAuth } from "@/hooks/useAuth";
import LoadingComponent from "@/components/LoadingComponent";
import { useEffect } from "react";
import useCountryList from "@/hooks/Profile/useCountryList";
import useCityList from "@/hooks/Profile/useCityList";
import useStateList from "@/hooks/Profile/useStateList";
import useProfile from "@/hooks/Profile/useProfile";

const formSchema = z.object({
  schoolName: z.string().min(1, { message: "School name is required" }),
  currency: z.string().min(1, { message: "Currency is required" }),
  tuitionRange: z.string().min(1, { message: "Tuition range is required" }),
  worldRanking: z.string().optional(),
  countryRanking: z.string().optional(),
  address: z.string().min(1, { message: "Address is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  state: z.string().min(1, { message: "State is required" }),
  city: z.string().min(1, { message: "City is required" }),
  zipCode: z.string().min(1, { message: "Zip code is required" }),
  latitude: z.string().optional(),
  longitude: z.string().optional(),
  accommodation: z.string().optional(),
  airportPickup: z.string().optional(),
  website: z
    .string()
    .url({ message: "Invalid URL" })
    .min(1, { message: "Website is required" }),
  mainContact: z.string().min(1, { message: "Main contact is required" }),
  contactEmail: z
    .string()
    .email({ message: "Invalid email" })
    .min(1, { message: "Contact email is required" }),
  contactNumber: z.string().min(1, { message: "Contact number is required" }),
  logo: z.any().optional(),
  banner: z.any().optional(),
  accreditationDetails: z.string().optional(),
});

const ProfileForm = () => {
  const {data:profile, isLoading} = useProfile()
 const {data:countryList, isLoading:countryLoading} = useCountryList()
 const {data:cityList, isLoading: cityLoading} = useCityList()
 const {data:stateList, isLoading: stateLoading} = useStateList()


  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      schoolName: profile?.data?.name || "",
      currency: "",
      tuitionRange: "",
      worldRanking: profile?.data?.world_ranking || "",
      countryRanking: profile?.data?.country_ranking || "",
      address: profile?.data?.address || "",
      country: profile?.data?.country_id?.country_name || "",
      state: profile?.data?.state_id?.state_name || "",
      city: profile?.data?.city_id?.city_name || "",
      zipCode: profile?.data?.zip_code || "",
      latitude: profile?.data?.latitude || "",
      longitude: profile?.data?.longitude || "",
      accommodation: "",
      airportPickup: "",
      website: profile?.data?.website || "",
      mainContact: profile?.data?.main_contact || "",
      contactEmail: profile?.data?.email || "",
      contactNumber: profile?.data?.contact_number || "",
      logo: null,
      banner: null,
      accreditationDetails: profile?.data?.accommodation || "",
    },
  });

 
  const handleSubmit = async (data) => {

    try {
      console.log("Profile Data", data);
      // Handle form submission logic here
    } catch (error) {
      console.error("Error submitting profile data", error);
    }
  };

 
  if ( isLoading || countryLoading|| cityLoading|| stateLoading) {
 
    return <LoadingComponent />;
  }

  

  return (
    <div className="mt-6 mb-4 w-full">
      <div className="h-[60px] rounded-tl-[24px] rounded-tr-[24px] bg-[#9EC0D7] p-[10px] pl-[20px] sm:pl-[65px]">
        <p className="text-[25px] font-[400]">Update Profile</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-4 rounded-b-[24px] bg-white p-6 sm:px-[65px]"
        >
          <div className="grid gap-4 sm:grid-cols-3">
            <FormField
              control={form.control}
              name="schoolName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Name of the School <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="rounded-[10px] border-none bg-[#EAF1F6] p-[16px] text-[#525355]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="currency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Currency <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="rounded-[10px] border-none bg-[#EAF1F6] p-[16px] text-[#525355]">
                        <SelectValue placeholder="Select Currency" />
                      </SelectTrigger>
                      <SelectContent className={"bg-[#EAF1F6]"}>
                        <SelectItem value="USD">USD</SelectItem>
                        <SelectItem value="EUR">EUR</SelectItem>
                        <SelectItem value="GBP">GBP</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tuitionRange"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Tuition Range <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="rounded-[10px] border-none bg-[#EAF1F6] p-[16px] text-[#525355]">
                        <SelectValue placeholder="Select Tuition Range" />
                      </SelectTrigger>
                      <SelectContent className={"bg-[#EAF1F6]"}>
                        <SelectItem value="$10,000-$15,000">
                          $10,000-$15,000
                        </SelectItem>
                        <SelectItem value="$15,000-$20,000">
                          $15,000-$20,000
                        </SelectItem>
                        <SelectItem value="$20,000-$25,000">
                          $20,000-$25,000
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Rest of the form fields remain unchanged */}
          <div className="grid gap-4 sm:grid-cols-3">
            <FormField
              control={form.control}
              name="worldRanking"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>World Ranking</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="rounded-[10px] border-none bg-[#EAF1F6] p-[16px] text-[#525355]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="countryRanking"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country Ranking</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="rounded-[10px] border-none bg-[#EAF1F6] p-[16px] text-[#525355]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Address <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="rounded-[10px] border-none bg-[#EAF1F6] p-[16px] text-[#525355]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* dynamic country, state, city */}

          <div className="grid gap-4 sm:grid-cols-3">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Country <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="rounded-[10px] border-none bg-[#EAF1F6] p-[16px] text-[#525355]">
                        <SelectValue placeholder="Select Country" />
                      </SelectTrigger>
                      <SelectContent className={"bg-[#EAF1F6]"}>
                        {countryList?.data?.map((country) => (
                          <SelectItem
                            key={country.id}
                            value={country.country_name}
                          >
                            {country.country_name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    State <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="rounded-[10px] border-none bg-[#EAF1F6] p-[16px] text-[#525355]">
                        <SelectValue placeholder="Select State" />
                      </SelectTrigger>
                      <SelectContent className={"bg-[#EAF1F6]"}>
                        {stateList?.data?.map((state) => (
                          <SelectItem key={state.id} value={state.state_name}>
                            {state.state_name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    City <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="rounded-[10px] border-none bg-[#EAF1F6] p-[16px] text-[#525355]">
                        <SelectValue placeholder="Select City" />
                      </SelectTrigger>
                      <SelectContent className={"bg-[#EAF1F6]"}>
                        {cityList?.data?.map((city) => (
                          <SelectItem key={city.id} value={city.city_name}>
                            {city.city_name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Zip Code/Postcode <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="rounded-[10px] border-none bg-[#EAF1F6] p-[16px] text-[#525355]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="latitude"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Latitude on Map (x)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="rounded-[10px] border-none bg-[#EAF1F6] p-[16px] text-[#525355]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="longitude"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Longitude on Map (y)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="rounded-[10px] border-none bg-[#EAF1F6] p-[16px] text-[#525355]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <FormField
              control={form.control}
              name="accommodation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>On-campus Accommodation</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="rounded-[10px] border-none bg-[#EAF1F6] p-[16px] text-[#525355]">
                        <SelectValue placeholder="Select Accommodation" />
                      </SelectTrigger>
                      <SelectContent className={"bg-[#EAF1F6]"}>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="airportPickup"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Airport Pick-Up</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="rounded-[10px] border-none bg-[#EAF1F6] p-[16px] text-[#525355]">
                        <SelectValue placeholder="Select Option" />
                      </SelectTrigger>
                      <SelectContent className={"bg-[#EAF1F6]"}>
                        <SelectItem value="Available">Available</SelectItem>
                        <SelectItem value="Not Available">
                          Not Available
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Website <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="rounded-[10px] border-none bg-[#EAF1F6] p-[16px] text-[#525355]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <FormField
              control={form.control}
              name="mainContact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Main Contact <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="rounded-[10px] border-none bg-[#EAF1F6] p-[16px] text-[#525355]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Contact Email <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="rounded-[10px] border-none bg-[#EAF1F6] p-[16px] text-[#525355]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Contact Number <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="rounded-[10px] border-none bg-[#EAF1F6] p-[16px] text-[#525355]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <FormField
              control={form.control}
              name="logo"
              render={() => (
                <FormItem className={"mb-5 w-full"}>
                  <FormLabel>
                    Logo <span className="text-red-500">*</span>
                  </FormLabel>
                  <InputFile onChange={(e) => console.log("object")} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="banner"
              render={() => (
                <FormItem className={"mb-5 w-full"}>
                  <FormLabel>Banner</FormLabel>
                  <InputFile onChange={(e) => console.log("object")} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1">
            <FormField
              control={form.control}
              name="accreditationDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Accreditation Details</FormLabel>
                  <Textarea
                    {...field}
                    className="h-[150px] rounded-[10px] border-none bg-[#EAF1F6] p-[16px] text-[#525355]"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              className="h-[55px] w-[155px] cursor-pointer rounded-[10px] bg-[#2D77A8] text-white"
            >
              Save
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProfileForm;
