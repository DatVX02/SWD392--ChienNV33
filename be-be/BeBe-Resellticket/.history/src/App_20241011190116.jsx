import { useState } from "react";
import Banner from "./components/banner/Banner";
import Header from "./components/layout/Header";
import HomePage from "./components/page/HomePage";
import LoginModal from "./components/User/LoginModal"; // Import the LoginModal component
import { Outlet } from "react-router-dom";
import RegisterModal from "./components/User/RegisterModal";

const App = () => {
  // State to control the visibility of the LoginModal
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isRegisterVisible, setRegisterVisible] = useState(false);

  // Show/Hide handlers for Login and Register modals
  const handleShowLogin = () => {
    setLoginVisible(true);
    setRegisterVisible(false); // Hide Register modal when Login is shown
  };
  const handleHideLogin = () => setLoginVisible(false);

  const handleShowRegister = () => {
    setRegisterVisible(true);
    setLoginVisible(false); // Hide Login modal when Register is shown
  };
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

        {/* Modals */}
        {isLoginVisible && (
          <LoginModal
            onClose={() => {
              console.log("Closing Login Modal");
              handleHideLogin();
            }}
          />
        )}
        {isRegisterVisible && (
          <RegisterModal
            onClose={() => {
              console.log("Closing Register Modal");
              handleHideRegister();
            }}
          />
        )}

        <div className="app-container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;
