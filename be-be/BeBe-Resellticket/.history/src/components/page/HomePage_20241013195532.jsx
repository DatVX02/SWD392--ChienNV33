import { useState } from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "../banner/SearchBar";
import TicketList from "../ticket/TicketList";
import Banner from "./components/banner/Banner";
import Header from "./components/layout/Header";
import LoginModal from "./components/User/LoginModal";
import RegisterModal from "./components/User/RegisterModal";

const HomePage = () => {
  // State for search criteria
  const [searchCriteria, setSearchCriteria] = useState({});
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isRegisterVisible, setRegisterVisible] = useState(false);

  // Handler for updating search criteria
  const handleSearch = (criteria) => {
    setSearchCriteria(criteria);
    console.log("Search criteria updated:", criteria); // Debugging
  };

  // Handlers to manage modals
  const handleShowLogin = () => {
    setLoginVisible(true);
    setRegisterVisible(false);
  };

  const handleShowRegister = () => {
    setRegisterVisible(true);
    setLoginVisible(false);
  };

  const handleHideLogin = () => setLoginVisible(false);
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

        {/* Banner and Main Content */}
        <main className="pt-16 banner-container">
          <Banner />
          <div className="main-content page-container">
            <SearchBar onSearch={handleSearch} />
          </div>
        </main>

        {/* Events Sections */}
        <section className="pb-20 movie-layout page-container">
          <h2 className="mb-10 text-3xl font-bold text-white capitalize">
            Sự kiện đặc biệt
          </h2>
          <TicketList type="Special event" criteria={searchCriteria} />
        </section>

        <section className="pb-20 movie-layout page-container">
          <h2 className="mb-10 text-3xl font-bold text-white capitalize">
            Sự Kiện Âm Nhạc
          </h2>
          <TicketList type="Music event" criteria={searchCriteria} />
        </section>

        <section className="pb-20 movie-layout page-container">
          <h2 className="mb-10 text-3xl font-bold text-white capitalize">
            Sự Kiện có tính xu hướng
          </h2>
          <TicketList type="Trending event" criteria={searchCriteria} />
        </section>

        <section className="pb-20 movie-layout page-container">
          <h2 className="mb-10 text-3xl font-bold text-white capitalize">
            Các sự kiện sắp tới
          </h2>
          <TicketList type="Upcoming event" criteria={searchCriteria} />
        </section>

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

        {/* Footer Section */}
        <div className="footer-container"></div>

        {/* Outlet for routing */}
        <Outlet />
      </div>
    </>
  );
};

export default HomePage;
