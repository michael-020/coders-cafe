import type { Config } from "tailwindcss";

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
      backgroundImage: {
        'hero-pattern': "url('/hero-bg.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
    screens: {
      "xs": "425px",
      "xss": "375px",
      "sm":	"640px",	
      "md":	"768px",	
      "lg":	"1024px",
      "xl":	"1280px",
      "2xl":	"1536px"
    }
  },
  plugins: [],
} satisfies Config;
