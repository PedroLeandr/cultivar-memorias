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
        green: {
          50: "#f0faf0",
          100: "#dcf5dc",
          200: "#b8eab8",
          300: "#86d886",
          400: "#4CAF50",
          500: "#3d9140",
          600: "#2e7531",
          700: "#245c27",
          800: "#1c4820",
          900: "#153618",
        },
        beige: {
          50: "#fdfaf5",
          100: "#f8f2e6",
          200: "#f0e6ce",
          300: "#e4d4b0",
          400: "#d4bc8c",
          500: "#c4a46e",
        },
        earth: {
          100: "#faf7f2",
          200: "#f2ece0",
          300: "#e8ddd0",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.06)",
        medium: "0 8px 40px rgba(0,0,0,0.10)",
        green: "0 8px 32px rgba(76,175,80,0.20)",
        "green-lg": "0 16px 48px rgba(76,175,80,0.25)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        float: "float 6s ease-in-out infinite",
        "count-up": "countUp 2s ease forwards",
        "leaf-sway": "leafSway 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        leafSway: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
