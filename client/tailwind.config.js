/** @type {import('tailwindcss').Config} */
const px0_1000 = { ...Array.from(Array(1001)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: px0_100,
      width: px0_1000,
      height: px0_1000,
      padding: px0_100,
      margin: px0_100,
      gap: px0_100,
      spacing: px0_1000,
    },
  },
  plugins: [],
};
