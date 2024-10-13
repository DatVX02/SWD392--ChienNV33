import { Fragment, useState } from "react";
import SearchBar from "../banner/SearchBar"; // Import the SearchBar component
import TicketList from "../ticket/TicketList";
import Banner from "./components/banner/Banner";
import Header from "./components/layout/Header";
import HomePage from "./components/page/HomePage";
import LoginModal from "./components/User/LoginModal"; // Import the LoginModal component
import { Outlet } from "react-router-dom";
import RegisterModal from "./components/User/RegisterModal";

const HomePage = () => {
  // State to store the search criteria based on SearchBar input
  const [searchCriteria, setSearchCriteria] = useState({});

  // Handle the search criteria when the SearchBar button is clicked
  const handleSearch = (criteria) => {
    setSearchCriteria(criteria); // Update the state with the criteria
    console.log("Search criteria updated:", criteria); // For debugging, remove later if not needed
  };
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
    <Fragment>
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
        {/* Search Bar */}
        <div className="pt-10 page-container">
          <div className="max-w-4xl mx-auto">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>

        {/* Special Events Section */}
        <section className="pb-20 moive-layout page-container">
          <h2 className="mb-10 text-3xl font-bold text-white capitalize">
            Sự kiện đặc biệt
          </h2>
          <TicketList type="Special event" criteria={searchCriteria} />
        </section>

        {/* Music Events Section */}
        <section className="pb-20 moive-layout page-container">
          <h2 className="mb-10 text-3xl font-bold text-white capitalize">
            Sự Kiện Âm Nhạc
          </h2>
          <TicketList type="Music event" criteria={searchCriteria} />
        </section>

        {/* Trending Events Section */}
        <section className="pb-20 moive-layout page-container">
          <h2 className="mb-10 text-3xl font-bold text-white capitalize">
            Sự Kiện có tính xu hướng
          </h2>
          <TicketList type="Trending event" criteria={searchCriteria} />
        </section>

        {/* Upcoming Events Section */}
        <section className="pb-20 moive-layout page-container">
          <h2 className="mb-10 text-3xl font-bold text-white capitalize">
            Các sự kiện sắp tới
          </h2>
          <TicketList type="Upcoming event" criteria={searchCriteria} />
        </section>

        <div className="app-container">
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
