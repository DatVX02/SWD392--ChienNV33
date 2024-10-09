import { useState, useEffect } from "react";
import TickedCard, { TicketCardSkeleton } from "./TickedCard"; // Import both components

const TicketDetailPage = () => {
  const [ticketData, setTicketData] = useState(null); // State to hold ticket data
  const [loading, setLoading] = useState(true); // State for loading

  // Simulate fetching data (you can replace this with your actual API call)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const fetchedData = {
        poster_path: "/poster.jpg",
        title: "Concert of Regret 2024",
        vote_average: 8.5,
        release_date: "2024-10-12",
        id: 1,
      };
      setTicketData(fetchedData); // Update with fetched data
      setLoading(false); // Set loading to false
    }, 2000); // Simulate 2 seconds loading
  }, []);

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h1 className="mb-8 text-3xl font-bold text-center">Ticket Detail</h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Conditional rendering based on the loading state */}
        {loading ? (
          // Render the skeleton component while loading
          <TicketCardSkeleton />
        ) : (
          // Render the actual TicketCard component once data is available
          <TickedCard item={ticketData} />
        )}
      </div>
    </div>
  );
};

export default TicketDetailPage;
