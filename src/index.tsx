import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./Components/App";

import "./Layouts/app.scss";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
