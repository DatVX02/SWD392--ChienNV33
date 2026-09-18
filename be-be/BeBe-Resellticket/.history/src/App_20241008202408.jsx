import { Fragment, lazy } from "vue-fragment";
import Banner from "./components/banner/banner";
// import HomePage from "./components/page/HomePage";
import { Route, Routes } from "react-router-dom";

// const HomePage = lazy(() => import("./page/HomePage"));
const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner></Banner>
              <HomePage></HomePage>
            </>
          }
          s
        ></Route>
      </Routes>
    </Fragment>
  );
};

export default App;
