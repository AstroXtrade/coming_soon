import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4C37F4",
        primary_darker: "#1B1355",
        alt_primary: "#249CF3",
        aux: "#F0A9F9",
        tc: {
          text_dark: "#393939",
          text_gray: "#AEAEAE",
          heading_gray: "#404040",
        },
        pc: {
          light: "#FFFFFF",
          almost_white: "#F8FAFC",
          light_gray: "#FAFAFA",
          dark: "#060606",
          light_dark: "#2B2D3A",
        },
        status: {
          success: {
            "400": "#17E4A1",
          },
          warning: {
            "400": "#FDC360",
          },
        },
      },
      fontFamily: {
        general: ["General Sans", "sans-serif"],
      },
      container: {
        // center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
export default config;
