import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A1828", // Deep Navy
          dark: "#050C14",
        },
        gold: {
          DEFAULT: "#C9A961", // Champagne Gold
          light: "#E5D4A5",
        },
        warm: {
          gray: "#F5F5F0",
        },
        charcoal: "#2C3E50",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
