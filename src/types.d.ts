interface RaffleDataForm {
  prize: string;
  maxNumber: number;
  drawDate: Date;
}

interface Raffle {
  id: number;
  responsible: string;
  drawDate: string;
  lottery: string;
  prize: string;
}

interface RequestNumber {
  id: number;
  numberRequested: number;
  name: string;
  contactNumber: string;
}
