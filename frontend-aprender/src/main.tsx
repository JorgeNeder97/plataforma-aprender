import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "#store";
import MainApp from "./MainApp.tsx";
import "./normalize.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <StrictMode>
            <Provider store={store}>
                <MainApp />
            </Provider>
        </StrictMode>
    </BrowserRouter>
);
