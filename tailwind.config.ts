import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Parkinsans", "sans-serif"]
    },
    extend: {
      colors: {
        primaryBG: '#000814',
        secondaryBG: '#001D3D',
        blue: '#001D3D',
        darkYellow: '#001D3D',
        lightYellow: '#FFD60A',
        lightBlue: '#7BC0FF'
      }
    }
  },
  plugins: [],
} satisfies Config;
