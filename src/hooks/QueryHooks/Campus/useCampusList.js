import APIClient from "@/services/api-client";

const apiClient = new APIClient();

const useCampusList = () => {
  const endpoint = "/university/campus/list";
  return apiClient.getQuery(endpoint);
};

export default useCampusList;