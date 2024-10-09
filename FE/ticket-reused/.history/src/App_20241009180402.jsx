// src/App.jsx
// import React from "react";
import Banner from "./components/banner/Banner";
import Header from "./components/layout/Header";

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
            <TickedCard></TickedCard>
            <div className="overflow-hidden text-white bg-gray-800 rounded-lg shadow-lg">
              <img
                src="https://example.com/event2.jpg"
                alt="Concert"
                className="object-cover w-full h-64"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">
                  Anh Trai Say Hit Concert
                </h3>
                <p>Thủ Dầu Một | 29.09.2024</p>
              </div>
            </div>
            <div className="overflow-hidden text-white bg-gray-800 rounded-lg shadow-lg">
              <img
                src="https://example.com/event3.jpg"
                alt="Special Concert"
                className="object-cover w-full h-64"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Special Concert</h3>
                <p>Hà Nội | 15.10.2024</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;