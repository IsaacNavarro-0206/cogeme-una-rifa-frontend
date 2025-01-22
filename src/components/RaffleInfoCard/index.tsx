import { Calendar, Gift, Ticket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useLocation } from "react-router-dom";

const RaffleInfoCard = () => {
  const { state } = useLocation();
  const { raffle } = state;

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
            <Calendar className="w-5 h-5" />

            <span className="text-sm">
              <strong>Fecha de juego:</strong> {raffle?.fechaRifa}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Ticket className="w-5 h-5" />

            <span className="text-sm">
              <strong>Lotería:</strong> {raffle?.loteria}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Gift className="w-5 h-5" />

            <span className="text-sm">
              <strong>Premio:</strong> {raffle?.premio}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RaffleInfoCard;
