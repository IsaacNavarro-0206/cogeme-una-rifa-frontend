import RaffleForm from "../RaffleForm";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { formatDate } from "@/helper";
import { getUserId } from "@/utils/auth";
import { useRaffleStore } from "@/store/raffles/slice";

const CreateRaffleForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const { addRaffle, isLoading, error } = useRaffleStore();

  const onSubmit = async (data: RaffleDataForm) => {
    const obj = {
      usuarioId: Number(getUserId()),
      premio: data.prize,
      loteria: data.lottery,
      fechaCreacion: formatDate(new Date()),
      fechaRifa: formatDate(data.drawDate),
      numeroMaximo: data.maxNumber,
    };

    addRaffle(obj);

    if (!error) {
      toast({
        title: "¡Rifa creada!",
        description: "La rifa se ha creado correctamente",
      });

      navigate("/my-raffles");
    } else {
      toast({
        title: "Error",
        description: "No se pudo crear la rifa",
        variant: "destructive",
      });
    }
  };

  return <RaffleForm onSubmit={onSubmit} isLoading={isLoading} />;
};

export default CreateRaffleForm;
