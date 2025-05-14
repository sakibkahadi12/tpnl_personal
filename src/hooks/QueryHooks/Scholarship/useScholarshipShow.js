import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const useScholarshipShow = (data) => {
  const apiClient = new APIClient();

  return useQuery({
    queryKey: ["/university/scholarship/show", data],
    enabled: !!data,
    queryFn: () =>
      apiClient.getAll(`/university/scholarship/show?uuid=${data}`),
    onError: (err) => {
      console.error(err);
      toast.error(
        err.response?.data?.message ||
          err.response?.data?.error ||
          "Something went wrong",
      );
    },
  });
};

export default useScholarshipShow;
