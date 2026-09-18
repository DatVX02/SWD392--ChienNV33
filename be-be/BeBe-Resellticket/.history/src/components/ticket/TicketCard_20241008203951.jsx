import { useNavigate } from "react-router-dom";

const navigate = useNavigationType();
const TicketCard = () => {
  return (
    <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-cart bg-slate-800">
      <img
        src="https://media.vov.vn/sites/default/files/styles/large/public/2023-09/4_47.jpg"
        alt=""
        className="w-full rounded-lg h-[250px] object-cover mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="mb-3 text-xl font-bold ">Hello</h3>
        <div className="flex items-center justify-between mb-10 text-sm opacity-50">
          <span>day/month/year</span>
          <span>Time</span>
          <span>Address</span>
        </div>
        <Button className="bg-red-300" onClick={() => navigate(`/card`)}>
          Watch Now
        </Button>
      </div>
    </div>
  );
};

export default TicketCard;
