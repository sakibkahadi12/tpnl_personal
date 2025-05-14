import APIClient from "@/services/api-client";

const apiClient = new APIClient();

const useCountryList = () => {
  const endpoint = "/university/country/list";
  return apiClient.getQuery(endpoint);
};

export default useCountryList;
