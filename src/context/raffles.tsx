import {
  useState,
  ReactNode,
  createContext,
  useEffect,
} from "react";

interface RaffleContextProps {
  raffles: Raffle[];
  setRaffles: React.Dispatch<React.SetStateAction<Raffle[]>>;
}

export const RaffleContext = createContext<RaffleContextProps | undefined>(undefined);

export const RaffleProvider = ({ children }: { children: ReactNode }) => {
  const [raffles, setRaffles] = useState<Raffle[]>([]);

  useEffect(() => {
    const raffles: Raffle[] = [];

    for (let i = 1; i <= 10; i++) {
      raffles.push({
        id: i,
        responsible: `Responsable ${i}`,
        drawDate: `25/12/2024`,
        lottery: "Caribeña",
        prize: "Un pollo asado",
      });
    }

    setRaffles(raffles);
  }, []);

  return (
    <RaffleContext.Provider value={{ raffles, setRaffles }}>
      {children}
    </RaffleContext.Provider>
  );
};
