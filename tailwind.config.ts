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
        // CrossFit Leiden brand colors
        'cinnabar': '#EF4C37',      // Primary - warm red/orange
        'verdigris': '#0CBABA',     // Secondary - turquoise
        'jonquil': '#F7CB15',       // Tertiary - yellow
        'chinese-violet': '#7B6D8D', // Tertiary - purple
        'organic-bg': '#fdfbf7',    // Organic - off-white
        'organic-text': '#2c2825',  // Organic - soft charcoal
        'organic-secondary': '#d4b483', // Organic - beige accent
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      fontFamily: {
        'heading': ['"Young Serif"', 'serif'],
        'body': ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
