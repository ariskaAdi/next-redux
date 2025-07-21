import { LoginResponse, Users } from "@/types/auth";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getAllusers = async (): Promise<Users[]> => {
  const response = await axios.get<Users[]>(`${BASE_URL}/users`);
  console.log(response.data);
  return response.data;
};

export const getUserById = async (id: number): Promise<Users> => {
  const response = await axios.get<Users>(`${BASE_URL}/users/${id}`);
  console.log(response.data);
  return response.data;
};

export const loginUser = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(`${BASE_URL}/auth/login`, {
    username,
    password,
  });
  console.log(response.data);
  return response.data;
};
