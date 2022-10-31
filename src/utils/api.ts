import axios, { AxiosRequestConfig } from "axios";
import { CreateUserParams, UserCredentialsParams } from "./types";

const API_URL = process.env.REACT_APP_API_URL;

const axiosClient = axios.create({ baseURL: API_URL });
const config: AxiosRequestConfig = { withCredentials: true };

export const postRegisterUser = (data: CreateUserParams) =>
  axiosClient.post("/auth/register", data, config);

export const postLoginUser = (data: UserCredentialsParams) =>
  axiosClient.post("/auth/login", data, config);

export const getUserDetails = () => axiosClient.get("/user/details", config);
