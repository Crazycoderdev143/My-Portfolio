// import React from "react";
// import { IconParticles3 } from "../Animations/IconParticles3";
// import { ElectricFlowSparkles } from "../Animations/ElectricFlowSparkles";
// import { ElectricTrailWithNoise } from "../Animations/ElectricTrailWithNoise";
// import { SwarmParticles } from "../Animations/ElectricTrailCanvas";
// import { ElectricTrailHeavy } from "../Animations/ElectricTrailHeavy";
// import { ExplodingTrailCanvas } from "../Animations/ExplodingTrailCanvas";

// const projects = [
//   {
//     title: "Portfolio Website",
//     description:
//       "Personal portfolio built with HTML, CSS, JS, and now upgraded to Next.js + Tailwind.",
//     link: "#",
//   },
//   {
//     title: "E-commerce App",
//     description:
//       "Built with React, Redux, Firebase, and integrated Stripe payment.",
//     link: "#",
//   },
//   {
//     title: "Weather App",
//     description: "Fetches real-time weather data using OpenWeatherMap API.",
//     link: "#",
//   },
// ];

// const Projects: React.FC = () => {
//   return (
//     <section
//       id="projects"
//       className="py-20 bg-gray-100 dark:bg-neutral-800"
//     >
//       <IconParticles3 />
//       {/* <ElectricTrailWithNoise /> */}
//       {/* <ElectricFlowSparkles /> */}
//       {/* <SwarmParticles /> */}
//       {/* <ElectricTrailHeavy /> */}
//       {/* <ExplodingTrailCanvas /> */}
//       <div className="max-w-5xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
//           Projects
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-white dark:bg-neutral-900 shadow-lg rounded-lg p-6 hover:shadow-xl transition"
//             >
//               <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
//                 {project.title}
//               </h3>
//               <p className="text-gray-700 dark:text-gray-300 mt-2">
//                 {project.description}
//               </p>
//               <a
//                 href={project.link}
//                 className="text-blue-600 dark:text-blue-400 underline mt-3 inline-block"
//                 target="_blank"
//               >
//                 View Project →
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

"use client";

import Image from "next/image";
import React, {useState} from "react";
import {motion} from "framer-motion";
import Tilt from "react-parallax-tilt";
import { IconParticles3 } from "../Animations/IconParticles3";


const projects = [
  {
    title: "Portfolio Website",
    category: "Web",
    description:
      "A personal portfolio upgraded from HTML/CSS/JS to Next.js + Tailwind.",
    image: "/images/portfolio.png",
    link: "#",
  },
  {
    title: "E-commerce App",
    category: "Web",
    description:
      "E-commerce platform with React, Redux, Firebase, and Stripe integration.",
    image: "/images/ecommerce.png",
    link: "#",
  },
  {
    title: "Weather App",
    category: "Mobile",
    description: "A React app fetching weather data via OpenWeatherMap API.",
    image: "/images/weather.png",
    link: "#",
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{once: true}}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.25}
                scale={1.05}
                transitionSpeed={1500}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className="w-full"
              >
                <div
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer bg-white dark:bg-neutral-900 rounded-2xl shadow-lg hover:shadow-cyan-400/30 dark:hover:shadow-cyan-500/30 transition duration-300 ease-in-out p-4 group"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="rounded-xl mb-4 group-hover:scale-[1.02] transition-transform"
                  />
                  <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {project.description}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-neutral-900 max-w-xl w-full rounded-xl shadow-lg p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              width={600}
              height={350}
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-blue-700 dark:text-cyan-400 mb-2">
              {selectedProject.title}
            </h2>
            <p className="text-gray-800 dark:text-gray-200">
              {selectedProject.description}
            </p>
            <a
              href={selectedProject.link}
              target="_blank"
              className="inline-block mt-4 text-blue-600 dark:text-cyan-400 underline"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;