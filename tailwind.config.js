/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          DEFAULT: "var(--lime)",
          dark: "var(--lime-dark)",
          "dark-hover": "var(--lime-dark-hover)",
          50: "var(--lime-50)",
          border: "var(--lime-border)",
        },
        ink: {
          DEFAULT: "var(--ink)",
          2: "var(--ink-2)",
        },
        canvas: "var(--canvas)",
        line: {
          DEFAULT: "var(--line)",
          2: "var(--line-2)",
        },
        text: {
          1: "var(--text-1)",
          2: "var(--text-2)",
          3: "var(--text-3)",
        },
      },
      fontFamily: {
        sans: ["Instrument Sans", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        pill: "999px",
        card: "20px",
      },
    },
  },
  plugins: [],
};

