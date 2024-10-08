import { useState } from "react";
import TickedCard, { TicketCardSkeleton } from "../components/ticket/MovieCard";
import ReactPaginate from "react-paginate";
import { v4 } from "uuid";

const itemsPerPage = 20;

const CardPage = () => {
  const [, setItemOffset] = useState(0);
  const [, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [loading] = useState(false);

  // Dữ liệu giả lập để thay thế cho dữ liệu từ API
  const ticket = [
    { id: 1, title: "Movie 1", vote_average: 7.5, release_date: "2021-01-01" },
    { id: 2, title: "Movie 2", vote_average: 6.8, release_date: "2022-05-13" },
    { id: 3, title: "Movie 3", vote_average: 8.2, release_date: "2023-03-10" },
    { id: 4, title: "Movie 4", vote_average: 5.3, release_date: "2020-07-20" },
    { id: 5, title: "Movie 5", vote_average: 7.1, release_date: "2019-10-30" },
    // Bạn có thể thêm nhiều mục hơn tại đây
  ];

  const filterTicket = ticket.filter((ticket) =>
    ticket.title.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const pageCount = Math.ceil(filterTicket.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filterTicket.length;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };

  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 font-medium text-white outline-none bg-slate-800"
            placeholder="Type here to search ..."
            onChange={handleFilterChange}
          />
        </div>
        <button className="p-4 text-white bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
      {/* Hiển thị khung Loading Skeleton khi đang tải */}
      {loading && (
        <div className="grid grid-cols-4 gap-10">
          {new Array(itemsPerPage).fill(0).map(() => (
            <TicketCardSkeleton key={v4()}></TicketCardSkeleton>
          ))}
        </div>
      )}

      {/* Hiển thị danh sách phim từ dữ liệu tĩnh */}
      <div className="grid grid-cols-4 gap-10">
        {!loading &&
          filterTicket.length > 0 &&
          filterTicket.map((item) => (
            <TickedCard key={item.id} item={item}></TickedCard>
          ))}
      </div>

      {/* Phân trang */}
      <div className="mt-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </div>
  );
};

export default CardPage;
