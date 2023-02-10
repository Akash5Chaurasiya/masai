import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Authentication from "./Context/Authentication";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Authentication>
      <App />
    </Authentication>
  </BrowserRouter>
);
