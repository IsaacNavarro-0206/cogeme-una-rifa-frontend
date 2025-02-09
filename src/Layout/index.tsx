import NavBar from "@/components/NavBar";
import { Outlet, useLocation, useParams } from "react-router-dom";

function Layout() {
  const { raffleId, userId } = useParams();
  const publicRoutes = [
    "/",
    "/login",
    "/signup",
    `/choose-number/${raffleId}/${userId}`,
  ];

  const { pathname } = useLocation();
  const isPublicRoute = publicRoutes.includes(pathname);

  return (
    <div className="bg-gray-200 min-h-screen h-auto flex flex-col justify-start items-center">
      {!isPublicRoute && <NavBar />}

      <Outlet />
    </div>
  );
}

export default Layout;
