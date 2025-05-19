import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Arquivo de estilos globais
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Tema do PrimeReact
import "primereact/resources/primereact.min.css"; // Estilos do PrimeReact

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
