import { axiosClient } from "../../../api/axios";

const StudentApi = {
  getCsrfToken: async () => {
    return await axiosClient.get("/sanctum/csrf-cookie", {
      baseURL: import.meta.env.VITE_BACKEND_URL,
    });
  },
  login: async (values) => {
    return await axiosClient.post("/login", values);
  },
  getUser: async () => {
    return await axiosClient.get("/admin");
  },
  logout: async () => {
    return await axiosClient.post("/logout");
  },
};
export default StudentApi;
