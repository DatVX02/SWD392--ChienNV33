import { useState } from "react";
import PropTypes from "prop-types"; // Ensure PropTypes is imported

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  // Function to handle search button click
  const handleSearch = () => {
    if (typeof onSearch === "function") {
      onSearch({ keyword, location, category });
    }
  };

  return (
    <div className="flex items-center justify-center p-4 mb-10 bg-gray-800 rounded-lg shadow-lg">
      {/* Keyword Search Input */}
      <input
        type="text"
        placeholder="Tìm kiếm vé"
        className="w-full p-3 mr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      {/* Location Dropdown */}
      <select
        className="p-3 mr-4 bg-gray-100 border border-gray-300 rounded-lg text-secondary focus:outline-none focus:ring-2 focus:ring-green-400"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="">Địa điểm</option>
        <option value="HCM">Hồ Chí Minh</option>
        <option value="HN">Hà Nội</option>
        <option value="DN">Đà Nẵng</option>
      </select>

      {/* Category Dropdown */}
      <select
        className="p-3 mr-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Thể loại</option>
        <option value="Music">Âm Nhạc</option>
        <option value="Comedy">Hài Kịch</option>
        <option value="Drama">Kịch</option>
      </select>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="px-6 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func, // Ensure onSearch is defined as a function prop
};

export default SearchBar;
