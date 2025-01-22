import { useToast } from "@/hooks/use-toast";
import RaffleForm from "../RaffleForm";
import { UpdateRaffle } from "@/service/raffle";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { formatDate } from "@/helper";

const EditRaffleForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { id } = useParams();

  const onSubmit = async (data: RaffleDataForm) => {
    console.log(data);

    try {
      setIsLoading(true);

      const obj = {
        premio: data.prize,
        loteria: data.lottery,
        fechaCreacion: formatDate(new Date()),
        fechaRifa: formatDate(data.drawDate),
        numeroMaximo: data.maxNumber,
      };

      console.log("Request object:", obj);
      console.log("Creation date type:", typeof obj.fechaCreacion);
      console.log("Draw date type:", typeof obj.fechaRifa);

      const res = await UpdateRaffle(obj, id);

      toast({
        title: "¡Rifa actualizada!",
        description: "La rifa se ha actualizado correctamente",
      });

      console.log(res);
    } catch (error) {
      console.log(error);

      toast({
        title: "Error",
        description: "No se pudo actualizar la rifa",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      navigate("/my-raffles");
    }
  };

  return (
    <RaffleForm onSubmit={onSubmit} isEditMode={true} isLoading={isLoading} />
  );
};

export default EditRaffleForm;
