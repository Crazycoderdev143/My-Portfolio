"use client";

import {motion} from "framer-motion";
import {Typewriter} from "react-simple-typewriter";
import {ChevronDown} from "lucide-react";
import Tilt from "react-parallax-tilt";
import {useBgTheme} from "@/lib/context/BgThemeContext";
import {useThemeContext} from "@/lib/context/ThemeContext";
import {useTextTheme} from "@/lib/context/TextThemeContext";
import {useFontTheme} from "@/lib/context/FontThemeContext";
import {useAnimationTheme} from "@/lib/context/AnimationThemeContext";
import {Link} from "react-scroll";
import SocialIcon from "@/components/ui/SocialMediaLinks";

export default function Hero() {
  const {theme} = useThemeContext();
  const {currentBgClass} = useBgTheme();
  const {currentTextClass} = useTextTheme();
  const {currentFontClass} = useFontTheme();
  const {CurrentAnimation} = useAnimationTheme();

  return (
    <section
      id="home"
      className={`relative min-h-screen w-full overflow-hidden flex items-center justify-center transition-colors duration-[2000ms] ease-in-out ${currentBgClass} ${currentFontClass}`}
    >
      <CurrentAnimation />
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
              Hey, It&apos;s Me
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
          <span>and I&apos;m a </span>
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
            cursorStyle={
              <span className="text-cyan-400 dark:text-cyan-500">|</span>
            }
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

        {/* Social Links  */}
        <SocialIcon />

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
          <Link
            to="contact"
            smooth={true}
            className="cursor-pointer underline-offset-4"
          >
            🚀 Let’s Build Together
          </Link>
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
