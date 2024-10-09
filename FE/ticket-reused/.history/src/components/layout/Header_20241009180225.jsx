import React from "react";

const Header = () => {
  return (
    <header className="fixed z-10 w-full shadow-md bg-slate-600">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <h1 className="text-2xl font-bold">Website Logo</h1>
        <nav>
          <ul className="flex space-x-4">
            <li className="cursor-pointer hover:text-green-500">Trang chủ</li>
            <li className="cursor-pointer hover:text-green-500">Sản phẩm</li>
            <li className="cursor-pointer hover:text-green-500">Tin tức</li>
            <li className="cursor-pointer hover:text-green-500">Liên hệ</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
