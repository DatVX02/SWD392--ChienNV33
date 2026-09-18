import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import TicketCard, { TicketCardSkeleton } from "./TicketCard"; // Ensure TicketCard and TicketCardSkeleton are correctly imported

const TicketList = ({ criteria }) => {
  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request to fetch tickets (replace with actual API call)
    setTimeout(() => {
      const allTickets = [
        { id: 1, name: "Event 1", location: "HCM", category: "Music" },
        { id: 2, name: "Event 2", location: "HN", category: "Comedy" },
        { id: 3, name: "Event 3", location: "DN", category: "Drama" },
        // Add more tickets as needed
      ];

      // Filter tickets based on criteria
      const filteredTickets = allTickets.filter((ticket) => {
        const matchKeyword = criteria?.keyword
          ? ticket.name.toLowerCase().includes(criteria.keyword.toLowerCase())
          : true;
        const matchLocation = criteria?.location
          ? ticket.location === criteria.location
          : true;
        const matchCategory = criteria?.category
          ? ticket.category === criteria.category
          : true;

        return matchKeyword && matchLocation && matchCategory;
      });

      setTickets(filteredTickets);
      setIsLoading(false);
    }, 1000); // Simulate a 1-second loading time
  }, [criteria]);

  return (
    <div className="px-4 ticket-list md:px-8">
      {/* Loading Skeletons */}
      {isLoading && (
        <Swiper
          direction={"vertical"} // Set the Swiper to vertical direction
          spaceBetween={20}
          slidesPerView={3} // Control how many slides are visible at once
          grabCursor={"true"}
          className="h-full" // Set height to control the vertical scrolling
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <SwiperSlide key={index}>
              <TicketCardSkeleton />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Ticket Cards */}
      {!isLoading && (
        <Swiper
          direction={"vertical"} // Set Swiper to vertical direction
          spaceBetween={20}
          slidesPerView={3} // Adjust this value based on how many items you want to show vertically
          grabCursor={"true"}
          className="h-full" // Set height to control the vertical scrolling
        >
          {tickets.length > 0 ? (
            tickets.map((ticket) => (
              <SwiperSlide key={ticket.id}>
                <TicketCard
                  item={{
                    title: ticket.name,
                    vote_average: 7.5, // Placeholder value, replace with actual rating if available
                    release_date: "2024-12-31", // Placeholder value, replace with actual release date if available
                  }}
                />
              </SwiperSlide>
            ))
          ) : (
            <p className="text-center text-white">
              No tickets found based on the search criteria.
            </p>
          )}
        </Swiper>
      )}
    </div>
  );
};

TicketList.propTypes = {
  criteria: PropTypes.shape({
    keyword: PropTypes.string,
    location: PropTypes.string,
    category: PropTypes.string,
  }),
};

// Error Boundary Fallback Component
function FallbackComponent() {
  return (
    <p className="text-red-400 bg-red-50">
      Something went wrong with this component.
    </p>
  );
}

export default withErrorBoundary(TicketList, {
  FallbackComponent,
});
