import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Mail, Lock, User, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import FacebookGoogleButton from "../FacebookGoogleButton";
import SeparatorForm from "../SeparatorForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Nombre es requerido"),
  email: yup
    .string()
    .email("Correo electrónico no válido")
    .required("Correo electrónico es requerido"),
  confirmEmail: yup
    .string()
    .oneOf([yup.ref("email")], "Los correos electrónicos deben coincidir")
    .required("Confirmar correo electrónico es requerido"),
  password: yup
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("Contraseña es requerida"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "El teléfono debe ser un número")
    .min(10, "El teléfono debe tener al menos 10 dígitos")
    .required("Teléfono es requerido"),
});

interface SignupDataForm {
  name: string;
  email: string;
  confirmEmail: string;
  phone: string;
  password: string;
}

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver<SignupDataForm>(schema),
    mode: "onChange",
  });

  const onSubmit = (data: SignupDataForm) => {
    console.log(data);
  };

  return (
    <Card className="bg-white rounded-lg shadow-sm flex flex-col justify-center items-center mt-2.5 md:mt-10 w-3/4 md:w-auto">
      <CardHeader className="flex flex-col items-center">
        <CardTitle className="font-semibold text-2xl text-center">
          Crea tu cuenta
        </CardTitle>
      </CardHeader>

      <CardContent className="w-full space-y-1.5 md:space-y-5">
        <FacebookGoogleButton />

        <SeparatorForm text="O REGÍSTRATE MANUALMENTE" />

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-6 gap-3">
            {/* Campo nombre */}
            <div className="flex flex-col space-y-1.5 lg:col-span-3 col-span-6">
              <Label htmlFor="name">Nombre</Label>

              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />

                <Input
                  className={`${
                    errors?.name && "border-red-500 focus-visible:ring-0"
                  } pl-9`}
                  id="name"
                  placeholder="Juan Pérez"
                  {...register("name")}
                />
              </div>

              {errors?.name && (
                <p className="text-red-500 text-sm">{errors?.name.message}</p>
              )}
            </div>

            {/* Campo correo */}
            <div className="flex flex-col space-y-1.5 lg:col-span-3 col-span-6">
              <Label htmlFor="email">Correo electrónico</Label>

              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />

                <Input
                  type="email"
                  className={`${
                    errors?.email && "border-red-500 focus-visible:ring-0"
                  } pl-9`}
                  id="email"
                  placeholder="ejemplo@correo.com"
                  {...register("email")}
                />
              </div>

              {errors?.email && (
                <p className="text-red-500 text-sm">{errors?.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid lg:grid-cols-9 sm:grid-cols-6 gap-3">
            {/* Campo confirmar correo */}
            <div className="flex flex-col space-y-1.5 lg:col-span-3 sm:col-span-6">
              <Label htmlFor="confirmEmail">Confirmar Correo electrónico</Label>

              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />

                <Input
                  type="email"
                  className={`${
                    errors?.confirmEmail &&
                    "border-red-500 focus-visible:ring-0"
                  } pl-9`}
                  id="confirmEmail"
                  placeholder="ejemplo@correo.com"
                  {...register("confirmEmail")}
                />
              </div>

              {errors?.confirmEmail && (
                <p className="text-red-500 text-sm">
                  {errors?.confirmEmail.message}
                </p>
              )}
            </div>

            {/* Campo telefono */}
            <div className="flex flex-col space-y-1.5 lg:col-span-3 sm:col-span-6">
              <Label htmlFor="phone">Número de teléfono</Label>

              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />

                <Input
                  type="number"
                  className={`${
                    errors?.phone && "border-red-500 focus-visible:ring-0"
                  } pl-9`}
                  id="phone"
                  placeholder="300 675 3463"
                  {...register("phone")}
                />
              </div>

              {errors?.phone && (
                <p className="text-red-500 text-sm">{errors?.phone.message}</p>
              )}
            </div>

            {/* Campo contraseña */}
            <div className="flex flex-col space-y-1.5 lg:col-span-3 sm:col-span-6">
              <Label htmlFor="password">Contraseña</Label>

              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />

                <Input
                  className={`${
                    errors?.password && "border-red-500 focus-visible:ring-0"
                  } pl-9`}
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  {...register("password")}
                />
              </div>

              {errors?.password && (
                <p className="text-red-500 text-sm">
                  {errors?.password.message}
                </p>
              )}
            </div>
          </div>

          <Button className="bg-pink-600 hover:bg-pink-700 text-white w-full">
            Registrarse
          </Button>
        </form>

        <div className="text-center text-sm text-gray-600">
          ¿Ya tienes una cuenta?{" "}
          <Link
            to="/login"
            className="text-pink-600 hover:text-pink-700 font-medium"
          >
            Inicia sesión aquí
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignupForm;