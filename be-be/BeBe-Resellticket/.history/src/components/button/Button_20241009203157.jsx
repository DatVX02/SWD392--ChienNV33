// import React from "react";
import PropTypes from "prop-types";

const Button = ({
  onClick,
  full = false,
  className = "",
  children,
  type = "button",
  bgColor = "primary",
}) => {
  // Xác định lớp nền tùy theo bgColor
  let bgClassname = "";
  switch (bgColor) {
    case "primary":
      bgClassname = "bg-primary";
      break;
    case "secondary":
      bgClassname = "bg-primary"; // Sửa lại ánh xạ cho 'secondary'
      break;
    default:
      bgClassname = "bg-primary"; // Mặc định là 'primary' nếu không khớp
      break;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 mt-auto capitalize rounded-lg ${
        full ? "w-full" : ""
      } ${bgClassname} ${className}`}
    >
      {children}
    </button>
  );
};

// Xác định propTypes để kiểm tra kiểu dữ liệu cho các props
Button.propTypes = {
  onClick: PropTypes.func,
  full: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  bgColor: PropTypes.oneOf(["primary", "primary"]),
};

// Cung cấp giá trị mặc định cho các props
Button.defaultProps = {
  onClick: () => {},
  full: false,
  className: "",
  type: "button",
  bgColor: "primary",
};

export default Button;
