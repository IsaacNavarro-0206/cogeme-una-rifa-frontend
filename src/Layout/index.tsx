import NavBar from "@/components/NavBar";
import { Outlet, useLocation } from "react-router-dom";

const publicRoutes = ["/", "/login", "/signup"];

function Layout() {
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
