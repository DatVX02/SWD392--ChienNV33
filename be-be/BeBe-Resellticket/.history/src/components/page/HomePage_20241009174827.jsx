import { Fragment } from "react";
import TicketList from "../ticket/TicketList";

const HomePage = () => {
  return (
    <Fragment>
      <section className="pb-20 moive-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize">
          Sự kiện đặc biệt
        </h2>
        <TicketList></TicketList>
      </section>
      <section className="pb-20 moive-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize">
          Sự Kiện Âm Nhạc
        </h2>
        <TicketList type="event music"></TicketList>
      </section>
      <section className="pb-20 moive-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize">
          Sự Kiện có tính xu hướng
        </h2>
        <TicketList type="Trending event"></TicketList>
      </section>
      <section className="pb-20 moive-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize">
          Các sự kiện sắp tới
        </h2>
      </section>
    </Fragment>
  );
};

export default HomePage;
