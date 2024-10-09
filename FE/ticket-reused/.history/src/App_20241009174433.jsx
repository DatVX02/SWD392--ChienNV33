// import HomePage from "./components/page/HomePage";
// import TicketCard from "./components/ticket/TicketCard";
import Banner from "./components/banner/Banner";

// const HomePage = lazy(() => import("./page/HomePage"));
const App = () => {
  return (
    <>
      {/* <TicketCard></TicketCard> */}

      <Banner>
        <HomePage></HomePage>
      </Banner>
    </>
  );
};

export default App;
