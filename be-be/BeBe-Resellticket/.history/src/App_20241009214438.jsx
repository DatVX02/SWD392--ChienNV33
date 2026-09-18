// src/App.jsx
// import React from "react";
import Banner from "./components/banner/Banner";
import Header from "./components/layout/Header";
import TicketList from "./components/ticket/TicketList";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="app-container">
        <div className="header-container">
          <Header></Header>
        </div>
        <div className="banner-container">
          <main className="pt-16">
            {/* Banner */}
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
