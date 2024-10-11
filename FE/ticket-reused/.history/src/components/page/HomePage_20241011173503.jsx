import React, { Fragment, useState } from "react";
import SearchBar from "../banner/SearchBar"; // Import the SearchBar component
import TicketList from "../ticket/TicketList";
import LoginModal from "../path/to/LoginModal"; // Import the LoginModal component
import Header from "../path/to/Header"; // Import your Header component

const HomePage = () => {
  // State to store the search criteria based on SearchBar input
  const [searchCriteria, setSearchCriteria] = useState({});

  // State to control the visibility of the Login Modal
  const [isLoginVisible, setLoginVisible] = useState(false);

  // Handle the search criteria when the SearchBar button is clicked
  const handleSearch = (criteria) => {
    setSearchCriteria(criteria); // Update the state with the criteria
    console.log("Search criteria updated:", criteria); // For debugging, remove later if not needed
  };

  // Function to show the login modal
  const handleShowLogin = () => {
    setLoginVisible(true);
  };

  // Function to hide the login modal
  const handleCloseLogin = () => {
    setLoginVisible(false);
  };

  return (
    <Fragment>
      {/* Header Component */}
      {/* Pass handleShowLogin as a prop to the Header component */}
      <Header onLoginClick={handleShowLogin} />

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

      {/* Login Modal */}
      {/* Render LoginModal based on isLoginVisible state */}
      <LoginModal isVisible={isLoginVisible} onClose={handleCloseLogin} />
    </Fragment>
  );
};

export default HomePage;
