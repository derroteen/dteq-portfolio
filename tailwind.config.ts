import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#16345E",  // headings, body text (from the DTK360 wordmark)
        blue: "#2F6A9A",  // links, accents (from the swoosh)
        teal: "#257483",  // "Delivered/Live" stamps, highlights (from the 360 arrow)
        amber: "#A5641A",  // "pending" stamps only
        mist: "#EEF1F4",  // page background (the silver of the logo backdrop)
        line: "#D3DCE6",  // ruled lines and borders
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
