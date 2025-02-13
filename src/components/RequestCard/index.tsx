import { Hash } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { usePagination } from "@/hooks/usePagination";
import PaginationControls from "../PaginationControls";
import { UpdateStatusChoosenNumber } from "@/service/choosenNumber";
import { useToast } from "@/hooks/use-toast";
import { useState, useCallback, useEffect } from "react";
import RequestItem from "../RequestItem";

const RequestCard = ({ requests }: { requests: RequestNumber[] }) => {
  const [filteredRequests, setFilteredRequests] = useState<RequestNumber[]>([]);
  const { toast } = useToast();

  // Sincronizar el estado de filteredRequests con requests al cambiar requests
  useEffect(() => {
    const filteredRequestsByStatus = requests.filter(
      (request) => request.estado === "pendiente"
    );

    setFilteredRequests(filteredRequestsByStatus);
  }, [requests]);

  const { currentItems, currentPage, totalPages, nextPage, prevPage } =
    usePagination({
      data: filteredRequests,
      itemsPerPage: 5,
    });

  const handleRejectOrAcceptNumber = useCallback(
    async (id: number, status: string) => {
      try {
        await UpdateStatusChoosenNumber({ estado: status }, id);
        setFilteredRequests((prev) =>
          prev.filter((request) => request.id !== id)
        );

        toast({
          title: `Solicitud ${
            status === "aceptado" ? "aceptada" : "rechazada"
          }`,
          description: `El número ha sido ${
            status === "aceptado" ? "aceptado" : "rechazado"
          }.`,
        });
      } catch (error) {
        console.error(error);
        toast({
          title: "Error",
          description: "Hubo un problema al procesar la solicitud.",
          variant: "destructive",
        });
      }
    },
    [toast]
  );

  const EmptyState = () => (
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
  );

  return (
    <Card className="my-5 max-w-2xl w-11/12 pb-2.5">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Solicitudes de números
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 custom-scrollbar overflow-y-auto max-h-screen lg:max-h-[350px]">
        {currentItems.length > 0 ? (
          currentItems.map((request) => (
            <RequestItem
              key={request.id}
              request={request}
              onStatusUpdate={handleRejectOrAcceptNumber}
            />
          ))
        ) : (
          <EmptyState />
        )}
      </CardContent>

      {currentItems.length > 0 && (
        <PaginationControls
          prevPage={prevPage}
          currentPage={currentPage}
          nextPage={nextPage}
          totalPages={totalPages}
        />
      )}
    </Card>
  );
};

export default RequestCard;
