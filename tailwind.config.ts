import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Theme surfaces and semantic tokens
        background: "#0F0F10",
        card: "#18181B",
        border: "#27272A",
        "text-main": "#FAFAFA",
        "text-muted": "#A1A1AA",

        // Zinc palette alignment
        zinc: {
          50: "#FAFAFA",
          400: "#A1A1AA",
          800: "#27272A",
          900: "#18181B",
          950: "#0F0F10",
        },

        // Brand Accents
        brand: {
          chili: "#D92B27",
          orange: "#EA580C",
          amber: "#F59E0B",
          whatsapp: "#25D366",
        },
        "chili-red": "#D92B27",
        "spice-orange": "#EA580C",
        "amber-glow": "#F59E0B",
        "wa-green": "#25D366",
        whatsapp: "#25D366",

        // Tailwind utility overrides
        red: {
          600: "#D92B27",
        },
        orange: {
          600: "#EA580C",
        },
        amber: {
          500: "#F59E0B",
        },
      },
      boxShadow: {
        "glow-red": "0 0 20px rgba(217,43,39,0.3)",
        "glow-orange": "0 0 20px rgba(234,88,12,0.3)",
      },
      borderRadius: {
        "2xl": "16px",
      },
    },
  },
  plugins: [],
};

export default config;
