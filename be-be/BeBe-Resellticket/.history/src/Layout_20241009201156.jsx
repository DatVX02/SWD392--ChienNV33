import { Route, Routes } from "react-router-dom";
import App from "./App";

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}></Route>
      </Routes>
    </>
  );
};

export default Layout;
