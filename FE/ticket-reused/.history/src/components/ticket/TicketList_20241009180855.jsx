import { SwiperSlide, Swiper } from "swiper/react";
// import MovieCard, { MovieCardSkeleton } from "./MovieCard";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import TicketCard, { TicketCardSkeleton } from "./TicketCard";

// eslint-disable-next-line react/prop-types
const TicketList = () => {
  // Dữ liệu tĩnh thay vì lấy từ API
  const movies = [
    { id: 1, title: "Ticket 1", vote_average: 7.5, release_date: "2021-01-01" },
    { id: 2, title: "Ticket 2", vote_average: 6.8, release_date: "2022-05-13" },
    { id: 3, title: "Ticket 3", vote_average: 8.2, release_date: "2023-03-10" },
  ];
  const isLoading = false;

  return (
    <div className="movie-list">
      {/* Khi đang tải (loading) hiển thị khung Loading Skeleton */}
      {isLoading && (
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          <SwiperSlide>
            <TicketCardSkeleton />
          </SwiperSlide>
        </Swiper>
      )}
      {/* Hiển thị danh sách ticket khi không tải */}
      {!isLoading && (
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
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