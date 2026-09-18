/** @type {import('tailwindcss').Config} */
export default {
  content: [
<<<<<<< HEAD:be-be/BeBe-Resellticket/tailwind.config.js
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

=======
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
        third: "#22c55e ",
      },
    },
  },
  plugins: [],
};
>>>>>>> 2150929c1a687402a3199817b39da69753a3d87b:FE/ticket-reused/tailwind.config.js
