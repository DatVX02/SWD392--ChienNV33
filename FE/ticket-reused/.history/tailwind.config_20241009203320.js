/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Điều chỉnh theo đường dẫn tệp dự án của bạn
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["YourCustomFont", "sans-serif"],
      },
      colors: {
        primary: "#2DC275",
        secondary: "#0B6477",
      },
    },
  },
  plugins: [],
};
