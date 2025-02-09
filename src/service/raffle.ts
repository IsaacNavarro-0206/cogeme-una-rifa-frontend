import axios from "axios";

type CreateRaffleType = {
  usuarioId: number;
  premio: string;
  fechaCreacion: string;
  fechaRifa: string;
  numeroMaximo: number;
};

type UpdateRaffleType = Omit<CreateRaffleType, "usuarioId">;

export function CreateRaffle(data: CreateRaffleType) {
  return axios({
    method: "POST",
    url: "/raffle",
    baseURL: import.meta.env.VITE_API_URL_LOCAL,
    validateStatus: null,
    data,
  });
}

export function UpdateRaffle(data: UpdateRaffleType, id: string | undefined) {
  return axios({
    method: "PATCH",
    url: `/raffle/${id}`,
    baseURL: import.meta.env.VITE_API_URL_LOCAL,
    validateStatus: null,
    data,
  });
}

export function DeleteRaffle(id: number) {
  return axios({
    method: "DELETE",
    url: `/raffle/${id}`,
    baseURL: import.meta.env.VITE_API_URL_LOCAL,
    validateStatus: null,
  });
}

export function GetRaffles() {
  return axios({
    method: "GET",
    url: "/raffle",
    baseURL: import.meta.env.VITE_API_URL_LOCAL,
    validateStatus: null,
  });
}

export function GetRaffle(id: number) {
  return axios({
    method: "GET",
    url: `/raffle/${id}`,
    baseURL: import.meta.env.VITE_API_URL_LOCAL,
    validateStatus: null,
  });
}
