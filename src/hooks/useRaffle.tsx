import { RaffleContext } from "@/context/raffles";
import { useContext } from "react";

export const useRaffles = () => {
  const context = useContext(RaffleContext);

  if (!context) {
    throw new Error("useRaffles must be used within a RaffleProvider");
  }

  return context;
};
