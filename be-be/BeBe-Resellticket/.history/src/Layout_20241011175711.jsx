// import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import HomePage from "./components/page/HomePage"; // Uncomment and ensure the correct path
import Login from "./components/Auther/Login";
import Register from "./components/Auther/Register";
import LoginModal from "./components/User/LoginModal"; // Ensure the correct path
import CardPage from "./components/page/CardPage"; // Uncomment and ensure the correct path

const Layout = () => {
  // NotFound Component for undefined routes
  const NotFound = () => (
    <div className="container px-4 py-3 mx-auto my-4 mt-3 text-red-700 bg-red-100 border border-red-400 rounded">
      404. Not found data with current URL
    </div>
  );

  return (
    <>
      <Routes>
        {/* Main Application Route */}
        <Route path="/" element={<App />}>
          {/* Define nested routes here using `Outlet` in `App` if needed */}
          <Route index element={<HomePage />} /> {/* Default route (index) */}
          <Route path="card" element={<CardPage />} /> {/* Card Page */}
        </Route>

        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Login Modal Route */}
        {/* If LoginModal should be used as a separate page, use this route */}
        <Route path="/user/login" element={<LoginModal />} />

        {/* Catch-all for undefined routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Layout;
