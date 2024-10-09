const TicketDetail = () => {
  return (
    <div className="min-h-screen px-6 py-10 text-white bg-gray-900">
      {/* Header Section */}
      <div className="max-w-5xl p-6 mx-auto mb-8 bg-gray-800 rounded-lg shadow-lg">
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-6">
          {/* Image */}
          <div className="flex-shrink-0 mb-4 lg:mb-0">
            <img
              src="https://via.placeholder.com/200"
              alt="Event Poster"
              className="w-48 h-48 rounded-lg"
            />
          </div>
          {/* Event Details */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold lg:text-3xl">
              [TP HCM] Bảo Tàng của Nuối Tiếc Concert 2024
            </h2>
            <p className="mt-2 text-gray-400">
              19:00 - 22:00, 12 tháng 10, 2024
            </p>
            <p className="text-gray-400">
              Trung Tâm Ca Nhạc Trống Đồng, Lê Đại Hành, Quận 11, TP. HCM
            </p>
            <p className="mt-4 text-green-400">Giá vé: 399,000 VNĐ</p>
            <button className="px-4 py-2 mt-4 bg-green-500 rounded-md hover:bg-green-600">
              Buy Ticket Now
            </button>
          </div>
        </div>
      </div>

      {/* Information Sections */}
      <div className="grid gap-6 mb-8 lg:grid-cols-2">
        {/* Left Section */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="mb-4 text-xl font-semibold">Ghi Chú:</h3>
          <p className="text-gray-400">
            - LƯU CONCERT - KÍ ỨC VÀNG (CÁC CA KHÚC HIT) - 2024...
          </p>
          <p className="mt-2 text-gray-400">
            - Phí dịch vụ có thể áp dụng tùy theo từng loại vé và địa điểm...
          </p>
        </div>
        {/* Right Section */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="mb-4 text-xl font-semibold">Quy Định:</h3>
          <p className="text-gray-400">
            - Các vé đã mua sẽ không được hoàn lại tiền hoặc đổi trả...
          </p>
          <p className="mt-2 text-gray-400">
            - Không mang theo các vật dụng cấm như vũ khí, đồ uống có cồn...
          </p>
        </div>
      </div>

      {/* Related Tickets Section */}
      <div className="max-w-5xl mx-auto">
        <h3 className="mb-6 text-2xl font-semibold">Các Loại Vé Liên Quan</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Ticket Card */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Ticket"
                className="w-full h-40 mb-4 rounded-lg"
              />
              <h4 className="mb-2 text-lg font-semibold">
                19:00 - 22:00, 12 tháng 10, 2024
              </h4>
              <p className="text-gray-400">Trung Tâm Ca Nhạc Trống Đồng...</p>
              <p className="mt-2 text-green-400">Giá vé: 399,000 VNĐ</p>
              <button className="w-full px-4 py-2 mt-4 bg-green-500 rounded-md hover:bg-green-600">
                Buy Ticket
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketDetail;
