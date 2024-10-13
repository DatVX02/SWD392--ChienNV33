// import React from "react";
import { useNavigate } from "react-router-dom";
import LogoTicket from "@/assets/image/LogoTicket.png"; // Ensure the path is correct

// eslint-disable-next-line react/prop-types
const Header = ({ onLoginClick, onRegisterClick }) => {
  const navigate = useNavigate();

  return (
    <header className="fixed z-10 w-full shadow-md bg-primary">
      <div className="container flex items-center justify-between p-4 mx-auto">
        {/* Logo Section */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")} // Navigate to the HomePage when clicking the logo
        >
          <img
            src={LogoTicket}
            alt="Logo"
            className="w-16 h-16 mr-2 transition duration-200 transform rounded-full shadow-lg hover:scale-105"
          />
          <h1 className="text-3xl font-bold text-slate-600">TicketResell</h1>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          {/* Main Menu */}
          <ul className="flex space-x-4">
            <li
              className="text-white cursor-pointer hover:text-slate-600"
              onClick={() => navigate("/")}
            >
              Trang chủ
            </li>
            <li
              className="text-white cursor-pointer hover:text-slate-600"
              onClick={() => navigate("/products")}
            >
              Sản phẩm
            </li>
            <li
              className="text-white cursor-pointer hover:text-slate-600"
              onClick={() => navigate("/news")}
            >
              Tin tức
            </li>
            <li
              className="text-white cursor-pointer hover:text-slate-600"
              onClick={() => navigate("/contact")}
            >
              Liên hệ
            </li>
          </ul>

          {/* Auth Menu */}
          <ul className="flex pl-4 space-x-4 border-l border-gray-300">
            <li
              className="text-white cursor-pointer hover:text-slate-600"
              onClick={onRegisterClick} // Use onRegisterClick prop for Register button
            >
              Register
            </li>
            <li
              className="text-white cursor-pointer hover:text-slate-600"
              onClick={() => navigate("/user/login")} // Use onLoginClick prop for Login button
            >
              Login
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
