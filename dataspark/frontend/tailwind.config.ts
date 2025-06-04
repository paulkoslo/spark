import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#6366f1",
        },
        accent: "#00E2FF",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".bg-radial": {
          "background-image": "radial-gradient(var(--tw-gradient-stops))",
        },
        ".bg-conic": {
          "background-image": "conic-gradient(var(--tw-gradient-stops))",
        },
      });
    }),
  ],
} satisfies Config;
