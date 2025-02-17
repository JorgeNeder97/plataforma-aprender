import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./normalize.css";
import MainApp from "./MainApp.tsx";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <StrictMode>
            <MainApp />
        </StrictMode>
    </BrowserRouter>
);
