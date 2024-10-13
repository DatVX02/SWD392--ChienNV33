import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "../banner/SearchBar";
import TicketList from "../ticket/TicketList";
import Banner from "../banner/Banner";
import Header from "../layout/Header";
import LoginModal from "../User/LoginModal";
import RegisterModal from "../User/RegisterModal";

const HomePage = () => {
  const [searchCriteria, setSearchCriteria] = useState({});
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isRegisterVisible, setRegisterVisible] = useState(false);

  const handleSearch = (criteria) => setSearchCriteria(criteria);

  const handleShowLogin = () => {
    setLoginVisible(true);
    setRegisterVisible(false);
  };

  const handleShowRegister = () => {
    setRegisterVisible(true);
    setLoginVisible(false);
  };

  return (
    <Fragment>
      <div className="app-container">
        <div className="header-container">
          <Header
            onLoginClick={handleShowLogin}
            onRegisterClick={handleShowRegister}
          />
        </div>

        <main className="pt-16 banner-container">
          <Banner />
          <div className="pt-16 main-content page-container">
            <SearchBar onSearch={handleSearch} />
          </div>
        </main>

        {["Special", "Music", "Trending", "Upcoming"].map(
          (eventType, index) => (
            <section key={index} className="pb-20 movie-layout page-container">
              <h2 className="mb-10 text-3xl font-bold text-white capitalize">
                {eventType === "Special"
                  ? "Sự kiện đặc biệt"
                  : `Sự Kiện ${eventType === "Music" ? "Âm Nhạc" : eventType}`}
              </h2>
              <TicketList
                type={`${eventType} event`}
                criteria={searchCriteria}
              />
            </section>
          )
        )}

        {isLoginVisible && (
          <LoginModal onClose={() => setLoginVisible(false)} />
        )}
        {isRegisterVisible && (
          <RegisterModal onClose={() => setRegisterVisible(false)} />
        )}

        <div className="footer-container"></div>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default HomePage;
