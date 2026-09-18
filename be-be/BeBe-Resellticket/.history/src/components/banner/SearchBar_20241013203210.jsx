import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios"; // Import axios for API requests

const API_KEY = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [weather, setWeather] = useState(null); // Store weather data

  // Function to handle API request for weather data
  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // Handle search button click
  const handleSearch = () => {
    if (typeof onSearch === "function") {
      onSearch({ keyword, location, category });
    }
    if (location) {
      // Fetch weather data for the selected location
      const city =
        location === "HCM"
          ? "Ho Chi Minh"
          : location === "HN"
          ? "Hanoi"
          : "Da Nang";
      fetchWeather(city);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 mb-10 bg-gray-800 rounded-lg shadow-lg">
      {/* Keyword Search Input */}
      <input
        type="text"
        placeholder="Tìm kiếm vé"
        className="w-full p-3 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      {/* Location Dropdown */}
      <select
        className="p-3 mb-4 text-black bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
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
        className="p-3 mb-4 text-black bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
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
        className="px-6 py-3 mb-4 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        Search
      </button>

      {/* Display Weather Data */}
      {weather && (
        <div className="mt-4 text-white">
          <p>Weather in {weather.name}:</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};

export default SearchBar;
