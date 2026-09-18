import { useState } from "react";
import Banner from "./components/banner/Banner";
import Header from "./components/layout/Header";
import HomePage from "./components/page/HomePage";
import LoginModal from "./components/User/LoginModal"; // Import the LoginModal component
import { Outlet } from "react-router-dom";

const App = () => {
  // State to control the visibility of the LoginModal
  const [isLoginVisible, setLoginVisible] = useState(false);

  // Function to show the LoginModal
  const handleShowLogin = () => setLoginVisible(true);

  // Function to hide the LoginModal
  const handleHideLogin = () => setLoginVisible(false);

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

        {/* Login Modal */}
        {isLoginVisible && <LoginModal onClose={handleHideLogin} />}

        {/* Outlet for nested routes */}
        <div className="app-container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;
