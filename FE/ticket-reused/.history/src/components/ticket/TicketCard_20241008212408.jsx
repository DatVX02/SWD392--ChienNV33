import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { withErrorBoundary } from "react-error-boundary";
import LoadingSkeleton from "../loading/LoadingSkeleton";

const MovieCard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full p-3 text-white bg-white rounded-lg select-none movie-cart">
      {/* Placeholder Image */}
      <img
        src={"https://i.pinimg.com/736x/ca/4f/da/ca4fda236d903d8912e1fdc19c78ad57.jpg".image500(
          poster_path
        )}
        alt="Movie Poster"
        className="w-full rounded-lg h-[250px] object-cover mb-5"
      />
      <div className="flex flex-col flex-1 text-black">
        <h3 className="mb-3 text-xl font-bold">Hello</h3>
        <div className="flex items-center justify-between mb-10 text-sm opacity-50">
          <span>day/month/year</span>
          <span>Vote</span>
        </div>
        <Button bgColor="primary" onClick={() => navigate(`/card`)}>
          Detail
        </Button>
      </div>
    </div>
  );
};

// Error Boundary Component
function FallbackComponent() {
  return (
    <p className="text-red-400 bg-red-50">
      Something went wrong with this component.
    </p>
  );
}

// Wrap MovieCard with Error Boundary
export default withErrorBoundary(MovieCard, {
  FallbackComponent,
});

// Loading Skeleton Component
export const TicketCardSkeleton = () => {
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
          radius="6px"
        ></LoadingSkeleton>
      </div>
    </div>
  );
};
