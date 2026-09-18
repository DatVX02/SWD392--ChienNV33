const Header = () => {
  return (
    <header className="fixed z-10 w-full shadow-md bg-slate-600">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <h1 className="text-2xl font-bold text-white">Website Logo</h1>
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
