import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "#store";
import MainApp from "./MainApp.tsx";
import "./normalize.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <StrictMode>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <MainApp />
                </PersistGate>
            </Provider>
        </StrictMode>
    </BrowserRouter>
);
