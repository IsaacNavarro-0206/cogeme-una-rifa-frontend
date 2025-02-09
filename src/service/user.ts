import axios from "axios";

interface UpdateUser {
  nombre: string;
  correoElectronico: string;
  telefono: string;
  contraseña?: string;
}

export function UpdateUser(data: UpdateUser, id: string | undefined) {
  return axios({
    method: "PATCH",
    url: `/user/${id}`,
    baseURL: import.meta.env.VITE_API_URL_LOCAL,
    validateStatus: null,
    data,

    headers: {
      Authorization: `bearer ${localStorage.getItem("access_token")}`,
    },
  });
}

export function DeleteUser(id: number) {
  return axios({
    method: "DELETE",
    url: `/user/${id}`,
    baseURL: import.meta.env.VITE_API_URL_LOCAL,
    validateStatus: null,
  });
}

export function GetUser(id: number) {
  return axios({
    method: "GET",
    url: `/user/${id}`,
    baseURL: import.meta.env.VITE_API_URL_LOCAL,
    validateStatus: null,
  });
}
