import { Fragment, useState } from "react";

// Ensure the path to LoginModal component is correct
import SearchBar from "../banner/SearchBar"; // Import the SearchBar component
import TicketList from "../ticket/TicketList"; // Import the TicketList component

import LoginModal from "../User/LoginModal";

const HomePage = () => {
  // State to store the search criteria based on SearchBar input
  const [searchCriteria, setSearchCriteria] = useState({});
  // State to manage the visibility of the login modal
  const [isLoginVisible, setLoginVisible] = useState(false);

  // Handle the search criteria when the SearchBar button is clicked
  const handleSearch = (criteria) => {
    setSearchCriteria(criteria);
  };

  // Function to show the login modal

  // Function to hide the login modal
  const handleCloseLogin = () => {
    setLoginVisible(false);
  };

  return (
    <Fragment>
      {/* Pass handleShowLogin as a prop to Header */}

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
      {/* Render LoginModal and pass visibility and close handler as props */}
      <LoginModal isVisible={isLoginVisible} onClose={handleCloseLogin} />
    </Fragment>
  );
};

export default HomePage;
