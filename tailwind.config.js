/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fce7f3",
        foreground: "#500724",
        card: "#f9a8d4",
        primary: "#ec4899",
        "primary-hover": "#db2777",
        "primary-foreground": "#ffffff",
        secondary: "#be185d",
        "secondary-hover": "#9d174d",
        "secondary-foreground": "#ffffff",
        muted: "#f472b6",
        "muted-hover": "#ec4899",
        "muted-foreground": "#500724",
        border: "#fbcfe8",
        highlight: "#db2777",
        surface: "#fce7f3",
      },
      borderRadius: {
        DEFAULT: "0.75rem",
      },
    },
  },
  plugins: [],
}
