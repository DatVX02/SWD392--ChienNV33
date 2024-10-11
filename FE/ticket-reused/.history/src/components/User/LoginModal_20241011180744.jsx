// import React from "react";
import LogoTicket from "@/assets/image/LogoTicket.png";

const LoginModal = () => {
  // Return null if the modal is not visible

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" // Make sure z-index is high enough
      style={{ backdropFilter: "blur(5px)" }} // Optional: Add a blur effect to the backdrop
    >
      <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-lg z-60">
        <button className="absolute text-gray-500 top-2 right-2 hover:text-gray-700">
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
        {/* Login Header */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={LogoTicket}
            alt="Logo"
            className="w-20 h-20 rounded-full shadow-lg"
          />
          <h2 className="text-2xl font-bold text-green-600">Login</h2>
        </div>
        {/* Login Form */}
        <form>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Nhập Email Hoặc Username
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập Email Hoặc Username"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Nhập password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập password"
            />
          </div>
          <button
            type="button"
            className="w-full px-4 py-2 mb-4 text-white bg-green-600 rounded-lg hover:bg-green-700"
          >
            Login
          </button>
        </form>
        {/* Additional Links */}
        <div className="flex items-center justify-between mb-4 text-sm">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot password?
          </a>
          <a href="#" className="text-blue-500 hover:underline">
            Register now!
          </a>
        </div>
        {/* Google Login Button */}
        <div className="text-center">
          {/* <button
            type="button"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg hover:bg-gray-100"
          >
            <div className="flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Sign in with Google
            </div>
          </button> */}
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

export default LoginModal;
