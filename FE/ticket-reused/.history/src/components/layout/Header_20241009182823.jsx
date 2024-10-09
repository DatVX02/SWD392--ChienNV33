import logo from "./logo.png"; // Đảm bảo rằng bạn có file logo trong thư mục hiện tại

const Header = () => {
  return (
    <header className="fixed z-10 w-full shadow-md bg-slate-600">
      <div className="container flex items-center justify-between p-4 mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Website Logo"
            className="object-contain w-12 h-12"
          />
          <h1 className="text-2xl font-bold text-white">Website Logo</h1>{" "}
          {/* Giữ lại chữ nếu cần */}
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-4">
            <li className="text-white cursor-pointer hover:text-green-500">
              Trang chủ
            </li>
            <li className="text-white cursor-pointer hover:text-green-500">
              Sản phẩm
            </li>
            <li className="text-white cursor-pointer hover:text-green-500">
              Tin tức
            </li>
            <li className="text-white cursor-pointer hover:text-green-500">
              Liên hệ
            </li>
          </ul>

          <ul className="flex pl-4 space-x-4 border-l border-gray-300">
            <li className="text-white cursor-pointer hover:text-green-500">
              Register
            </li>
            <li className="text-white cursor-pointer hover:text-green-500">
              Login
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
