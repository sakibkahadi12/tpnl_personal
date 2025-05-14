import APIClient from "@/services/api-client";

const apiClient = new APIClient();

const useDashboardList = () => {
  const endpoint = "/university/dashboard/list";
  return apiClient.getQuery(endpoint);
};

export default useDashboardList;
