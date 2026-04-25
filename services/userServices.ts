import api from "../api/api";

export const getUsers = async () => {
  return await api.get("/user");
};