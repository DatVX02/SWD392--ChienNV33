import React, { useEffect, useState } from "react";

const TicketList = ({ type, criteria }) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Simulate fetching tickets (replace with actual API call)
    const allTickets = [
      { id: 1, name: "Event 1", location: "HCM", category: "Music" },
      { id: 2, name: "Event 2", location: "HN", category: "Comedy" },
      { id: 3, name: "Event 3", location: "DN", category: "Drama" },
      // Add more tickets as needed
    ];

    // Filter tickets based on criteria
    const filteredTickets = allTickets.filter((ticket) => {
      const matchKeyword = criteria.keyword
        ? ticket.name.toLowerCase().includes(criteria.keyword.toLowerCase())
        : true;
      const matchLocation = criteria.location
        ? ticket.location === criteria.location
        : true;
      const matchCategory = criteria.category
        ? ticket.category === criteria.category
        : true;

      return matchKeyword && matchLocation && matchCategory;
    });

    setTickets(filteredTickets);
  }, [criteria]);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {tickets.map((ticket) => (
        <div key={ticket.id} className="p-4 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="mb-2 text-xl font-bold text-white">{ticket.name}</h3>
          <p className="text-gray-400">Location: {ticket.location}</p>
          <p className="text-gray-400">Category: {ticket.category}</p>
        </div>
      ))}
    </div>
  );
};

export default TicketList;
