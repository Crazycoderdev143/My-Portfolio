"use client";

import Image from "next/image";
import React, {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import Tilt from "react-parallax-tilt";
import {IconParticles3} from "../Animations/IconParticles3";

const projects = [
  {
    title: "Portfolio Website",
    category: "Web",
    description:
      "A personal portfolio upgraded from HTML/CSS/JS to Next.js + Tailwind.",
    image: "/images/Portfolio Home.png",
    githubLink: "https://github.com/Crazycoderdev143/My-Portfolio",
    projectLink: "#",
  },
  {
    title: "E-commerce App",
    category: "Web",
    description:
      "E-commerce platform with React, Redux, Firebase, and Stripe integration.",
    image: "/Portfolio Home.png",
    githubLink:
      "https://github.com/Crazycoderdev143/Real-Estate-Frontend-in-Mern",
    projectLink: "#",
  },
  {
    title: "Weather App",
    category: "Mobile",
    description: "A React app fetching weather data via OpenWeatherMap API.",
    image: "/images/weather.png",
    githubLink:
      "https://github.com/Crazycoderdev143/Real-Estate-Frontend-in-Mern",
    projectLink: "#",
  },

  {
    title: "Global Care",
    category: "Web",
    description:
      "Global-Care is a hospital website. There are many doctors who provide healthcare services and you can find nearby hospitals nearby to health.",
    image: "/images/global-care.png",
    githubLink: "https://github.com/Crazycoderdev143/Global-Care",
    projectLink: "#",
  },
  {
    title: "Real Estate Backend in Mern",
    category: "Backend",
    description:
      "Real Estate Backend in Mern for Signup/login and roles and version in this.",
    image: "/images/real-estate-backend.png",
    githubLink:
      "https://github.com/Crazycoderdev143/Real-Estate-Backend-in-Mern",
    projectLink: "#",
  },
  {
    title: "Real Estate Frontend in Mern",
    category: "Web",
    description:
      "Real Estate Frontend in Mern for Signup/login and roles and version in this.",
    image: "/images/real-estate-frontend.png",
    githubLink:
      "https://github.com/Crazycoderdev143/Real-Estate-Frontend-in-Mern",
    projectLink: "#",
  },
  {
    title: "Netflix UI Clone",
    category: "Web",
    description: "Netflix UI Clone project.",
    image: "/images/netflix-ui-clone.png",
    githubLink: "https://github.com/Crazycoderdev143/Netflix-UI-Clone",
    projectLink: "#",
  },
  {
    title: "Joke",
    category: "Web",
    description: "Joke app built with HTML, CSS and JavaScript.",
    image: "/images/joke-html-css-js.png",
    githubLink: "https://github.com/Crazycoderdev143/Joke-html-css-js",
    projectLink: "#",
  },
  {
    title: "Analog Watch",
    category: "Web",
    description: "Analog Watch project.",
    image: "/images/analog-watch.png",
    githubLink: "https://github.com/Crazycoderdev143/Analog-Watch",
    projectLink: "#",
  },
  {
    title: "Crazycoderdev143",
    category: "Web",
    description: "Coding blog by crazy coder.",
    image: "/images/crazycoderdev143.png",
    githubLink: "https://github.com/Crazycoderdev143/crazycoderdev143",
    projectLink: "#",
  },
  {
    title: "Image uploader",
    category: "Web",
    description: "Image uploader project.",
    image: "/images/image-uploader.png",
    githubLink: "https://github.com/Crazycoderdev143/Image-uploader",
    projectLink: "#",
  },
  {
    title: "Sdky Notebook",
    category: "Web",
    description: "Notebook project named Sdky.",
    image: "/images/sdky-notebook.png",
    githubLink: "https://github.com/Crazycoderdev143/Sdky-Notebook",
    projectLink: "#",
  },
  {
    title: "Function based Sdky news",
    category: "Web",
    description: "Function based Sdky news application.",
    image: "/images/function-based-sdky-news.png",
    githubLink: "https://github.com/Crazycoderdev143/Function-based-Sdky-news",
    projectLink: "#",
  },
  {
    title: "Class based Sdky news",
    category: "Web",
    description: "Class based Sdky news application.",
    image: "/images/class-based-sdky-news.png",
    githubLink: "https://github.com/Crazycoderdev143/Class-based-Sdky-news",
    projectLink: "#",
  },
  {
    title: "Short url Generator",
    category: "Web",
    description: "Short URL generator project.",
    image: "/images/short-url-generator.png",
    githubLink: "https://github.com/Crazycoderdev143/Short-url-Generator",
    projectLink: "#",
  },
  {
    title: "Sdky blog",
    category: "Web",
    description: "Sdky Blog using React and Firebase.",
    image: "/images/sdky-blog.png",
    githubLink: "https://github.com/Crazycoderdev143/Sdky-blog",
    projectLink: "#",
  },
  {
    title: "Personal Portfolio",
    category: "Web",
    description: "Personal Portfolio project.",
    image: "/images/personal-portfolio.png",
    githubLink: "https://github.com/Crazycoderdev143/Personal-Portfolio",
    projectLink: "#",
  },
  {
    title: "Basic Calc",
    category: "Web",
    description: "Basic Calculator project.",
    image: "/images/basic-calc.png",
    githubLink: "https://github.com/Crazycoderdev143/Basic-Calc",
    projectLink: "#",
  },
  {
    title: "Guess the Number Game",
    category: "Web",
    description: "Guess the Number Game.",
    image: "/images/guess-the-number-game.png",
    githubLink: "https://github.com/Crazycoderdev143/Guess-the-Number-Game",
    projectLink: "#",
  },
  {
    title: "Auto Detect Sdky Music player",
    category: "Web",
    description: "Auto Detect Sdky Music player project.",
    image: "/images/auto-detect-sdky-music-player.png",
    githubLink:
      "https://github.com/Crazycoderdev143/Auto-Detect-Sdky-Music-player",
    projectLink: "#",
  },
  {
    title: "Digital Clock",
    category: "Web",
    description: "Digital Clock project.",
    image: "/images/digital-clock.png",
    githubLink: "https://github.com/Crazycoderdev143/Digital-Clock",
    projectLink: "#",
  },
  {
    title: "Drink Music player",
    category: "Web",
    description: "Drink Music player project.",
    image: "/images/drink-music-player.png",
    githubLink: "https://github.com/Crazycoderdev143/Drink-Music-player",
    projectLink: "#",
  },
];

const categories = ["All", "Web", "Mobile"];

const cardVariants: Record<string, (i: number) => any> = {
  hidden: () => ({opacity: 0, y: 60}),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  // 🔹 Close modal with ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section
      id="projects"
      className="relative py-24 bg-gradient-to-br from-blue-50 via-cyan-100 to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 overflow-hidden"
    >
      {/* <IconParticles3 /> */}

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{opacity: 0, y: -30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6, ease: "easeOut"}}
          viewport={{once: true}}
          className="text-4xl md:text-5xl font-bold text-center text-blue-700 dark:text-cyan-400 mb-12"
        >
          My Projects
        </motion.h2>

        {/* Category Filter */}
        <div className="flex justify-center mb-10 gap-4 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-cyan-600 text-white border-cyan-600"
                  : "bg-white dark:bg-neutral-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-cyan-100 dark:hover:bg-cyan-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="container mx-auto px-6">
          {/* Project Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{once: true}}
              >
                <Tilt
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  scale={1.03}
                >
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="relative h-50 cursor-pointer rounded-2xl shadow-lg hover:shadow-cyan-400/80 dark:hover:shadow-cyan-500/80 transition duration-300 ease-in-out overflow-hidden group"
                  >
                    {/* Background Image */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-fill group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Title & Description */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <p className="text-sm opacity-80 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 Modal with AnimatePresence */}
      <AnimatePresence mode="wait">
        {selectedProject && (
          <motion.div
            key="modal"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}} // 🔹 fade out
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              key="modal-content"
              initial={{scale: 0.8, opacity: 0}}
              animate={{scale: 1, opacity: 1}}
              exit={{scale: 0.5, opacity: 0}} // 🔹 shrink + fade out
              transition={{type: "spring", stiffness: 120}}
              className="relative bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full shadow-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Section */}
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Details Section */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {selectedProject.description}
                </p>

                <div className="flex justify-between items-center">
                  <a
                    href={selectedProject.projectLink}
                    target="_blank"
                    className="inline-block mt-4 text-blue-600 dark:text-cyan-400 underline font-medium hover:underline"
                  >
                    View Project →
                  </a>
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    className="inline-block mt-4 text-blue-600 dark:text-cyan-400 underline font-medium hover:underline"
                  >
                    View Source Code →
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
