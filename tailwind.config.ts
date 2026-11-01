import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0d3b66",
          navy: "#05192d",
          orange: "#f95738",
          amber: "#ee964b",
          light: "#f4f7f6",
          dark: "#101820",
        },
      },
    },
  },
  plugins: [],
};
export default config;
