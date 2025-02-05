import { NavLink } from "react-router-dom";
// import Logo from "../../assets/logo.svg";
import { Button } from "../ui/button";
import { LogOut, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";
import { getUserId } from "@/utils/auth";

function NavButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `text-gray-600 hover:text-pink-600 hover:border-b-2 hover:border-pink-600 transition-all py-5 ${
          isActive ? "border-b-2 border-pink-600 text-pink-600" : ""
        }`
      }
    >
      {children}
    </NavLink>
  );
}

function LogoutButton() {
  const { logout } = useAuth();

  return (
    <Button
      variant="outline"
      className="text-pink-600 border-pink-600 hover:bg-pink-50"
      onClick={logout}
    >
      <LogOut className="w-4 h-4 mr-2" />
      Cerrar Sesión
    </Button>
  );
}

const NavBar = () => {
  return (
    <nav className="bg-white shadow-sm z-50 w-full">
      <div className="flex justify-between items-center h-16">
        <div>{/* <Logo /> */}</div>

        <div className="hidden lg:flex items-center justify-evenly w-1/4">
          <NavButton href="/my-raffles">Mis rifas</NavButton>
          <NavButton href={`/profile/${getUserId()}`}>Perfil</NavButton>

          <LogoutButton />
        </div>

        <div className="lg:hidden flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <NavButton href="/my-raffles">Mis rifas</NavButton>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <NavButton href={`/profile/${getUserId()}`}>Perfil</NavButton>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <LogoutButton />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
