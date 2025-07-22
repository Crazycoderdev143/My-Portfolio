"use client";

import {motion} from "framer-motion";
import Tilt from "react-parallax-tilt";
import { IconParticles } from "../Animations/IconParticles";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-br from-white to-gray-100 dark:from-neutral-900 dark:to-black overflow-hidden"
    >
      {/* <IconParticles /> */}
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 0.8}}
        variants={{
          hidden: {opacity: 0, y: 60},
          visible: {opacity: 1, y: 0},
        }}
      >
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-6 animate-gradient">
          About Me
        </h2>

        {/* Tilted Glass Card */}
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          glareEnable
          glareMaxOpacity={0.2}
          scale={1.02}
          transitionSpeed={1500}
        >
          <motion.div
            className="bg-white/20 dark:bg-white/5 p-6 sm:p-8 rounded-xl shadow-xl backdrop-blur-sm border border-white/20 dark:border-white/10"
            initial={{opacity: 0, scale: 0.95}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{delay: 0.5, duration: 0.6}}
          >
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              I specialize in building full-stack web and mobile applications
              that are responsive, performant, and visually appealing. With a
              strong foundation in both front-end and back-end technologies, I
              craft seamless digital experiences from database to browser. I
              focus on writing clean, modular, and maintainable code while
              following modern development standards and best practices. My
              approach combines thoughtful UI/UX design, scalable architecture,
              and efficient APIs to solve real-world problems through
              technology. Whether it's building from scratch or optimizing
              existing systems, I’m driven by a passion for quality, innovation,
              and continuous improvement.
            </p>
          </motion.div>
        </Tilt>
      </motion.div>
    </section>
  );
};

export default About;
