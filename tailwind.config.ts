// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: "class", // Enable class-based dark mode
//   content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
//   theme: {
//     extend: {
//       transitionProperty: {
//         theme: "background-color, color, border-color, fill, stroke",
//       },
//       animation: {
//         gradient: "gradientBG 8s ease infinite",
//       },
//       keyframes: {
//         gradientBG: {
//           "0%, 100%": {backgroundPosition: "0% 50%"},
//           "50%": {backgroundPosition: "100% 50%"},
//         },
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ✅ Correct for dark mode support
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"], // ✅ Covers most use cases
  theme: {
    extend: {
      transitionProperty: {
        theme: "background-color, color, border-color, fill, stroke", // ✅ Optional
      },
      animation: {
        gradient: "gradientBG 8s ease infinite", // ✅ Custom animation name
      },
      keyframes: {
        gradientBG: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
