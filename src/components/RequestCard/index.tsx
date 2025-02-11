import { Check, Hash, Phone, User, X } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { usePagination } from "@/hooks/usePagination";
import PaginationControls from "../PaginationControls";

const RequestCard = ({ requests }: { requests: RequestNumber[] }) => {
  const { currentItems, currentPage, totalPages, nextPage, prevPage } =
    usePagination({
      data: requests,
      itemsPerPage: 5,
    });

  return (
    <Card className="my-5 max-w-2xl w-11/12 pb-2.5">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Solicitudes de números
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 custom-scrollbar overflow-y-auto max-h-screen lg:max-h-[350px]">
        {currentItems.map((request) => (
          <div
            className="flex flex-col md:flex-row justify-between gap-5 md:gap-1 border rounded-lg shadow-sm border-gray-200 p-4 overflow-hidden"
            key={request.id}
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center">
                  <Hash className="w-4 h-4 text-purple-600" />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-sm text-gray-500">Número solicitado</h3>

                  <p className="font-semibold">{request.numero}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-blue-600" />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-sm text-gray-500">Nombre</h3>

                  <p className="font-semibold">{request.nombre}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-green-600" />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-sm text-gray-500">Número de contacto</h3>

                  <p className="font-semibold">{request.numeroDeContacto}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center sm:border-l sm:pl-6 gap-2">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2">
                <Check className="w-4 h-4" /> Aceptar
              </Button>

              <Button variant="destructive" className="px-4 py-2">
                <X className="w-4 h-4" /> Rechazar
              </Button>
            </div>
          </div>
        ))}

        {requests.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <Hash className="w-6 h-6 text-gray-400" />
            </div>

            <h3 className="text-lg font-medium text-gray-900">
              No hay solicitudes pendientes
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Las nuevas solicitudes aparecerán aquí
            </p>
          </div>
        )}
      </CardContent>

      {/* Controles de paginación */}
      <PaginationControls
        prevPage={prevPage}
        currentPage={currentPage}
        nextPage={nextPage}
        totalPages={totalPages}
      />
    </Card>
  );
};

export default RequestCard;
