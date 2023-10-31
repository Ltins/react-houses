import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import HousesProvider from "./store/HousesProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HousesProvider>
      <App />
    </HousesProvider>
  </React.StrictMode>
);
