import React, { useState } from "react";
import Banner from "./components/banner/Banner";
import Header from "./components/layout/Header";
import HomePage from "./components/page/HomePage";
import LoginModal from "./components/User/LoginModal"; // Import LoginModal
import RegisterModal from "./components/User/RegisterModal"; // Optional: Import RegisterModal
import { Outlet } from "react-router-dom";

const App = () => {
  // State to control the visibility of the Login and Register Modals
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isRegisterVisible, setRegisterVisible] = useState(false);

  // Function to show the Login Modal
  const handleShowLogin = () => setLoginVisible(true);

  // Function to hide the Login Modal
  const handleHideLogin = () => setLoginVisible(false);

  // Function to show the Register Modal
  const handleShowRegister = () => setRegisterVisible(true);

  // Function to hide the Register Modal
  const handleHideRegister = () => setRegisterVisible(false);

  return (
    <>
      <div className="app-container">
        {/* Header Section */}
        <div className="header-container">
          <Header
            onLoginClick={handleShowLogin}
            onRegisterClick={handleShowRegister}
          />
        </div>

        {/* Main Banner and Content */}
        <div className="banner-container">
          <main className="pt-16">
            <Banner />
          </main>
          <div className="main-content">
            <HomePage />
          </div>
        </div>

        {/* Footer Section */}
        <div className="footer-container"></div>

        {/* Login Modal */}
        {isLoginVisible && <LoginModal onClose={handleHideLogin} />}

        {/* Optional: Register Modal */}
        {isRegisterVisible && <RegisterModal onClose={handleHideRegister} />}

        {/* Outlet for nested routes */}
        <div className="app-container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;
