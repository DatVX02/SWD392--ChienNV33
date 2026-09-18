import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // New state for error messages
  const navigate = useNavigate();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleRegister = async () => {
    // Reset error message
    setErrorMessage("");

    // Validate email
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      setErrorMessage("Invalid email format");
      return;
    }

    if (!password) {
      setErrorMessage("Password is required");
      return;
    }

    // Handle successful registration (replace with your API logic)
    setErrorMessage(""); // Clear error if successful

    // Example: Redirect to login page
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <span
            className="text-sm text-gray-600"
            onClick={() => navigate("/login")}
          >
            Already have an account?
          </span>
          <button
            onClick={() => navigate("/login")}
            className="font-medium text-blue-500 hover:underline"
          >
            Log in
          </button>
        </div>

        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <img
            src="https://via.placeholder.com/80"
            alt="User Avatar"
            className="w-20 h-20 rounded-full shadow-md"
          />
        </div>

        {/* Title */}
        <h1 className="mb-4 text-2xl font-semibold text-center">Wordaholic</h1>
        <p className="mb-8 text-center text-gray-600">Start your journey</p>

        {/* Error Message */}
        {errorMessage && (
          <div className="mb-4 text-center text-red-500">{errorMessage}</div>
        )}

        {/* Content Form */}
        <div className="space-y-6">
          {/* Email Field */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">
              Email (*)
            </label>
            <input
              type="email"
              className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="relative flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">
              Password (*)
            </label>
            <input
              type={isShowPassword ? "text" : "password"}
              className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute text-gray-500 cursor-pointer right-3 top-10"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <VscEye /> : <VscEyeClosed />}
            </span>
          </div>

          {/* Username Field */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Forgot Password */}
          <div className="flex flex-col space-y-4">
            <span
              className="text-sm text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </span>

            {/* Submit Button */}
            <button
              className="px-4 py-2 text-white transition duration-300 rounded-md bg-primary hover:bg-secondary"
              onClick={handleRegister}
            >
              Register
            </button>
          </div>

          {/* Back to Home */}
          <div className="mt-4 text-center">
            <span
              className="cursor-pointer text-secondary hover:underline"
              onClick={() => navigate("/")}
            >
              &#60;&#60; Go to HomePage
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
