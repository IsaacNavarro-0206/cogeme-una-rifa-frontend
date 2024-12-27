import { createBrowserRouter } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import LoginPage from "@/pages/Login";
import SignupPage from "@/pages/Signup";
import CreateRafflePage from "@/pages/CreateRaffle";
import EditRafflePage from "@/pages/EditRaffle";
import MyRaffles from "@/pages/MyRaffles";
import MyRaffle from "@/pages/MyRaffle";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/create-raffle",
    element: <CreateRafflePage />,
  },
  {
    path: "/edit-raffle/:id",
    element: <EditRafflePage />,
  },
  {
    path: "/my-raffles/",
    element: <MyRaffles />,
  },
  {
    path: "/my-raffle/:id",
    element: <MyRaffle />,
  },
]);
