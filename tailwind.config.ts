import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // MEMAKSA FONT STANDAR JADI POPPINS
      fontFamily: {
        sans: ['var(--font-poppins)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        cerah: {
          biru: '#0EA5E9',   
          kuning: '#FACC15', 
          hijau: '#22C55E',  
          pink: '#EC4899',   
          oranye: '#FB923C', 
        }
      },
    },
  },
  plugins: [],
};
export default config;