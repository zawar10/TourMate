export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryDark: "#0F2E2E",
        primaryGreen: "#1B4D3E",
        darkTeal: "#2E6B5F",
        softGray: "#C6D3D1",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        wide15: "0.25em",
        wide50: "0.35em",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
