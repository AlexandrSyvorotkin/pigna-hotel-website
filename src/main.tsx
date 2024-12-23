import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { LocalizationProvider } from "./context/useLocalization.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <BrowserRouter>
    <LocalizationProvider>
      <App />
    </LocalizationProvider>
  </BrowserRouter>
  // </StrictMode>,
);
