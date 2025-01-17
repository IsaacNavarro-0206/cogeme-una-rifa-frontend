import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import Layout from "./Layout";
import { RaffleProvider } from "./context/raffles";
import { AuthProvider } from "./context/AuthProvider";
import { Toaster } from "./components/ui/toaster";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RaffleProvider>
        <Layout>
          <RouterProvider router={router} />
          <Toaster />
        </Layout>
      </RaffleProvider>
    </AuthProvider>
  </StrictMode>
);
