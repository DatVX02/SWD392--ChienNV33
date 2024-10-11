import { Route, Routes } from "react-router-dom";
import App from "./App";
// import HomePage from "./components/page/HomePage";
import Login from "./components/Auther/Login";
import Register from "./components/Auther/Register";
import LoginModal from "./components/User/LoginModal";
import RegisterModal from "./components/User/RegisterModal";
// import CardPage from "./components/page/CardPage";

const Layout = () => {
  const NotFound = () => {
    return (
      <div className="container px-4 py-3 mx-auto my-4 mt-3 text-red-700 bg-red-100 border border-red-400 rounded">
        404. Not found data with current URL
      </div>
    );
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/user/login" element={<LoginModal />} />
          <Route path="/user/login" element={<RegisterModal />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Layout;
