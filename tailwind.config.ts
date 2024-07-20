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
        'white': '#FFEBEE',
        'black': '#231F20',
        'pink': '#F2D2D6',
        'darkred': '#800D1F',
        'red': '#A30D1F',
        'lightred': '#BB0D1F',
        'focusgray': '#feebee50',
        'hovergray': '#feebee1c',
        'lightgray': '#d9d9d9b6',
        'darkgray': '#262626',
        'linkhover': '#ffebeec4',
      },
    },
    
  },
  
  plugins: [],
};
export default config;
