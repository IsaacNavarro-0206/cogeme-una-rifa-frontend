import { Calendar, Gift, Ticket, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useRaffles } from "@/hooks/useRaffle";
import { useParams } from "react-router-dom";

const RaffleInfoCard = () => {
  const { raffles } = useRaffles();
  const { id } = useParams();

  const raffle = raffles.find((raffle) => raffle.id === Number(id));

  return (
    <div className="max-w-2xl space-y-6 w-11/12">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Información de la rifa
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-2">
          <div className="flex items-center gap-2 text-gray-600">
            <User className="w-5 h-5" />

            <span className="text-sm">
              <strong>Responsable:</strong> {raffle?.responsible}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-5 h-5" />

            <span className="text-sm">
              <strong>Fecha de juego:</strong> {raffle?.drawDate}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Ticket className="w-5 h-5" />

            <span className="text-sm">
              <strong>Lotería:</strong> {raffle?.lottery}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Gift className="w-5 h-5" />

            <span className="text-sm">
              <strong>Premio:</strong> {raffle?.prize}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RaffleInfoCard;
