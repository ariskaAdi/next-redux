"use server";

import { Idata } from "@/types/data";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getAllProducts = async (): Promise<Idata[]> => {
  const response = await axios.get<Idata[]>(`${BASE_URL}/products`);
  return response.data;
};

export const getProductById = async (id: string): Promise<Idata> => {
  const response = await axios.get<Idata>(`${BASE_URL}/products/${id}`);
  return response.data;
};
