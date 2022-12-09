/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#12264b",
        secondary: "#656380",
      },
    },
    screens: {
      sm: { max: "550px" }, // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
    },
  },
  plugins: [],
};
// screens: {
//     '2xl': {'max': '1535px'},
//     // => @media (max-width: 1535px) { ... }

//     'xl': {'max': '1279px'},
//     // => @media (max-width: 1279px) { ... }

//     'lg': {'max': '1023px'},
//     // => @media (max-width: 1023px) { ... }

//     'md': {'max': '767px'},
//     // => @media (max-width: 767px) { ... }

//     'sm': {'max': '639px'},
//     // => @media (max-width: 639px) { ... }
//   }
