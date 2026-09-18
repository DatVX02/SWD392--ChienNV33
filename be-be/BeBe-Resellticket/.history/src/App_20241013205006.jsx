import { Route, Routes } from "react-router-dom";
import Login from "./components/Auther/Login";
import Register from "./components/Auther/Register";
import LoginModal from "./components/User/LoginModal";
import RegisterModal from "./components/User/RegisterModal";
import HomePage from "./components/page/HomePage";
import News from "./components/Content/NewsPage";
import Contact from "./components/Content/ContactPage";

const NotFound = () => (
  <div className="container px-4 py-3 mx-auto my-4 mt-3 text-red-700 bg-red-100 border border-red-400 rounded">
    404. Not found data with current URL
  </div>
);

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />}>
      <Route path="user/login" element={<LoginModal />} />
      <Route path="user/register" element={<RegisterModal />} />
    </Route>
    <Route path="news" element={<News />} />
    <Route path="contact" element={<Contact />} />

    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />

    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
