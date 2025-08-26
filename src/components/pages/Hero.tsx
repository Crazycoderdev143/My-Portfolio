// "use client";

// import {SparklesCore} from "@/components/Animations/Sparkles";
// import {motion} from "framer-motion";
// import {Typewriter} from "react-simple-typewriter";
// import {ChevronDown} from "lucide-react";
// import Tilt from "react-parallax-tilt";

// export default function Hero() {
//   return (
//     <>
//       <section
//         id="home"
//         className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-cyan-950 via-black to-cyan-950 dark:from-neutral-900 dark:to-black"
//       >
//         {/* Sparkles Background */}
//         <SparklesCore
//           className="absolute inset-0 z-0"
//           particleDensity={120}
//           minSize={2}
//           maxSize={4}
//           enableClick={false}
//           glow
//           flicker
//           speedMultiplier={0.4}
//         />

//         {/* Hero Foreground */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={{hidden: {}, visible: {}}}
//           className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
//         >
//           {/* Name */}
//           <Tilt
//             tiltMaxAngleX={20}
//             tiltMaxAngleY={20}
//             glareEnable
//             glareMaxOpacity={0.3}
//             scale={1.05}
//             transitionSpeed={1500}
//             className="w-full"
//           >
//             <motion.h1
//               className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-gray-400 bg-clip-text text-transparent animate-gradient leading-tight drop-shadow-xl"
//               initial={{opacity: 0, y: 40}}
//               animate={{opacity: 1, y: 0}}
//               transition={{delay: 0.3, duration: 0.5, ease: "easeOut"}}
//             >
//               <div className="text-sm sm:text-2xl md:text-3xl lg:text-4xl">
//                 Hey, It's Me
//               </div>
//               Dileep Nishad
//             </motion.h1>
//           </Tilt>

//           {/* Typewriter Title */}
//           <motion.h3
//             className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient leading-tight drop-shadow-xl mt-2"
//             initial={{opacity: 0, y: 30}}
//             animate={{opacity: 1, y: 0}}
//             transition={{delay: 0.8, duration: 0.5, ease: "easeOut"}}
//           >
//             <span>and I'm a </span>
//             <span>
//               <Typewriter
//                 words={[
//                   "Full Stack web and app Developer",
//                   "MERN & MEAN Stack Specialist",
//                   "Creative Photographer",
//                   "Youtube Creator",
//                   "Freelance Tech Wizard",
//                 ]}
//                 loop
//                 cursor
//                 cursorStyle={<span className="text-cyan-400">_</span>}
//                 typeSpeed={70}
//                 deleteSpeed={50}
//                 delaySpeed={2000}
//               />
//             </span>
//           </motion.h3>

//           {/* Paragraph */}
//           <motion.p
//             initial={{opacity: 0, y: 30}}
//             animate={{opacity: 1, y: 0}}
//             transition={{delay: 1.4, duration: 0.5, ease: "easeOut"}}
//             className="mt-6 text-cyan-100 dark:text-cyan-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
//           >
//             Passionate full-stack developer crafting responsive, scalable,
//             interactive, modern web & mobile apps with one year experience.
//           </motion.p>

//           {/* CTA Button */}
//           <motion.button
//             whileHover={{scale: 1.05}}
//             whileTap={{scale: 0.95}}
//             initial={{opacity: 0, y: 30}}
//             animate={{opacity: 1, y: 0}}
//             transition={{delay: 1.9, duration: 0.5, ease: "easeOut"}}
//             className="mt-8 px-6 py-3 bg-cyan-500 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-cyan-600 dark:bg-cyan-400 dark:hover:bg-cyan-500 transition duration-300"
//           >
//             🚀 Let’s Build Together
//           </motion.button>

//           {/* Scroll Down Icon */}

//           <motion.div
//             initial={{y: -1000, opacity: 0}}
//             animate={{y: 0, opacity: 1}}
//             transition={{delay: 2.4, duration: 0.8, ease: "easeOut"}}
//             className="absolute bottom-6 cursor-pointer"
//           >
//             <motion.div
//               animate={{y: [0, -10, 0]}}
//               transition={{
//                 repeat: Infinity,
//                 duration: 1.5,
//                 ease: "easeInOut",
//                 delay: 3.2, // Wait until after initial drop finishes
//               }}
//               className="text-cyan-300 dark:text-cyan-500"
//               aria-label="Scroll down"
//             >
//               <ChevronDown size={32} />
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </section>
//     </>
//   );
// }

"use client";

import {SparklesCore} from "@/components/Animations/Sparkles";
import {motion} from "framer-motion";
import {Typewriter} from "react-simple-typewriter";
import {ChevronDown} from "lucide-react";
import Tilt from "react-parallax-tilt";
import {useBgTheme} from "@/lib/context/BgThemeContext";
import {useThemeContext} from "@/lib/context/ThemeContext";
import {useTextTheme} from "@/lib/context/TextThemeContext";
import {useFontTheme} from "@/lib/context/FontThemeContext";

