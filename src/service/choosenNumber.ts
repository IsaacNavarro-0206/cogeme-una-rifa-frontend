import axios from "axios";
import { axiosInstance } from "./axiosConfig";

interface ChoosenNumberData {
  numero: number;
  raffleId: number;
  nombre: string;
  numeroDeContacto: string;
}

interface StatusData {
  estado: string;
}

export function ChoosenNumbers(data: ChoosenNumberData) {
  return axios({
    method: "POST",
    url: "/choosen-number",
    baseURL: import.meta.env.VITE_API_URL_LOCAL,
    validateStatus: null,
    data,
  });
}

export function UpdateStatusChoosenNumber(data: StatusData, id: number) {
  return axiosInstance({
    method: "PATCH",
    url: `/choosen-number/${id}`,
    data,
  });
}

export function GetChoosenNumbers(is: string | undefined) {
  return axiosInstance({
    method: "GET",
    url: `/choosen-number/raffle/${is}`,
  });
}

export function GetChoosenNumber(id: number) {
  return axiosInstance({
    method: "GET",
    url: `/choosen-number/${id}`,
  });
}
