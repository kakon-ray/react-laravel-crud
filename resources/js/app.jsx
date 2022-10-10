import React from "react";
import { createRoot } from "react-dom/client";
import App from "./component/App";
import { BrowserRouter } from "react-router-dom";

if (document.getElementById("root")) {
    createRoot(document.getElementById("root")).render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}
