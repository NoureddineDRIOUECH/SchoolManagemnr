import { axiosClient } from "../../api/axios";

const ParentApi = {
  createParent: async (values) => {
    return await axiosClient.post("/admin/parent/", values);
  },
  getParent: async (id) => {
    return await axiosClient.get(`/admin/parent/${id}`);
  },
  updateParent: async (id, values) => {
    return await axiosClient.put(`/admin/parent/${id}`, values);
  },
  deleteParent: async (id) => {
    return await axiosClient.delete(`/admin/parent/${id}`);
  },
  getAllParent: async () => {
    return await axiosClient.get("/admin/parent/");
  },
};
export default ParentApi;
