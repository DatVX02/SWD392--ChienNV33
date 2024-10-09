// src/App.jsx
// import React from "react";
import Banner from "./components/banner/Banner";
import Header from "./components/layout/Header";
import TicketList from "./components/ticket/TicketList";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <Header></Header>
      <main className="pt-16">
        {/* Banner */}
        <Banner />

        {/* Phần nội dung khác */}
        <section className="container py-16 mx-auto">
          <h2 className="mb-8 text-3xl font-bold">Sự kiện đặc biệt</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Card sự kiện */}
            <TicketList type="Special Event"></TicketList>
          </div>
          <h2 className="mb-8 text-3xl font-bold">Sự kiện Âm nhạc</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <TicketList type="Music Event"></TicketList>
          </div>
          <h2 className="mb-8 text-3xl font-bold">Sự kiện có tính xu hướng</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <TicketList type="Trending Event"></TicketList>
          </div>
          <h2 className="mb-8 text-3xl font-bold">Sự kiện sắp tới</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <TicketList type="Upcomming Event"></TicketList>
          </div>
        </section>
      </main>
      <Outlet />
    </div>
  );
};

export default App;
