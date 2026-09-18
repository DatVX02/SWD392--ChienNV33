import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
// import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import LoadingSkeleton from "../loading/LoadingSkeleton";

// eslint-disable-next-line react/prop-types
const MovieCard = () => {
  // eslint-disable-next-line react/prop-types
  //   const {
  //     title = "Unknown Title",
  //     vote_average = 0,
  //     release_date = "2024",
  //     id,
  //   } = item;

  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full p-3 text-white bg-white rounded-lg select-none movie-cart">
      {/* Placeholder Image */}
      <img
        src="https://i.pinimg.com/736x/dd/a5/b3/dda5b3cff1e66bc29dd6db59a744c17e.jpg"
        alt=""
        className="w-full rounded-lg h-[250px] object-cover mb-5"
      />
      <div className="flex flex-col flex-1 text-back">
        <h3 className="mb-3 text-xl font-bold ">Heloo</h3>
        <div className="flex items-center justify-between mb-10 text-sm opacity-50">
          <span>day/month/year</span>
          <span>Vote</span>
        </div>
        <Button bgColor="secondary" onClick={() => navigate(`/card`)}>
          Watch Now
        </Button>
      </div>
    </div>
  );
};
// MovieCard.propTypes = {
//   item: PropTypes.shape({
//     title: PropTypes.string,
//     vote_average: PropTypes.number,
//     release_date: PropTypes.string,
//     poster_path: PropTypes.string,
//     id: PropTypes.number,
//   }),
// };

function FallbackComponent() {
  return (
    <p className="text-red-400 bg-red-50">
      Something went wrong with this component{" "}
    </p>
  );
}

export default withErrorBoundary(MovieCard, {
  FallbackComponent,
});

export const MovieCardSkeleton = () => {
  return (
    <div className="flex flex-col h-full p-3 text-white bg-white rounded-lg select-none movie-cart">
      <LoadingSkeleton
        width="100%"
        height="250px"
        radius="8px"
        className="mb-5"
      ></LoadingSkeleton>
      <div className="flex flex-col flex-1">
        <h3 className="mb-3 text-xl font-bold ">
          <LoadingSkeleton width="100%" height="20px"></LoadingSkeleton>
        </h3>
        <div className="flex items-center justify-between mb-10 text-sm opacity-50">
          <span>
            <LoadingSkeleton width="50px" height="10px"></LoadingSkeleton>
          </span>
          <span>
            <LoadingSkeleton width="30px" height="10px"></LoadingSkeleton>
          </span>
        </div>
        <LoadingSkeleton
          width="100%"
          height="45px"
          radius="6x"
        ></LoadingSkeleton>
      </div>
    </div>
  );
};
