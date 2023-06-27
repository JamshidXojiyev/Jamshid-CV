import React from "react";
import ReactDOMClient from "react-dom/client";
import { XojiyevJamshid } from "./screens/XojiyevJamshid";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<XojiyevJamshid />);
