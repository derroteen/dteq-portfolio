import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1524",      // page background
        surface: "#101F33",  // card background
        paper: "#E7ECF2",    // body text
        blue: "#4F8FC0",     // links, accents
        teal: "#3FB6C4",     // "Delivered/Live" stamps, highlights
        amber: "#C98A3D",    // "pending" stamps only
        line: "rgba(255,255,255,0.08)",  // ruled lines and borders
      },
      fontFamily: {
        display: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-plex-sans)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
