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
  numberRequested: number;
  name: string;
  contactNumber: string;
}
