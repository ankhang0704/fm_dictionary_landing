import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        canvas: "#090909",
        "surface-1": "#141414",
        "surface-2": "#1c1c1c",
        hairline: "#262626",
        "hairline-soft": "#1a1a1a",
        ink: "#ffffff",
        "ink-muted": "#999999",
        "accent-blue": "#0099ff",
        "semantic-success": "#22c55e",
        spotlight: {
          magenta: "#d44df0",
          violet: "#6a4cf5",
          orange: "#ff7a3d",
          coral: "#ff5577",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tighter: "-0.05em",
        tightest: "-0.07em",
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
