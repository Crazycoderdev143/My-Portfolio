"use client";

import {motion} from "framer-motion";
import {
  SiInstagram,
  SiFacebook,
  SiYoutube,
  SiX,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";
import React from "react";

// 🔹 AnimatedDiv
interface AnimatedDivProps {
  children: React.ReactNode;
  direction?: "x" | "y";
  start?: number;
  end?: number;
  duration?: number;
  delay?: number;
  label?: string;
  className?: string;
}

const AnimatedDiv = ({
  children,
  direction,
  start,
  end,
  duration,
  delay,
  label,
  className = "",
}: AnimatedDivProps) => {
  const initial =
    direction === "x" ? {x: start, opacity: 0} : {y: start, opacity: 0};

  const animate =
    direction === "x" ? {x: end, opacity: 1} : {y: end, opacity: 1};

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{duration, delay, ease: "easeOut"}}
      aria-label={label}
      className={`h-10 w-10 border-2 border-green-400 rounded-full flex items-center justify-center cursor-pointer 
  hover:bg-cyan-300 hover:border-cyan-400 hover:shadow-cyan-400 hover:shadow-lg 
  transition duration-700 ease-in-out shadow-cyan-200 ${className}`}
    >
      {children}
    </motion.div>
  );
};

// 🔹 Social Props
interface SocialProps {
  icon: React.ReactNode;
  link: string;
  direction?: "x" | "y";
  start?: number;
  end?: number;
  duration?: number;
  delay?: number;
}

// 🔹 SocialIcon
const SocialIcon = ({
  icon,
  link,
  direction,
  start,
  end,
  duration,
  delay,
}: SocialProps) => {
  const initial =
    direction === "x" ? {x: start, opacity: 0} : {y: start, opacity: 0};
  const animate =
    direction === "x" ? {x: end, opacity: 1} : {y: end, opacity: 1};

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={initial}
      animate={animate}
      transition={{duration, delay, ease: "easeOut"}}
      whileHover={{scale: 1.3, rotate: 10}}
      className="h-10 w-10 border-2 border-green-400 rounded-full flex items-center justify-center cursor-pointer"
    >
      {icon}
    </motion.a>
  );
};

// 🔹 Socials Array
const socials: SocialProps[] = [
  {
    icon: <SiInstagram className="text-pink-500 hover:hidden" />,
    link: "https://instagram.com",
    direction: "y",
    start: -1000,
    end: 0,
    duration: 1.8,
    delay: 0.8,
  },
  {
    icon: <SiFacebook className="text-blue-600 hover:hidden" />,
    link: "https://facebook.com",
    direction: "x",
    start: -1000,
    end: 0,
    duration: 2,
    delay: 1,
  },
  {
    icon: <SiYoutube className="text-red-600 hover:hidden" />,
    link: "https://youtube.com",
    direction: "y",
    start: 1000,
    end: 0,
    duration: 2.2,
    delay: 1.2,
  },
  {
    icon: <SiX className="text-black dark:text-white hover:hidden" />,
    link: "https://x.com",
    direction: "x",
    start: 1000,
    end: 0,
    duration: 2.4,
    delay: 1.4,
  },
  {
    icon: <SiGithub className="text-gray-900 dark:text-white hover:hidden" />,
    link: "https://github.com",
    direction: "y",
    start: -1000,
    end: 0,
    duration: 2.4,
    delay: 2.6,
  },
  {
    icon: <SiLinkedin className="text-blue-500 hover:hidden" />,
    link: "https://linkedin.com",
    direction: "x",
    start: -1000,
    end: 0,
    duration: 2.8,
    delay: 1.8,
  },
];

// 🔹 Usage
export default function SocialIcons() {
  return (
    <motion.div className="mt-2 flex space-x-2 items-center justify-center">
      {socials.map((s, i) => (
        <AnimatedDiv
          key={i}
          direction={s.direction === "x" ? "y" : "x"}
          start={s.start === 1000 ? -1000 : 1000} // opposite direction for container
          end={s.end}
          duration={s.duration ? s.duration - 0.4 : undefined} // slightly faster for container
          delay={s.delay ? s.delay + 0.2 : undefined} // slightly later for container
          label={s.link.replace("https://", "").split(".")[0]} // auto aria-label
        >
          <SocialIcon
            icon={s.icon}
            link={s.link}
            direction={s.direction}
            start={s.start}
            end={s.end}
            duration={s.duration}
            delay={s.delay}
          />
        </AnimatedDiv>
      ))}
    </motion.div>
  );
}
