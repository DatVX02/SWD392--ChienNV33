import { SwiperSlide, Swiper } from "swiper/react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import TicketCard, { TicketCardSkeleton } from "./TicketCard";

const TicketList = () => {
  const movies = [
    { id: 1, title: "Ticket 1", vote_average: 7.5, release_date: "2021-01-01" },
    { id: 2, title: "Ticket 2", vote_average: 6.8, release_date: "2022-05-13" },
    { id: 3, title: "Ticket 3", vote_average: 8.2, release_date: "2023-03-10" },
  ];
  const isLoading = false;

  return (
    <div className="px-4 movie-list md:px-8">
      {" "}
      {/* Thêm padding ngang cho toàn bộ component */}
      {isLoading && (
        <Swiper
          grabCursor={"true"}
          spaceBetween={40}
          slidesPerView={"auto"}
          className="px-4 md:px-8"
        >
          <SwiperSlide className="px-2">
            {" "}
            {/* Thêm padding ngang cho từng slide */}
            <TicketCardSkeleton />
          </SwiperSlide>
        </Swiper>
      )}
      {!isLoading && (
        <Swiper
          grabCursor={"true"}
          spaceBetween={40}
          slidesPerView={"auto"}
          className="px-4 md:px-8"
        >
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id} className="px-2">
                {" "}
                {/* Thêm padding ngang cho từng slide */}
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
