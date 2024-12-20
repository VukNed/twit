import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Roboto Flex', 'sans-serif'],
      },
      fontWeight: {
        heading: 800, // For headings
        body: 500,    // For body text
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontFamily: 'Roboto Flex',
              fontWeight: '800',
              fontStretch: '150%',
            }
          }
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
