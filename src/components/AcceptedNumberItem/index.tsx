import { CheckCircle2, Phone, User } from "lucide-react";
import InfoItem from "../InfoItem";

const AcceptedNumberItem = ({
  acceptedNumber,
}: {
  acceptedNumber: RequestNumber;
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-1 border rounded-lg shadow-sm border-gray-200 p-4 overflow-hidden">
      <div className="space-y-3">
        <InfoItem
          icon={<CheckCircle2 className="w-4 h-4 text-green-600" />}
          label="Número aceptado"
          value={acceptedNumber.numero}
          bgColor="bg-green-100"
        />

        <InfoItem
          icon={<User className="w-4 h-4 text-blue-600" />}
          label="Nombre"
          value={acceptedNumber.nombre}
          bgColor="bg-blue-100"
        />

        <InfoItem
          icon={<Phone className="w-4 h-4 text-pink-600" />}
          label="Número de contacto"
          value={acceptedNumber.numeroDeContacto}
          bgColor="bg-pink-100"
        />
      </div>

      <div className="flex flex-col justify-center items-center sm:border-l sm:pl-6 gap-2">
        <h6 className="text-sm text-gray-500">Fecha de aceptación</h6>
        <span className="font-semibold text-gray-900">Hola</span>
      </div>
    </div>
  );
};

export default AcceptedNumberItem;
