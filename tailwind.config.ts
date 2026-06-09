import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bordo: {
          DEFAULT: "#7B102B",
          deep: "#5E0C20",
          soft: "#8E1A37",
        },
        offwhite: "#F4EFE7",
        cream: "#FBF8F3",
        grafite: "#2C2527",
        rose: "#D8C9C3",
        areia: "#B89E95",
      },
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
      },
      boxShadow: {
        soft: "0 18px 50px -20px rgba(44, 37, 39, 0.18)",
        card: "0 10px 40px -18px rgba(44, 37, 39, 0.22)",
        glow: "0 30px 80px -30px rgba(123, 16, 43, 0.45)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "sparkle-pulse": {
          "0%, 100%": { opacity: "0.4", transform: "scale(0.9)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "sparkle-pulse": "sparkle-pulse 4s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
