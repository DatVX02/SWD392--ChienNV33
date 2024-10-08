const Button = ({
  onClick,
  full = false,
  className,
  children,
  type = "button",
  bgColor = "primary",
}) => {
  let bgClassname = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassname = "bg-primary";
      break;
    case "secondary":
      bgClassname = "bg-primary";
      break;
    default:
      break;
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={` px-6 py-3 mt-auto capitalize rounded-lg ${
        full ? "w-full" : ""
      } ${bgClassname} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
