import axios from "axios";
import { axiosInstance } from "./axiosConfig";

type CreateRaffleType = {
  usuarioId: number;
  premio: string;
  fechaCreacion: string;
  fechaRifa: string;
  numeroMaximo: number;
};

type UpdateRaffleType = Omit<CreateRaffleType, "usuarioId">;

export function CreateRaffle(data: CreateRaffleType) {
  return axiosInstance({
    method: "POST",
    url: "/raffle",
    data,
  });
}

export function UpdateRaffle(data: UpdateRaffleType, id: string | undefined) {
  return axiosInstance({
    method: "PATCH",
    url: `/raffle/${id}`,
    data,
  });
}

export function DeleteRaffle(id: number) {
  return axiosInstance({
    method: "DELETE",
    url: `/raffle/${id}`,
  });
}

export function GetRaffles() {
  return axiosInstance({
    method: "GET",
    url: "/raffle",
  });
}

export function GetRaffle(id: number) {
  return axios({
    method: "GET",
    url: `/raffle/${id}`,
    baseURL: import.meta.env.VITE_API_URL_LOCAL,
  });
}
