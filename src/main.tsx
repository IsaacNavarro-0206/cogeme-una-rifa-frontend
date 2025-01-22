import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import Layout from "./Layout";
import { AuthProvider } from "./context/AuthProvider";
import { Toaster } from "./components/ui/toaster";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <Layout>
        <RouterProvider router={router} />

        <Toaster />
      </Layout>
    </AuthProvider>
  </StrictMode>
);
