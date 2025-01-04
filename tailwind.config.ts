import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-archivo)"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
        },
      },
      colors: {
        "dark-blue-mix": {
          100: "color-mix(in srgb, theme('colors.blue.800') 60%, theme('colors.slate.800') 40%)",
          200: "color-mix(in srgb, theme('colors.blue.800') 70%, theme('colors.slate.700') 30%)",
          300: "color-mix(in srgb, theme('colors.blue.700') 70%, theme('colors.gray.700') 30%)",
          400: "color-mix(in srgb, theme('colors.blue.700') 60%, theme('colors.gray.600') 40%)",
          500: "color-mix(in srgb, theme('colors.blue.600') 60%, theme('colors.indigo.700') 40%)",
          600: "color-mix(in srgb, theme('colors.blue.600') 70%, theme('colors.indigo.800') 30%)",
          700: "color-mix(in srgb, theme('colors.blue.700') 80%, theme('colors.black') 20%)",
          800: "color-mix(in srgb, theme('colors.blue.800') 90%, theme('colors.black') 10%)",
          900: "color-mix(in srgb, theme('colors.blue.900') 95%, theme('colors.black') 5%)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
