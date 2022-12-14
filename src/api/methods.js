import axios from "./axios";
import { axiosPrivate } from "./axios";

export const refreshToken = async () => {
  const response = await axios.get("/api/auth/refresh", {
    withCredentials: true,
  });
  return response.data;
};

export const authenticate = async (body) => {
  const response = await axiosPrivate.post("/api/auth", JSON.stringify(body));
  console.log("authenticate: ", response.data);
  return response.data;
};

export const logout = async () => {
  const response = await axiosPrivate.get("/api/auth/logout");
  console.log("logout: ", response.data);
  return response.data;
};

export const addUser = async (body) => {
  const response = await axiosPrivate.post("/api/users", JSON.stringify(body));
  console.log("addUser: ", response.data);
  return response.data;
};

export const getUser = async () => {
  const response = await axiosPrivate.get("/api/users");
  console.log("getUser: ", response.data);
  return response.data;
};

export const getPet = async (petId) => {
  const response = await axiosPrivate.get(`/api/pets/${petId}`);
  console.log("getPet: ", response.data);
  return response.data;
};

export const getPets = async () => {
  const response = await axiosPrivate.get("/api/pets");
  console.log("getPets: ", response.data);
  return response.data;
};

export const addPet = async (body) => {
  const response = await axiosPrivate.post("/api/pets", JSON.stringify(body));
  console.log("addPet: ", response.data);
  return response.data;
};

export const deletePet = async (petId) => {
  const response = await axiosPrivate.delete(`/api/pets/${petId}`);
  console.log("deletePet: ", response.data);
  return response.data;
};

export const getSpecies = async () => {
  const response = await axiosPrivate.get("/api/species");
  console.log("getSpecies: ", response.data);
  return response.data;
};

export const getReminders = async () => {
  const response = await axiosPrivate.get("/api/reminders");
  console.log("getReminders: ", response.data);
  return response.data;
};

export const getReminder = async (reminderId) => {
  const response = await axiosPrivate.get(`/api/reminders/${reminderId}`);
  console.log("getReminder: ", response.data);
  return response.data;
};

export const addReminder = async (body) => {
  const response = await axiosPrivate.post(
    "/api/reminders",
    JSON.stringify(body)
  );
  console.log("addReminder: ", response.data);
  return response.data;
};

export const deleteReminder = async (reminderId) => {
  const response = await axiosPrivate.delete(`/api/reminders/${reminderId}`);
  console.log("deleteReminder: ", response.data);
  return response.data;
};
