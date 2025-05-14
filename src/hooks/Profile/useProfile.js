import { useQuery } from "@tanstack/react-query";
import APIClient from "@/services/api-client";
import { useAuth } from "../useAuth";
import { toast } from "sonner";

const useProfile = () => {
  const apiClient = new APIClient();
  const { user, loading: authLoading } = useAuth();

  // Extract uuid from user
  const uuid = user?.uuid;


  return useQuery({
    queryKey: ["universityProfile", uuid],
    queryFn: async () => {
      try {
        const response = await apiClient.getAll(
          `/university/university/show?uuid=${uuid}`,
        );
       
        if (!response) {
          throw new Error("No data returned from API");
        }
        return response;
      } catch (error) {
        
        throw error;
      }
    },
    enabled: !!uuid && !authLoading,
    
    onError: (err) => {
      
      toast.error(
        err.response?.data?.message ||
          err.response?.data?.error ||
          "Failed to fetch profile data",
      );
    },
  });
};

export default useProfile;
