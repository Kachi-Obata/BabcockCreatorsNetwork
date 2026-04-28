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
        blue: { DEFAULT: "#003895", dark: "#002a70" },
        gold: { DEFAULT: "#AE8C07", light: "#d4aa20" },
        cream: "#F5F0E8",
        charcoal: "#1A1A1A",
        offwhite: "#FAF8F5",
        midgray: "#666666",
        lightgray: "#E8E4DE",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
      },
      letterSpacing: {
        wider: "0.15em",
        widest: "0.25em",
      },
    },
  },
  plugins: [],
};

export default config;
