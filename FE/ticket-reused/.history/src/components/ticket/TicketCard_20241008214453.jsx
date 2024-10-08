import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../button/Button";
import { withErrorBoundary } from "react-error-boundary";
import LoadingSkeleton from "../loading/LoadingSkeleton";

const TickedCard = ({ item }) => {
  const navigate = useNavigate();

  // Lấy các thông tin từ `item`
  const { poster_path, title, vote_average, release_date, id } = item || {};

  // URL cơ bản cho poster (cần thay đổi tùy thuộc vào cấu trúc của API nếu cần)
  const baseURL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="flex flex-col h-full p-3 text-white bg-white rounded-lg select-none movie-cart">
      {/* Hiển thị hình ảnh */}
      <img
        src={
          poster_path
            ? `${baseURL}${poster_path}` // Nếu có `poster_path`, kết hợp với URL gốc
            : "https://i.pinimg.com/736x/ca/4f/da/ca4fda236d903d8912e1fdc19c78ad57.jpg/t/p/w500" // Ảnh mặc định nếu không có `poster_path`
        }
        alt={title ? `${title} Poster` : "Default Poster"} // Thêm `alt` cho thẻ img để cải thiện SEO và tính truy cập
        className="w-full rounded-lg h-[250px] object-cover mb-5"
      />

      <div className="flex flex-col flex-1 text-black">
        <h3 className="mb-3 text-xl font-bold">{title || "Untitled"}</h3>
        <div className="flex items-center justify-between mb-10 text-sm opacity-50">
          <span>
            {release_date ? new Date(release_date).getFullYear() : "N/A"}
          </span>
          <span>{vote_average || "N/A"}</span>
        </div>
        <Button bgColor="primary" onClick={() => navigate(`/movie/${id}`)}>
          Detail
        </Button>
      </div>
    </div>
  );
};

// Sử dụng `propTypes` để kiểm tra kiểu dữ liệu của `item`
TickedCard.propTypes = {
  item: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    id: PropTypes.number,
  }),
};

// Component hiển thị lỗi nếu có sự cố xảy ra
function FallbackComponent() {
  return (
    <p className="text-red-400 bg-red-50">
      Something went wrong with this component.
    </p>
  );
}

// Bọc MovieCard với Error Boundary để bắt lỗi
export default withErrorBoundary(TickedCard, {
  FallbackComponent,
});

// Component hiển thị Loading Skeleton
export const TicketCardSkeleton = () => {
  return (
    <div className="flex flex-col h-full p-3 text-white bg-white rounded-lg select-none movie-cart">
      <LoadingSkeleton
        width="100%"
        height="250px"
        radius="8px"
        className="mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="mb-3 text-xl font-bold ">
          <LoadingSkeleton width="100%" height="20px" />
        </h3>
        <div className="flex items-center justify-between mb-10 text-sm opacity-50">
          <span>
            <LoadingSkeleton width="50px" height="10px" />
          </span>
          <span>
            <LoadingSkeleton width="30px" height="10px" />
          </span>
        </div>
        <LoadingSkeleton width="100%" height="45px" radius="6px" />
      </div>
    </div>
  );
};
