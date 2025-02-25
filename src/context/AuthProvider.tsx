import { createContext, useState, ReactNode, useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

interface AuthContextProps {
  isAuthenticated: boolean;
  logout: () => void;
  redirectLogin: (token: string) => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const token = localStorage.getItem("access_token");

    return !!token;
  });

  const navigate = useNavigate();

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("access_token", "");
    navigate("/login");
  };

  const redirectLogin = (token: string) => {
    if (!token) return;

    localStorage.setItem("access_token", token);
    setIsAuthenticated(true);
    navigate("/my-raffles");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout, redirectLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const context = useContext(AuthContext);
  const location = useLocation();
  const isAuthPath =
    location.pathname === "/login" || location.pathname === "/signup";

  // Si no está autenticado y no está en una ruta de auth, redirige a login
  if (!context?.isAuthenticated && !isAuthPath) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Si está autenticado y está intentando acceder a rutas de auth, redirige a my-raffles
  if (context?.isAuthenticated && isAuthPath) {
    return <Navigate to="/my-raffles" replace />;
  }

  return children;
};
