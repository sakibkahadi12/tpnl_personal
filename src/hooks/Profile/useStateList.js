import APIClient from "@/services/api-client";

const apiClient = new APIClient();

const useStateList = () => {
  const endpoint = "/university/state/list";
  return apiClient.getQuery(endpoint);
};

export default useStateList;
