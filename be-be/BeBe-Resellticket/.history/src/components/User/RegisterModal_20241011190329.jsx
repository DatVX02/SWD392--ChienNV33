import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoTicket from "@/assets/image/LogoTicket.png"; // Ensure the path is correct

const RegisterModal = ({ onClose, onShowLogin }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    let emailError = "";
    let passwordError = "";

    if (!email) {
      emailError = "Email is required";
    } else if (!emailRegex.test(email)) {
      emailError = "Please enter a valid email";
    }

    if (!password) {
      passwordError = "Password is required";
    } else if (password.length < 6) {
      passwordError = "Password must be at least 6 characters long";
    }

    setErrors({ email: emailError, password: passwordError });

    return !emailError && !passwordError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted:", { email, username, password });
      setEmail("");
      setUsername("");
      setPassword("");
      setErrors({ email: "", password: "" });
      onClose && onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      style={{ backdropFilter: "blur(5px)" }}
    >
      <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-lg z-60">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute text-gray-500 top-2 right-2 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Register Header */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={LogoTicket}
            alt="Logo"
            className="w-24 h-24 rounded-full shadow-lg"
          />
          <h2 className="text-3xl font-bold text-green-600">Register</h2>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Nhập Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Nhập Email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Username Field */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Nhập Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập Username"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Nhập password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.password ? "border-red-500" : ""
              }`}
              placeholder="Nhập password"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 mb-4 text-white bg-green-600 rounded-lg hover:bg-green-700"
          >
            Register
          </button>
        </form>

        {/* Additional Links */}
        <div className="mb-4 text-sm text-center">
          <span className="text-gray-600">Already have an account? </span>
          <a
            href="#"
            className="text-blue-500 hover:underline"
            onClick={() => {
              // Close the register modal and show the login modal
              //   onClose();
              //   onShowLogin();
              //   navigate("/user/login");
            }}
          >
            Login now!
          </a>
        </div>

        {/* Terms and Privacy */}
        <div className="text-xs text-center text-gray-500">
          Bằng việc tiếp tục, bạn đã đọc kĩ và đồng ý với{" "}
          <a href="#" className="text-green-600 hover:underline">
            Điều khoản sử dụng
          </a>{" "}
          và{" "}
          <a href="#" className="text-green-600 hover:underline">
            Chính sách bảo mật thông tin cá nhân
          </a>{" "}
          của Ticket Resell.
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
