import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/normalize.scss";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(<App />);
