import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../css/index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
