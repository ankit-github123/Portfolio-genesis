/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor: {
        primary: "var(--color-home)",
        secondary: "var(--border-light)",
        tertiary: "var(--color-tertiary)",
        lightest: "var(--border-extralight)",
        lighter: "rgba(255,255,255,0.2)",
      },
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        default: "#ffffff",
        light: "rgba(255,255,255,0.7)",
        home: "var(--color-home)",
        tertiary: "#e24840",
      },
      backgroundColor: {
        primary: "#1F2233",
        secondary: "var(--secondary-bg)",
        tertiary: "#e24840",
        btn: "var(--btn-primary)",
        btn_home: "var(--btn-home)",
        btn_light: "rgba(255,255,255,0.15)",
        btn_lighter: "rgba(255,255,255,0.1)",
        btn_lightest: "rgba(255,255,255,0.05)",
      },
      fontSize: {
        8: "8px",
        9: "9px",
      },
    },
  },
  plugins: [],
};
