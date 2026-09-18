import { useState } from "react";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Banner from "../banner/Banner";
import SearchBar from "../banner/SearchBar";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Form submitted successfully!");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };
  const [, setSearchCriteria] = useState({});
  const handleSearch = (criteria) => setSearchCriteria(criteria);

  return (
    <>
      <Banner />
      <div className="main-content page-container">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="px-4 py-12 text-white bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <h1
            className="mb-8 text-5xl font-bold text-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            Liên hệ
          </h1>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Contact Information Section */}
            <div>
              <h2 className="mb-4 text-2xl font-semibold">Thông tin liên hệ</h2>
              <div className="flex items-center gap-4 mb-4">
                <MdLocationOn className="text-2xl text-red-400" />
                <p>
                  Lô E2a-7, Đường D1, D. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức,
                  Hồ Chí Minh 700000, Việt Nam
                </p>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <FaPhoneAlt className="text-2xl text-pink-400" />
                <p>0972609914</p>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <MdEmail className="text-2xl text-orange-400" />
                <p>chubedan@gmail.com</p>
              </div>
            </div>

            {/* Contact Form Section */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Họ và tên"
                required
                className="w-full p-3 text-white placeholder-gray-400 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Số điện thoại"
                required
                className="w-full p-3 text-white placeholder-gray-400 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full p-3 text-white placeholder-gray-400 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="5"
                required
                className="w-full p-3 text-white placeholder-gray-400 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 text-white transition duration-300 bg-green-500 rounded-lg hover:bg-green-600"
              >
                Gửi
              </button>
            </form>
          </div>

          {/* Embedded Map */}
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4456147182956!2d106.79944677494934!3d10.852901558643219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527a4b0d1d5af%3A0xd4ff2cf1085605b7!2zTG9uZyBUaOG6pW5oIE3hu4ksIFRodeG6rW5nIHBo4buRIFRo4buNIMSQ4buRLCBIb8OgIENow60gTWluaCBXaXQ!5e0!3m2!1sen!2s!4v1635661973345!5m2!1sen!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
