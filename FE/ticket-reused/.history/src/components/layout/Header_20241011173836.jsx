import { useNavigate } from "react-router-dom";
import LogoTicket from "@/assets/image/LogoTicket.png"; // Đảm bảo đường dẫn đúng tới ảnh

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed z-10 w-full shadow-md bg-primary">
      <div className="container flex items-center justify-between p-4 mx-auto">
        {/* Logo Section */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")} // Điều hướng về HomePage khi click vào Logo
        >
          <img
            src={LogoTicket}
            alt="Logo"
            className="w-16 h-16 mr-2 transition duration-200 transform rounded-full shadow-lg hover:scale-105" // Thêm hiệu ứng scale khi hover
          />
          <h1 className="text-3xl font-bold text-slate-600">TicketResell</h1>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          {/* Main Menu */}
          <ul className="flex space-x-4">
            <li
              className="text-white cursor-pointer hover:text-slate-600"
              onClick={() => navigate("/")} // Điều hướng về Trang chủ
            >
              Trang chủ
            </li>
            <li
              className="text-white cursor-pointer hover:text-slate-600"
              onClick={() => navigate("/products")} // Điều hướng về trang Sản phẩm
            >
              Sản phẩm
            </li>
            <li
              className="text-white cursor-pointer hover:text-slate-600"
              onClick={() => navigate("/news")} // Điều hướng về trang Tin tức
            >
              Tin tức
            </li>
            <li
              className="text-white cursor-pointer hover:text-slate-600"
              onClick={() => navigate("/contact")} // Điều hướng về trang Liên hệ
            >
              Liên hệ
            </li>
          </ul>

          {/* Auth Menu */}
          <ul className="flex pl-4 space-x-4 border-l border-gray-300">
            <li
              className="text-white cursor-pointer hover:text-slate-600"
              onClick={() => navigate("/register")} // Điều hướng đến trang Đăng ký
            >
              Register
            </li>
            <li
              className="text-white cursor-pointer hover:text-slate-600"
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
