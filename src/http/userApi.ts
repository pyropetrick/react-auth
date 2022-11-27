import { $authHost, $host } from ".";
import { ILoginData, IRegistrationData } from "../types/types";
import jwt_decode from "jwt-decode";

export const registration = async (formData: IRegistrationData) => {
  const { data } = await $host.post("api/user/registration", { ...formData });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
export const login = async (loginData: ILoginData) => {
  const { data } = await $host.post("api/user/login", { ...loginData });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
export const auth = async () => {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
