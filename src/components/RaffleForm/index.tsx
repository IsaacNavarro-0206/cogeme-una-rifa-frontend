import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Gift, Calendar, Hash } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const schema = yup.object().shape({
  prize: yup.string().required("Premio es requerido"),
  maxNumber: yup
    .number()
    .typeError("Debe ser un número")
    .positive("Debe ser un número positivo")
    .integer("Debe ser un número entero")
    .required("Número máximo es requerido"),
  drawDate: yup
    .date()
    .typeError("Fecha no válida")
    .required("Fecha de juego es requerida"),
});

interface RaffleFormProps {
  initialData?: RaffleDataForm;
  onSubmit: (data: RaffleDataForm) => void;
  isEditMode?: boolean;
}

const RaffleForm: React.FC<RaffleFormProps> = ({
  initialData,
  onSubmit,
  isEditMode = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RaffleDataForm>({
    resolver: yupResolver(schema),
    defaultValues: initialData,
    mode: "onChange",
  });

  const handleFormSubmit = (data: RaffleDataForm) => {
    onSubmit(data);
  };

  return (
    <Card className="bg-white rounded-lg shadow-sm flex flex-col justify-center items-center sm:w-11/12 md:w-1/2 lg:w-2/5 mt-10">
      <CardHeader>
        <CardTitle className="font-semibold text-2xl">
          {isEditMode ? "Editar Rifa" : "Crear Rifa"}
        </CardTitle>
      </CardHeader>

      <CardContent className="w-full space-y-5">
        <form className="space-y-5" onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="prize">Premio</Label>

            <div className="relative">
              <Gift className="absolute left-3 top-3 h-4 w-4 text-gray-400" />

              <Input
                id="prize"
                type="text"
                {...register("prize")}
                className={`${
                  errors?.prize && "border-red-500 focus-visible:ring-0"
                } pl-9`}
              />
            </div>

            {errors.prize && (
              <p className="text-red-500 text-sm">{errors.prize.message}</p>
            )}
          </div>

          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="maxNumber">Número Máximo</Label>

            <div className="relative">
              <Hash className="absolute left-3 top-3 h-4 w-4 text-gray-400" />

              <Input
                id="maxNumber"
                type="number"
                {...register("maxNumber")}
                className={`${
                  errors?.maxNumber && "border-red-500 focus-visible:ring-0"
                } pl-9`}
              />
            </div>

            {errors.maxNumber && (
              <p className="text-red-500 text-sm">{errors.maxNumber.message}</p>
            )}
          </div>

          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="drawDate">Fecha de Juego</Label>

            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />

              <Input
                id="drawDate"
                type="date"
                {...register("drawDate")}
                className={`${
                  errors?.drawDate && "border-red-500 focus-visible:ring-0"
                } pl-9`}
              />
            </div>

            {errors.drawDate && (
              <p className="text-red-500 text-sm">{errors.drawDate.message}</p>
            )}
          </div>

          <Button className="bg-pink-600 hover:bg-pink-700 text-white w-full">
            {isEditMode ? "Guardar Cambios" : "Crear Rifa"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RaffleForm;
