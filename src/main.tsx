import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import Layout from "./Layout";
import { RaffleProvider } from "./context/raffles";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RaffleProvider>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </RaffleProvider>
  </StrictMode>
);
