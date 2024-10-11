import { useState } from "react";
import Banner from "./components/banner/Banner";
import Header from "./components/layout/Header";
import HomePage from "./components/page/HomePage";
import LoginModal from "./components/User/LoginModal"; // Import the LoginModal component
import { Outlet } from "react-router-dom";
import { FlatESLint } from "eslint/use-at-your-own-risk";
import RegisterModal from "./components/User/RegisterModal";

const App = () => {
  // State to control the visibility of the LoginModal
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isRegisterVisible, setRegisterVisible] = useState(false);

  const handleShowLogin = () => setLoginVisible(true);
  const handleHideLogin = () => setLoginVisible(false);

  const handleShowRegister = () => setRegisterVisible(true);
  const handleHideRegister = () => setRegisterVisible(false);

  return (
    <>
      <div className="app-container">
        {/* Header Section */}
        <div className="header-container">
          <Header onLoginClick={handleShowLogin} />
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

        {isLoginVisible && <LoginModal onClose={handleHideLogin} />}
        {isRegisterVisible && <RegisterModal onClose={han} />}

        <div className="app-container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;
