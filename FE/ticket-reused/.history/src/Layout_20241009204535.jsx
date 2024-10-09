import { Route, Routes } from "react-router-dom";
import App from "./App";
import HomePage from "./components/page/HomePage";
import Login from "./components/Auther/Login";
import TicketDetail from "./components/ticket/TicketDetail";

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={HomePage}></Route>
        </Route>
        <Route
          path="/movie/:movieId"
          element={<TicketDetail></TicketDetail>}
        ></Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Layout;
