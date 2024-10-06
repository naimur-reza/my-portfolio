import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030a9",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        deep: "#08060f",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      fontFamily: {
        Michroma: ["Michroma", "sans-serif"],
        Alkatra: ["Alkatra", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        dharmagothic: ["DharmaGothic", "sans-serif"],
        algem: ["Algem", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
