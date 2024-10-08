import { Fragment } from "vue-fragment";
import Banner from "./components/banner/banner";
// import HomePage from "./components/page/HomePage";
import { Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("/pages/HomePage"));
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
        ></Route>
      </Routes>
    </Fragment>
  );
};

export default App;
