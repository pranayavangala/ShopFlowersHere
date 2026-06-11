import API from "./client";

export const getUsers = async () => {
  const response = await API.get("/users");
  return response.data;
};

export const getUserById = async (id) => {
  const response = await API.get(`/users/${id}`);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await API.delete(`/users/${id}`);
  return response.data;
};

export const updateUser = async (id, userData) => {
  const response = await API.put(`/users/${id}`, userData);
  return response.data;
};
