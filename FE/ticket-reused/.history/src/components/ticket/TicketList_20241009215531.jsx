import { SwiperSlide, Swiper } from "swiper/react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import TicketCard, { TicketCardSkeleton } from "./TicketCard";

const TicketList = () => {
  const movies = [
    { id: 1, title: "Ticket 1", vote_average: 7.5, release_date: "2021-01-01" },
    { id: 2, title: "Ticket 2", vote_average: 6.8, release_date: "2022-05-13" },
    { id: 3, title: "Ticket 3", vote_average: 8.2, release_date: "2023-03-10" },
    { id: 4, title: "Ticket 4", vote_average: 8.1, release_date: "2023-04-15" },
    { id: 5, title: "Ticket 5", vote_average: 7.9, release_date: "2023-06-10" },
  ];
  const isLoading = false;

  return (
    <div className="px-4 ticket-list md:px-8">
      {/* Display Loading Skeletons if isLoading is true */}
      {isLoading && (
        <Swiper
          grabCursor={"true"}
          spaceBetween={20}
          slidesPerView={"auto"}
          className="px-4 md:px-8"
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <SwiperSlide key={index} className="w-[300px] px-2">
              <TicketCardSkeleton />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Display Ticket Cards if not loading */}
      {!isLoading && (
        <Swiper
          grabCursor={"true"}
          spaceBetween={20} // Adjust the space between the cards
          slidesPerView={"auto"} // Dynamically adjust number of visible cards
          className="flex w-full"
        >
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide
                key={item.id}
                className="px-2" // Padding for each card slide
                style={{ width: "300px" }} // Adjust the width of each card
              >
                <TicketCard item={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};

TicketList.propTypes = {
  type: PropTypes.string,
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
