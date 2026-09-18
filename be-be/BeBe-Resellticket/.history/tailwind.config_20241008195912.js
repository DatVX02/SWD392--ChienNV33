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
    },
  },
  plugins: [],
};
