import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import FacebookGoogleButton from "../FacebookGoogleButton";
import SeparatorForm from "../SeparatorForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Correo electrónico no válido")
    .required("Correo electrónico es requerido"),
  password: yup
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("Contraseña es requerida"),
});

interface LoginDataForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver<LoginDataForm>(schema),
    mode: "onChange",
  });

  const onSubmit = (data: LoginDataForm) => {
    console.log(data);
  };

  return (
    <Card className="bg-white rounded-lg shadow-sm flex flex-col justify-center items-center sm:w-11/12 md:w-1/2 lg:w-auto mt-10">
      <CardHeader>
        <CardTitle className="font-semibold text-2xl">Ingresar</CardTitle>
      </CardHeader>

      <CardContent className="w-full space-y-5">
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-1.5">
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

          <div className="flex flex-col space-y-1.5">
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
              <p className="text-red-500 text-sm">{errors?.password.message}</p>
            )}
          </div>

          <Button className="bg-pink-600 hover:bg-pink-700 text-white w-full">
            Ingresar
          </Button>
        </form>

        <SeparatorForm text="O continuar con" />

        <FacebookGoogleButton />

        <div className="text-center text-sm text-gray-600">
          ¿No tienes una cuenta?{" "}
          <Link
            to="/signup"
            className="text-pink-600 hover:text-pink-700 font-medium"
          >
            Regístrate aquí
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
