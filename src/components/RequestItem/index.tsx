import { Check, Hash, Phone, User, X } from "lucide-react";
import { Button } from "../ui/button";

interface RequestItemProps {
  request: RequestNumber;
  onStatusUpdate: (id: number, status: string) => void;
}

const RequestItem = ({ request, onStatusUpdate }: RequestItemProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-1 border rounded-lg shadow-sm border-gray-200 p-4 overflow-hidden">
      <div className="space-y-3">
        <InfoItem
          icon={<Hash className="w-4 h-4 text-purple-600" />}
          label="Número solicitado"
          value={request.numero}
          bgColor="bg-purple-100"
        />

        <InfoItem
          icon={<User className="w-4 h-4 text-blue-600" />}
          label="Nombre"
          value={request.nombre}
          bgColor="bg-blue-100"
        />

        <InfoItem
          icon={<Phone className="w-4 h-4 text-green-600" />}
          label="Número de contacto"
          value={request.numeroDeContacto}
          bgColor="bg-green-100"
        />
      </div>

      <div className="flex items-center sm:border-l sm:pl-6 gap-2">
        <Button
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2"
          onClick={() => onStatusUpdate(request.id, "aceptado")}
        >
          <Check className="w-4 h-4" /> Aceptar
        </Button>

        <Button
          variant="destructive"
          className="px-4 py-2"
          onClick={() => onStatusUpdate(request.id, "rechazado")}
        >
          <X className="w-4 h-4" /> Rechazar
        </Button>
      </div>
    </div>
  );
};

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  bgColor: string;
}

const InfoItem = ({ icon, label, value, bgColor }: InfoItemProps) => (
  <div className="flex items-center gap-2">
    <div
      className={`${bgColor} w-8 h-8 rounded-full flex items-center justify-center`}
    >
      {icon}
    </div>

    <div className="flex flex-col">
      <h3 className="text-sm text-gray-500">{label}</h3>

      <p className="font-semibold">{value}</p>
    </div>
  </div>
);

export default RequestItem;
