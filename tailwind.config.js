export default {
  darkMode: "class", // ✅ Enables toggling dark mode via <html class="dark">
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ], // ✅ Looks for Tailwind classes in all TSX/TS files
theme: {
  extend: {
    animation: {
      marquee: "marquee 20s linear infinite",
      blink: "blink 1.5s infinite",
      fadeIn: "fadeIn 0.8s ease-in-out",
      bounce: "bounce 2s infinite",
      pulse: "pulse 2s infinite",
      pause: "pause 1s infinite", // dummy for hover
    },
    keyframes: {
      marquee: {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(-100%)" },
      },
      blink: {
        "0%,100%": { opacity: "1" },
        "50%": { opacity: "0" },
      },
      fadeIn: {
        "0%": { opacity: "0", transform: "translateY(10px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
    },
  },
},
darkMode: "class",
 // ✅ You can add custom colors, spacing, etc. here
  plugins: [],
};
