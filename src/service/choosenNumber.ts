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
