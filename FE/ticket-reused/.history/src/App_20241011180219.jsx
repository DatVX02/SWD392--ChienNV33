// src/App.jsx
// import React from "react";
import { useState } from "react";
import Banner from "./components/banner/Banner";
import Header from "./components/layout/Header";
import HomePage from "./components/page/HomePage";
import { Outlet } from "react-router-dom";

const App = () => {
  const handleShowLogin = () => {
    setLoginVisible(true);
  };
  const [setLoginVisible] = useState(false);

  return (
    <>
      <div className="app-container">
        <div className="header-container">
          <Header onLoginClick={handleShowLogin} />
        </div>
        <div className="banner-container">
          <main className="pt-16">
            <Banner />
          </main>
          <div className="main-content">
            <HomePage />
          </div>
        </div>
        <div className="footer-container"></div>
        <div className="app-container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;
