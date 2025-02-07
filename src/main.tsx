import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ToastContainer autoClose={1500}/>
      <App/>
    </BrowserRouter>
  </StrictMode>,
);
