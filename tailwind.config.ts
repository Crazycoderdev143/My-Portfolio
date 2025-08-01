// // /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //   darkMode: "class", // Enable class-based dark mode
// //   content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
// //   theme: {
// //     extend: {
// //       transitionProperty: {
// //         theme: "background-color, color, border-color, fill, stroke",
// //       },
// //       animation: {
// //         gradient: "gradientBG 8s ease infinite",
// //       },
// //       keyframes: {
// //         gradientBG: {
// //           "0%, 100%": {backgroundPosition: "0% 50%"},
// //           "50%": {backgroundPosition: "100% 50%"},
// //         },
// //       },
// //     },
// //   },
// //   plugins: [],
// // };


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: "class", // ✅ Correct for dark mode support
//   content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"], // ✅ Covers most use cases
//   theme: {
//     extend: {
//       transitionProperty: {
//         theme: "background-color, color, border-color, fill, stroke", // ✅ Optional
//       },
//       animation: {
//         gradient: "gradientBG 8s ease infinite", // ✅ Custom animation name
//       },
//       keyframes: {
//         gradientBG: {
//           "0%, 100%": { backgroundPosition: "0% 50%" },
//           "50%": { backgroundPosition: "100% 50%" },
//         },
//       },
//     },
//   },
//   plugins: [],
// };


import type {Config} from "tailwindcss";

const config: Config = {
  darkMode: "class", // ✅ Enables dark mode via class strategy
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // ✅ Includes original glob if needed
  ],
  theme: {
    extend: {
      transitionProperty: {
        theme: "background-color, color, border-color, fill, stroke",
      },
      keyframes: {
        fadeIn: {
          "0%": {opacity: 0},
          "100%": {opacity: 1},
        },
        fadeFont: {
          "0%": {opacity: 0},
          "100%": {opacity: 1},
        },
        gradientBG: {
          "0%, 100%": {backgroundPosition: "0% 50%"},
          "50%": {backgroundPosition: "100% 50%"},
        },
        "slide-up": {
          "0%": {transform: "translateY(50px)", opacity: "0"},
          "100%": {transform: "translateY(0)", opacity: "1"},
        },
        "slide-down": {
          "0%": {transform: "translateY(-50px)", opacity: "0"},
          "100%": {transform: "translateY(0)", opacity: "1"},
        },
        "slide-left": {
          "0%": {transform: "translateX(50px)", opacity: "0"},
          "100%": {transform: "translateX(0)", opacity: "1"},
        },
        "slide-right": {
          "0%": {transform: "translateX(-50px)", opacity: "0"},
          "100%": {transform: "translateX(0)", opacity: "1"},
        },
        "icon-slide-up": {
          "0%": {transform: "translateY(10px)", opacity: "0"},
          "100%": {transform: "translateY(0)", opacity: "1"},
        },
        "icon-slide-down": {
          "0%": {transform: "translateY(-10px)", opacity: "0"},
          "100%": {transform: "translateY(0)", opacity: "1"},
        },
        "icon-slide-left": {
          "0%": {transform: "translateX(10px)", opacity: "0"},
          "100%": {transform: "translateX(0)", opacity: "1"},
        },
        "icon-slide-right": {
          "0%": {transform: "translateX(-10px)", opacity: "0"},
          "100%": {transform: "translateX(0)", opacity: "1"},
        },
      },
      animation: {
        gradient: "gradientBG 8s ease infinite",
        "fade-font": "fadeFont 0.4s ease-in-out",
        "fade-in": "fadeIn 0.7s ease-in forwards",
        "slide-up": "slide-up 1s ease forwards",
        "slide-down": "slide-down 1s ease forwards",
        "slide-left": "slide-left 1s ease forwards",
        "slide-right": "slide-right 1s ease forwards",
        "icon-slide-up": "icon-slide-up 1s ease forwards",
        "icon-slide-down": "icon-slide-down 1s ease forwards",
        "icon-slide-left": "icon-slide-left 1s ease forwards",
        "icon-slide-right": "icon-slide-right 1s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
