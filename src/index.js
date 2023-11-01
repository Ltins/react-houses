import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import HousesProvider from "./store/HousesProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HousesProvider>
    <App />
  </HousesProvider>
);
