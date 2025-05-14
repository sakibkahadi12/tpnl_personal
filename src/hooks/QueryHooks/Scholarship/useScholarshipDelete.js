import APIClient from "@/services/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const useScholarshipDelete = () => {
  const queryClient = useQueryClient();
  const apiClient = new APIClient();

  return useMutation({
    mutationFn: (data) => {
      return apiClient.post("/university/scholarship/delete", data);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["/university/scholarship/list"],
      });
    },
    onError: (err) => {
      console.log(err);
      toast.error(
        err.response?.data?.message ||
          err.response?.data?.error ||
          "Something went wrong",
      );
    },
  });
};

export default useScholarshipDelete;
