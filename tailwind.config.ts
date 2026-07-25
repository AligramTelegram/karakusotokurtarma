import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0f1620",
          light: "#1a2332",
          soft: "#243244",
        },
        brand: {
          DEFAULT: "#f2851f",
          dark: "#d96e0c",
          light: "#ff9a3d",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1.25rem",
        screens: {
          "2xl": "1280px",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(242,133,31,0.5)" },
          "70%": { boxShadow: "0 0 0 14px rgba(242,133,31,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(242,133,31,0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "pulse-ring": "pulseRing 2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
