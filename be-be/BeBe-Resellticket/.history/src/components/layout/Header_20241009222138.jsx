import { useNavigate } from "react-router-dom";
import LogoTicket from "@/assets/image/LogoTicket.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed z-10 w-full shadow-md bg-slate-600">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <div className="flex justify-center mb-4">
          <img
            src={LogoTicket}
            alt="Logo"
            className="w-20 h-20 rounded-full shadow-lg"
          />
        </div>
        <h1
          className="text-2xl font-bold text-white cursor-pointer"
          onClick={() => navigate("/")}
        >
          Website Logo
        </h1>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          {/* Menu chính */}
          <ul className="flex space-x-4">
            <li
              className="text-white cursor-pointer hover:text-green-500"
              onClick={() => navigate("/")} // Điều hướng về Trang chủ
            >
              Trang chủ
            </li>
            <li
              className="text-white cursor-pointer hover:text-green-500"
              onClick={() => navigate("/products")} // Điều hướng về trang Sản phẩm
            >
              Sản phẩm
            </li>
            <li
              className="text-white cursor-pointer hover:text-green-500"
              onClick={() => navigate("/news")} // Điều hướng về trang Tin tức
            >
              Tin tức
            </li>
            <li
              className="text-white cursor-pointer hover:text-green-500"
              onClick={() => navigate("/contact")} // Điều hướng về trang Liên hệ
            >
              Liên hệ
            </li>
          </ul>

          {/* Menu đăng ký / đăng nhập */}
          <ul className="flex pl-4 space-x-4 border-l border-gray-300">
            <li
              className="text-white cursor-pointer hover:text-green-500"
              onClick={() => navigate("/register")} // Điều hướng đến trang Đăng ký
            >
              Register
            </li>
            <li
              className="text-white cursor-pointer hover:text-green-500"
              onClick={() => navigate("/login")} // Điều hướng đến trang Đăng nhập
            >
              Login
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
