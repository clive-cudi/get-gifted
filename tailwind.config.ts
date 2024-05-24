import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-deep-blue": "#4062cc",
      },
      fontFamily: {
        default: ["Hanken Grotesk", "sans-serif"],
      },
      width: {
        "98": "480px",
      },
      height: {
        "75": "310px",
      },
      maxWidth: {
        "98": "480px",
      },
      borderRadius: {
        large: "3rem",
      },
    },
  },
  plugins: [],
};
export default config;
