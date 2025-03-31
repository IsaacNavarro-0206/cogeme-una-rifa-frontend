import { useToast } from "@/hooks/use-toast";
import RaffleForm from "../RaffleForm";
import { useNavigate, useParams } from "react-router-dom";
import { formatDate } from "@/helper";
import { useRaffleStore } from "@/store/raffles/slice";

const EditRaffleForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { id } = useParams();

  const { updateRaffle, isLoading, error } = useRaffleStore();

  const onSubmit = async (data: RaffleDataForm) => {
    const obj = {
      premio: data.prize,
      loteria: data.lottery,
      fechaCreacion: formatDate(new Date()),
      fechaRifa: data.drawDate,
      numeroMaximo: data.maxNumber,
    };

    updateRaffle(id, obj);

    if (!error) {
      toast({
        title: "¡Rifa actualizada!",
        description: "La rifa se ha actualizado correctamente",
      });

      navigate("/my-raffles");
    } else {
      toast({
        title: "Error",
        description: "No se pudo actualizar la rifa",
        variant: "destructive",
      });
    }
  };

  return (
    <RaffleForm onSubmit={onSubmit} isEditMode={true} isLoading={isLoading} />
  );
};

export default EditRaffleForm;
