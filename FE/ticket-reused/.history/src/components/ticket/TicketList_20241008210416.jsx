import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard { MovieCardSkeleton } from "./MovieCard";

import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

// eslint-disable-next-line react/prop-types
const MovieList = () => {
  return (
    <div className="movie-list">
      <>
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          <SwiperSlide>
            <MovieCardSkeleton></MovieCardSkeleton>
          </SwiperSlide>
        </Swiper>
      </>

      {/* <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {card.length > 0 &&
         card.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper> */}
    </div>
  );
};
MovieList.propTypes = {
  type: PropTypes.string.isRequired,
};
// eslint-disable-next-line react-refresh/only-export-components
function FallbackComponent() {
  return (
    <p className="text-red-400 bg-red-50">
      Something went wrong with this component{" "}
    </p>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export default withErrorBoundary(MovieList, {
  FallbackComponent,
});
