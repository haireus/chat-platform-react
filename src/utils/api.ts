import axios, { AxiosRequestConfig } from "axios";
import { CreateUserParams } from "./types";

const API_URL = process.env.REACT_APP_API_URL;

const axiosClient = axios.create({ baseURL: API_URL });
const config: AxiosRequestConfig = { withCredentials: true };

export const postRegisterUser = (data: CreateUserParams) =>
  axiosClient.post("/auth/register", data, config);
