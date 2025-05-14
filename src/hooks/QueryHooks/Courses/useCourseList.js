import APIClient from "@/services/api-client";

const apiClient = new APIClient();

const useCourseList = () => {
  const endpoint = "/university/course/list";
  return apiClient.getQuery(endpoint);
};

export default useCourseList;
 