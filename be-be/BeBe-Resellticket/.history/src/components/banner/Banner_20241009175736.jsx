// src/components/Banner.jsx

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[500px] text-white"
      style={{ backgroundImage: "url(https://example.com/banner-image.jpg)" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container relative flex flex-col items-center justify-center h-full mx-auto">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Anh Trai Say Hit Concert
        </h1>
        <p className="mb-6 text-xl">Thủ Dầu Một - Bình Dương | 29.09.2024</p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-green-500 rounded-lg hover:bg-green-600">
            Get Tickets
          </button>
          <button className="px-6 py-3 bg-transparent border-2 border-white rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
