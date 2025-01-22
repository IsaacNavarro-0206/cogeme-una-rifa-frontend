import { jwtDecode } from "jwt-decode";

export const getUserId = () => {
  const token = localStorage.getItem("access_token");

  if (!token) return;

  const decoded = jwtDecode(token);

  console.log(decoded);

  return decoded.sub;
};
