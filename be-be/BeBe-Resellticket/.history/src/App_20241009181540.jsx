// src/App.jsx
// import React from "react";
import Banner from "./components/banner/Banner";
import Header from "./components/layout/Header";
import TicketList from "./components/ticket/TicketList";
// import TickedCard from "./components/ticket/TickedCard";

function App() {
  return (
    <div className="App">
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
          <h2 className="mb-8 text-3xl font-bold">Sự kiện đặc biệt</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Card sự kiện */}
            <TicketList></TicketList>
          </div>
          <h2 className="mb-8 text-3xl font-bold">Sự kiện đặc biệt</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Card sự kiện */}
            <TicketList></TicketList>
          </div>
          <h2 className="mb-8 text-3xl font-bold">Sự kiện đặc biệt</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Card sự kiện */}
            <TicketList></TicketList>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
