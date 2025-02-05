import { useState } from "react";
import RaffleForm from "../RaffleForm";
import { CreateRaffle } from "@/service/raffle";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { formatDate } from "@/helper";
import { getUserId } from "@/utils/auth";

const CreateRaffleForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const onSubmit = async (data: RaffleDataForm) => {
    console.log(data);

    try {
      setIsLoading(true);

      const obj = {
        usuarioId: Number(getUserId()),
        premio: data.prize,
        loteria: data.lottery,
        fechaCreacion: formatDate(new Date()),
        fechaRifa: formatDate(data.drawDate),
        numeroMaximo: data.maxNumber,
      };

      console.log("Request object:", obj);
      console.log("Creation date type:", typeof obj.fechaCreacion);
      console.log("Draw date type:", typeof obj.fechaRifa);

      const res = await CreateRaffle(obj);

      toast({
        title: "¡Rifa creada!",
        description: "La rifa se ha creado correctamente",
      });

      console.log(res);
    } catch (error) {
      console.log(error);

      toast({
        title: "Error",
        description: "No se pudo crear la rifa",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      navigate("/my-raffles");
    }
  };

  return <RaffleForm onSubmit={onSubmit} isLoading={isLoading} />;
};

export default CreateRaffleForm;
