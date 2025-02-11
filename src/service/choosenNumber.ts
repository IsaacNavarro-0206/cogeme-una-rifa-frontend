import axios from "axios";

interface ChoosenNumberData {
  numero: number;
  raffleId: number;
  nombre: string;
  numeroDeContacto: string;
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

export function UpdateStatusChoosenNumber(data: ChoosenNumberData, id: number) {
  return axios({
    method: "PATCH",
    url: `/choosen-number/${id}`,
    baseURL: import.meta.env.VITE_API_URL_LOCAL,
    validateStatus: null,
    data,
  });
}

export function GetChoosenNumbers() {
  return axios({
    method: "GET",
    url: "/choosen-number",
    baseURL: import.meta.env.VITE_API_URL_LOCAL,
    validateStatus: null,
  });
}

export function GetChoosenNumber(id: number) {
  return axios({
    method: "GET",
    url: `/choosen-number/${id}`,
    baseURL: import.meta.env.VITE_API_URL_LOCAL,
    validateStatus: null,
  });
}
