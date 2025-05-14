import APIClient from "@/services/api-client";

const apiClient = new APIClient();

const useCityList = () => {
  const endpoint = "/university/city/list";
  return apiClient.getQuery(endpoint);
};

export default useCityList;
