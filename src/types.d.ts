interface RaffleDataForm {
  lottery: string;
  prize: string;
  maxNumber: number;
  drawDate: string;
}

interface Raffle {
  id: number;
  numeroMaximo: number;
  fechaRifa: string;
  loteria: string;
  premio: string;
}

interface RequestNumber {
  id: number;
  numero: number;
  nombre: string;
  numeroDeContacto: string;
  estado: string;
}

interface ChoosenNumber {
  estado: string;
  numero: number;
}

type CreateRaffleType = {
  usuarioId: number;
  premio: string;
  fechaCreacion: string;
  fechaRifa: string;
  numeroMaximo: number;
};

type UpdateRaffleType = Omit<CreateRaffleType, "usuarioId">;
