import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '15px',
          sm: '20px',
          md: '25px',
          lg: '30px',
          xl: '40px',
        },
      },
      colors: {
        white: "#fefefe",
        orange: "#EA731A",
        blue: "#2E54C3",
        gray: {
          DEFAULT: "#F0F0F0",
          colored: "#2D2E2F",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",

      },
      fontFamily: {
        primary: "var(--font-roboto)",
      },

    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
