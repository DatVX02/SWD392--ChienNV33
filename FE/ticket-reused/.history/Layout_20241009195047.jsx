import { Router, Routes } from "react-router-dom";
import App from "./src/App";

const Layout = () => {
  //   const NotFount = () => {
  //     return (
  //       <div className="container px-4 py-3 mt-3 text-red-700 bg-red-100 border border-red-400 rounded">
  //         <strong>404.</strong> Not found data with current URL
  //       </div>
  //     );
  //   };
  return (
    <>
      <Routes>
        <Router path="/" element={<App />}>
          {/* <Route index element={<HomePage />} />
          <Route path="/users" element={<ListQuiz />} /> */}
        </Router>
      </Routes>
    </>
  );
};

export default Layout;
