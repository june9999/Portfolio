/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        dark: "#112D4E",
        light: "#DBE2EF",
        priwhite: "#F9F7F7",
        primary: "#3F72AF", // 240,86,199
        primaryDark: "#213555", // 80,230,217
      },
      backgroundImage: {
        round:
          "repeating-radial-gradient(#3F72AF 3px, #DBE2EF 5px, #DBE2EF  150px);",
      },
    },
  },
  plugins: [],
};
