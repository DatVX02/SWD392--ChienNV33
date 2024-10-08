import PropTypes from "prop-types";
import React from "react";

const LoadingSkeleton = ({
  width = "100%",
  height = "20px",
  radius = "4px",
  className = "",
}) => {
  return (
    <div
      className={`skeleton ${className}`}
      style={{
        height: height,
        width: width,
        borderRadius: radius,
        backgroundColor: "#e0e0e0", // Màu nền xám để hiển thị skeleton
        animation: "pulse 1.5s ease-in-out infinite", // Hiệu ứng nhấp nháy
      }}
    ></div>
  );
};

// Xác định các propTypes để kiểm tra kiểu dữ liệu
LoadingSkeleton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.string,
  className: PropTypes.string,
};

// Cung cấp giá trị mặc định cho các props
LoadingSkeleton.defaultProps = {
  width: "100%",
  height: "20px",
  radius: "4px",
  className: "",
};

export default LoadingSkeleton;
