import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito)"],
        oswald: ["var(--font-oswald)"],
      },
      gradientColorStops: {
        sky800: "#075985",
        sky300: "#7dd3fc",
      },
    },
  },
  plugins: [],
};
export default config;