export default function Hero() {
  const {theme} = useThemeContext();
  const {currentBgClass} = useBgTheme();
  const {currentTextClass} = useTextTheme();
  const {currentFontClass} = useFontTheme();

  return (
    <section
      id="home"
      className={`relative min-h-screen w-full overflow-hidden flex items-center justify-center transition-colors duration-[2000ms] ease-in-out ${currentBgClass} ${currentFontClass}`}
    >
      {/* ✨ Sparkles Background */}
      {/* <SparklesCore
        className="absolute inset-0 z-0"
        particleDensity={120}
        minSize={2}
        maxSize={4}
        enableClick={false}
        glow
        flicker
        speedMultiplier={0.4}
      /> */}
      <SparklesCore
        particleDensity={120}
        minSize={2}
        maxSize={4}
        speedMultiplier={0.4}
        enableClick={false}
        glow={theme === "dark"}
        flicker={theme === "dark"}
        shapeSet={
          theme === "dark"
            ? ["star", "circle", "triangle", "diamond"]
            : ["star", "circle"]
        }
      />

      {/* 💫 Foreground Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{hidden: {}, visible: {}}}
        className={`relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 w-full max-w-7xl py-20 transition-colors duration-2000 ease-in-out  ${currentTextClass}`}
      >
        {/* 👋 Intro + Name */}
        <Tilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          glareEnable
          glareMaxOpacity={0.3}
          scale={1.05}
          transitionSpeed={1500}
          className="w-full"
        >
          <motion.h1
            initial={{opacity: 0, y: 40}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.3, duration: 0.5, ease: "easeOut"}}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight drop-shadow-xl  transition-colors duration-2000 ease-in-out  ${currentTextClass}`}
          >
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl mb-1">
              Hey, It's Me
            </div>
            Dileep Nishad
          </motion.h1>
        </Tilt>

        {/* 💻 Typewriter Title */}
        <motion.h3
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.8, duration: 0.5, ease: "easeOut"}}
          className="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient drop-shadow-xl"
        >
          <span>and I'm a </span>
          <Typewriter
            words={[
              "Full Stack Web & App Developer",
              "MERN & MEAN Stack Specialist",
              "Creative Photographer",
              "YouTube Creator",
              "Freelance Tech Wizard",
            ]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.h3>

        {/* 📝 Description */}
        <motion.p
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 1.4, duration: 0.5, ease: "easeOut"}}
          className={`mt-6 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed transition-colors ${
            theme === "dark" ? "text-cyan-200" : "text-gray-800"
          }`}
        >
          Passionate full-stack developer crafting responsive, scalable, modern
          web & mobile apps with one year experience.
        </motion.p>

        {/* 🚀 Call to Action Button */}
        <motion.button
          whileHover={{scale: 1.05}}
          whileTap={{scale: 0.95}}
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 1.9, duration: 0.5, ease: "easeOut"}}
          className={`mt-8 px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 text-sm sm:text-base md:text-lg ${
            theme === "dark"
              ? "bg-cyan-400 text-black hover:bg-cyan-500"
              : "bg-cyan-500 text-white hover:bg-cyan-600"
          }`}
        >
          🚀 Let’s Build Together
        </motion.button>

        {/* ⬇️ Scroll Down Icon */}
        <motion.div
          initial={{y: -1000, opacity: 0}}
          animate={{y: 90, opacity: 1}}
          transition={{delay: 2.4, duration: 0.8, ease: "easeOut"}}
          className="absolute bottom-6 cursor-pointer"
        >
          <motion.div
            animate={{y: [0, -10, 0]}}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
              delay: 3.2,
            }}
            className="text-cyan-400 dark:text-cyan-500"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// "use client";

// import {useThemeContext} from "@/lib/context/ThemeContext";
// import {useBgTheme} from "@/lib/context/BgThemeContext";
// import {useTextTheme} from "@/lib/context/TextThemeContext";

// export default function HeroSection() {
//   const {theme} = useThemeContext();
//   const {currentBgClass} = useBgTheme();
//   const {currentTextClass} = useTextTheme();

//   return (
//     <section
//       id="home"
//       className={`relative min-h-screen w-full overflow-hidden flex items-center justify-center transition-colors duration-2000 ease-in-out
//  ${currentBgClass} ${currentTextClass}`}
//     >
//       {/* ✅ This div will apply text gradient globally inside the section */}
//       <div
//         className={`text-center p-6 text-4xl font-bold transition-colors duration-2000 ease-in-out
//                 ${currentTextClass}`}
//       >
//         <h1 className="text-5xl md:text-6xl font-bold text-inherit">
//           Hello, I'm Dileep
//         </h1>
//         <p className="mt-4 text-lg text-inherit">
//           A full-stack developer building sleek, animated, and interactive UIs.
//         </p>
//       </div>
//     </section>
//   );
// }
