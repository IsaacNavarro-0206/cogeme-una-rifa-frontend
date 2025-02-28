import { navigate } from "@/utils/navigator";
import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  setAuth: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: !!localStorage.getItem("access_token"),
  token: localStorage.getItem("access_token"),

  setAuth: (token: string) => {
    localStorage.setItem("access_token", token);
    set({ isAuthenticated: true, token });
    navigate("/my-raffles");
  },

  logout: () => {
    localStorage.removeItem("access_token");
    set({ isAuthenticated: false, token: null });
    navigate("/login");
  },
}));
