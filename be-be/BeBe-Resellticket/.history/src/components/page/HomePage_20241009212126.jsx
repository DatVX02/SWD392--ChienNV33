import { Fragment, useState } from "react";
import SearchBar from "../banner/SearchBar"; // Import the SearchBar component
import TicketList from "../ticket/TicketList";

const HomePage = () => {
  const [searchCriteria, setSearchCriteria] = useState({});

  const handleSearch = (criteria) => {
    // Update the search criteria state when the search button is clicked
    setSearchCriteria(criteria);
    console.log("Search criteria:", criteria); // For debugging purposes, remove later
  };

  return (
    <Fragment>
      {/* Search Bar */}
      <div className="pt-10 page-container">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Special Events Section */}
      <section className="pb-20 moive-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize">
          Sự kiện đặc biệt
        </h2>
        <TicketList type="Special event" criteria={searchCriteria}></TicketList>
      </section>

      {/* Music Events Section */}
      <section className="pb-20 moive-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize">
          Sự Kiện Âm Nhạc
        </h2>
        <TicketList type="Music event" criteria={searchCriteria}></TicketList>
      </section>

      {/* Trending Events Section */}
      <section className="pb-20 moive-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize">
          Sự Kiện có tính xu hướng
        </h2>
        <TicketList
          type="Trending event"
          criteria={searchCriteria}
        ></TicketList>
      </section>

      {/* Upcoming Events Section */}
      <section className="pb-20 moive-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize">
          Các sự kiện sắp tới
        </h2>
        <TicketList
          type="Upcoming event"
          criteria={searchCriteria}
        ></TicketList>
      </section>
    </Fragment>
  );
};

export default HomePage;
