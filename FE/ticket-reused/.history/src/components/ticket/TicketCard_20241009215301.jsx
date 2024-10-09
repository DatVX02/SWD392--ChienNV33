import React from "react";
import PropTypes from "prop-types";

const TicketCard = ({ item }) => {
  const { title, vote_average, release_date } = item;

  return (
    <div className="flex flex-col items-start p-4 mb-4 bg-gray-800 rounded-lg shadow-lg">
      <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-400">Rating: {vote_average}</p>
      <p className="text-gray-400">Release Date: {release_date}</p>
    </div>
  );
};

TicketCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
  }),
};

export default TicketCard;
