import React from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout.jsx";

createRoot(document.getElementById("root")).render(
  <RouterProvider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </React.StrictMode>
  </RouterProvider>
);
