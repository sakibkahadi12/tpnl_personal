import APIClient from "@/services/api-client";

const apiClient = new APIClient();

const useScholarshipList = () => {
  const endpoint = "/university/scholarship/list";
  return apiClient.getQuery(endpoint);
};

export default useScholarshipList;
