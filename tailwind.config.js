/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        xs: "0.75rem" /* 12px */,
        sm: "0.8rem" /* 13px */,
        base: "1rem" /* 16px */,
        xl: "1.25rem" /* 20px */,
        "2xl": "1.5rem" /* 24px */,
        "3xl": "1.875rem" /* 30px */,
        "4xl": "2.25rem" /* 36px */,
        "5xl": "3rem" /* 48px */,
      },
    },
  },

  plugins: [],
};
