"use client";

import {motion} from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import {ChevronDown} from "lucide-react";
import {useState, useEffect, useMemo, useRef} from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPrisma,
  SiExpress,
  SiFirebase,
  SiRedux,
  SiGraphql,
  SiDocker,
  SiPostman,
  SiGit,
  SiGithub,
  SiVite,
  SiBootstrap,
  SiPostgresql,
  SiRedis,
  SiJsonwebtokens,
  SiBabel,
  SiVercel,
  SiRender,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <SiHtml5 />,
    color: "text-orange-600",
    category: "Frontend",
    level: 95,
  },
  {
    name: "CSS3",
    icon: <SiCss3 />,
    color: "text-blue-500",
    category: "Frontend",
    level: 90,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-400",
    category: "Frontend",
    level: 95,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "text-blue-600",
    category: "Frontend",
    level: 90,
  },
  {
    name: "React",
    icon: <SiReact />,
    color: "text-cyan-400",
    category: "Frontend",
    level: 95,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "text-black dark:text-white",
    category: "Frontend",
    level: 90,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-cyan-500",
    category: "Frontend",
    level: 90,
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap />,
    color: "text-purple-700",
    category: "Frontend",
    level: 80,
  },
  {
    name: "Vite",
    icon: <SiVite />,
    color: "text-purple-500",
    category: "Frontend",
    level: 80,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    color: "text-purple-400",
    category: "Frontend",
    level: 85,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
    color: "text-green-600",
    category: "Backend",
    level: 90,
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "text-gray-700 dark:text-white",
    category: "Backend",
    level: 90,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-500",
    category: "Backend",
    level: 85,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    color: "text-blue-700",
    category: "Backend",
    level: 85,
  },
  {
    name: "Prisma",
    icon: <SiPrisma />,
    color: "text-indigo-500",
    category: "Backend",
    level: 90,
  },
  {
    name: "Redis",
    icon: <SiRedis />,
    color: "text-red-600",
    category: "Backend",
    level: 80,
  },
  {
    name: "JWT",
    icon: <SiJsonwebtokens />,
    color: "text-amber-500",
    category: "Backend",
    level: 85,
  },
  {
    name: "Bcrypt",
    icon: <SiBabel />,
    color: "text-gray-400",
    category: "Backend",
    level: 80,
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    color: "text-yellow-500",
    category: "Backend",
    level: 85,
  },
  {
    name: "GraphQL",
    icon: <SiGraphql />,
    color: "text-pink-500",
    category: "Backend",
    level: 75,
  },
  {
    name: "Git",
    icon: <SiGit />,
    color: "text-red-600",
    category: "DevOps",
    level: 90,
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
    color: "text-gray-900 dark:text-white",
    category: "DevOps",
    level: 90,
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    color: "text-orange-500",
    category: "DevOps",
    level: 85,
  },
  {
    name: "Docker",
    icon: <SiDocker />,
    color: "text-blue-500",
    category: "DevOps",
    level: 80,
  },
  {
    name: "Vercel",
    icon: <SiVercel />,
    color: "text-black dark:text-white",
    category: "DevOps",
    level: 85,
  },
  {
    name: "Render",
    icon: <SiRender />,
    color: "text-indigo-600",
    category: "DevOps",
    level: 80,
  },
  {
    name: "VS Code",
    icon: (
      <Image
        src="/vscode.svg"
        alt="VS Code"
        width={40}
        height={40}
        className="w-10 h-10"
      />
    ),
    color: "",
    category: "DevOps",
    level: 95,
  },
];

const categories = ["All", "Frontend", "Backend", "DevOps"];

export default function Skills() {
  const [selected, setSelected] = useState("All");
  const [searchText, setSearchText] = useState("");

  const filteredSkills = useMemo(() => {
    return skills.filter((s) => {
      const matchCat = selected === "All" || s.category === selected;
      const matchSearch = s.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selected, searchText]);

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-br from-cyan-100 via-white to-cyan-200 dark:from-neutral-900 dark:via-neutral-800 dark:to-black"
    >
      <motion.h2
        initial={{opacity: 0, y: -40}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.7}}
        className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg mb-12"
      >
        My Skills & Tech Stack
      </motion.h2>

      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        className="flex justify-center gap-4 mb-10 flex-wrap"
      >
        {categories.map((cat) => (
          <motion.button
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 shadow-md ${
              selected === cat
                ? "bg-cyan-500 text-white"
                : "bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {transition: {staggerChildren: 0.15}},
        }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto px-2"
      >
        {filteredSkills.map(({name, icon, color, level}) => (
          <motion.div
            key={name}
            variants={{
              hidden: {opacity: 0, y: 30},
              visible: {opacity: 1, y: 0},
            }}
          >
            <Tilt
              glareEnable
              glareMaxOpacity={0.25}
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              scale={1.05}
              transitionSpeed={800}
              className="group relative p-[2px] rounded-2xl"
            >
              <div className="rounded-2xl p-1 bg-white dark:bg-neutral-800 transition-all duration-300 group-hover:shadow-[0_0_12px_2px_rgba(0,255,255,0.5)] border-2 border-transparent group-hover:border-cyan-400">
                <motion.div
                  whileHover={{y: 10}}
                  transition={{type: "spring", stiffness: 300}}
                  className="flex flex-col items-center justify-center py-2 px-1"
                >
                  <motion.div
                    whileHover={{scale: 1.2, y: -20}}
                    transition={{type: "spring", stiffness: 300}}
                    className={`text-4xl mb-2 z-10 ${color}`}
                  >
                    {icon}
                  </motion.div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 text-center group-hover:text-cyan-500 transition-colors duration-300">
                    {name}
                  </p>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-cyan-500 h-2 rounded-full"
                      style={{width: `${level}%`}}
                    ></div>
                  </div>
                </motion.div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// "use client";

// import {useState, useMemo} from "react";
// import {motion, AnimatePresence} from "framer-motion";
// import Tilt from "react-parallax-tilt";
// import Image from "next/image";
// import {
//   SiHtml5,
//   SiCss3,
//   SiJavascript,
//   SiTypescript,
//   SiReact,
//   SiNextdotjs,
//   SiTailwindcss,
//   SiNodedotjs,
//   SiMongodb,
//   SiPrisma,
//   SiExpress,
//   SiFirebase,
//   SiRedux,
//   SiGraphql,
//   SiDocker,
//   SiPostman,
//   SiGit,
//   SiGithub,
//   SiVite,
//   SiBootstrap,
//   SiPostgresql,
//   SiRedis,
//   SiJsonwebtokens,
//   SiBabel,
//   SiVercel,
//   SiRender,
// } from "react-icons/si";

// const skills = [
//   {
//     name: "HTML5",
//     icon: SiHtml5,
//     color: "text-orange-600",
//     category: "Frontend",
//     level: 95,
//   },
//   {
//     name: "CSS3",
//     icon: SiCss3,
//     color: "text-blue-500",
//     category: "Frontend",
//     level: 90,
//   },
//   {
//     name: "JavaScript",
//     icon: SiJavascript,
//     color: "text-yellow-400",
//     category: "Frontend",
//     level: 95,
//   },
//   {
//     name: "TypeScript",
//     icon: SiTypescript,
//     color: "text-blue-600",
//     category: "Frontend",
//     level: 90,
//   },
//   {
//     name: "React",
//     icon: SiReact,
//     color: "text-cyan-400",
//     category: "Frontend",
//     level: 95,
//   },
//   {
//     name: "Next.js",
//     icon: SiNextdotjs,
//     color: "text-black dark:text-white",
//     category: "Frontend",
//     level: 90,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: SiTailwindcss,
//     color: "text-cyan-500",
//     category: "Frontend",
//     level: 90,
//   },
//   {
//     name: "Bootstrap",
//     icon: SiBootstrap,
//     color: "text-purple-700",
//     category: "Frontend",
//     level: 80,
//   },
//   {
//     name: "Vite",
//     icon: SiVite,
//     color: "text-purple-500",
//     category: "Frontend",
//     level: 80,
//   },
//   {
//     name: "Redux",
//     icon: SiRedux,
//     color: "text-purple-400",
//     category: "Frontend",
//     level: 85,
//   },
//   {
//     name: "Node.js",
//     icon: SiNodedotjs,
//     color: "text-green-600",
//     category: "Backend",
//     level: 90,
//   },
//   {
//     name: "Express.js",
//     icon: SiExpress,
//     color: "text-gray-700 dark:text-white",
//     category: "Backend",
//     level: 90,
//   },
//   {
//     name: "MongoDB",
//     icon: SiMongodb,
//     color: "text-green-500",
//     category: "Backend",
//     level: 85,
//   },
//   {
//     name: "PostgreSQL",
//     icon: SiPostgresql,
//     color: "text-blue-700",
//     category: "Backend",
//     level: 85,
//   },
//   {
//     name: "Prisma",
//     icon: SiPrisma,
//     color: "text-indigo-500",
//     category: "Backend",
//     level: 90,
//   },
//   {
//     name: "Redis",
//     icon: SiRedis,
//     color: "text-red-600",
//     category: "Backend",
//     level: 80,
//   },
//   {
//     name: "JWT",
//     icon: SiJsonwebtokens,
//     color: "text-amber-500",
//     category: "Backend",
//     level: 85,
//   },
//   {
//     name: "Bcrypt",
//     icon: SiBabel,
//     color: "text-gray-400",
//     category: "Backend",
//     level: 80,
//   },
//   {
//     name: "Firebase",
//     icon: SiFirebase,
//     color: "text-yellow-500",
//     category: "Backend",
//     level: 85,
//   },
//   {
//     name: "GraphQL",
//     icon: SiGraphql,
//     color: "text-pink-500",
//     category: "Backend",
//     level: 75,
//   },
//   {
//     name: "Git",
//     icon: SiGit,
//     color: "text-red-600",
//     category: "DevOps",
//     level: 90,
//   },
//   {
//     name: "GitHub",
//     icon: SiGithub,
//     color: "text-gray-900 dark:text-white",
//     category: "DevOps",
//     level: 90,
//   },
//   {
//     name: "Postman",
//     icon: SiPostman,
//     color: "text-orange-500",
//     category: "DevOps",
//     level: 85,
//   },
//   {
//     name: "Docker",
//     icon: SiDocker,
//     color: "text-blue-500",
//     category: "DevOps",
//     level: 80,
//   },
//   {
//     name: "Vercel",
//     icon: SiVercel,
//     color: "text-black dark:text-white",
//     category: "DevOps",
//     level: 85,
//   },
//   {
//     name: "Render",
//     icon: SiRender,
//     color: "text-indigo-600",
//     category: "DevOps",
//     level: 80,
//   },
//   {
//     name: "VS Code",
//     icon: () => (
//       <Image
//         src="/vscode.svg"
//         alt="VS Code"
//         width={40}
//         height={40}
//         className="w-10 h-10"
//       />
//     ),
//     color: "",
//     category: "DevOps",
//     level: 95,
//   },
// ];

// const categories = ["All", "Frontend", "Backend", "DevOps"];

// export default function Skills() {
//   const [selected, setSelected] = useState("All");
//   const [searchText, setSearchText] = useState("");

//   const filteredSkills = useMemo(() => {
//     return skills.filter((s) => {
//       const matchCat = selected === "All" || s.category === selected;
//       const matchSearch = s.name
//         .toLowerCase()
//         .includes(searchText.toLowerCase());
//       return matchCat && matchSearch;
//     });
//   }, [selected, searchText]);

//   return (
//     <section className="py-20 px-6 bg-gradient-to-br from-cyan-100 via-white to-cyan-200 dark:from-neutral-900 dark:via-neutral-800 dark:to-black">
//       <motion.h2
//         initial={{opacity: 0, y: -40}}
//         whileInView={{opacity: 1, y: 0}}
//         viewport={{once: true}}
//         transition={{duration: 0.7}}
//         className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg mb-12"
//       >
//         My Skills & Tech Stack
//       </motion.h2>

//       <div className="flex justify-center mb-6">
//         <input
//           type="text"
//           placeholder="Search skills..."
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//           className="px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm w-80 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//         />
//       </div>

//       <div className="flex justify-center gap-4 mb-10 flex-wrap">
//         {categories.map((cat) => (
//           <motion.button
//             whileHover={{scale: 1.1}}
//             whileTap={{scale: 0.95}}
//             key={cat}
//             onClick={() => setSelected(cat)}
//             className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 shadow-md ${
//               selected === cat
//                 ? "bg-cyan-500 text-white"
//                 : "bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-300"
//             }`}
//           >
//             {cat}
//           </motion.button>
//         ))}
//       </div>

//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         variants={{
//           hidden: {},
//           visible: {transition: {staggerChildren: 0.15}},
//         }}
//         className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto px-2"
//       >
//         <AnimatePresence mode="wait">
//           {filteredSkills.map(({name, icon: Icon, color, level}) => (
//             <motion.div
//               key={name}
//               layout
//               initial={{opacity: 0, y: 30}}
//               animate={{opacity: 1, y: 0}}
//               exit={{opacity: 0, y: 30}}
//               transition={{duration: 0.4}}
//             >
//               <Tilt
//                 glareEnable
//                 glareMaxOpacity={0.25}
//                 tiltMaxAngleX={20}
//                 tiltMaxAngleY={20}
//                 scale={1.05}
//                 transitionSpeed={800}
//                 className="group relative p-[2px] rounded-2xl"
//               >
//                 <div className="rounded-2xl p-3 bg-white dark:bg-neutral-800 transition-all duration-300 group-hover:shadow-[0_0_12px_2px_rgba(0,255,255,0.5)] border-2 border-transparent group-hover:border-cyan-400">
//                   <div className="flex flex-col items-center justify-center">
//                     <motion.div
//                       whileHover={{scale: 1.2, y: -10}}
//                       transition={{type: "spring", stiffness: 300}}
//                       className={`text-4xl mb-2 z-10 ${color}`}
//                     >
//                       {typeof Icon === "function" ? <Icon /> : Icon}
//                     </motion.div>
//                     <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 text-center group-hover:text-cyan-500 transition-colors duration-300">
//                       {name}
//                     </p>
//                     <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
//                       <div
//                         className="bg-cyan-500 h-2 rounded-full"
//                         style={{width: `${level}%`}}
//                       ></div>
//                     </div>
//                   </div>
//                 </div>
//               </Tilt>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </motion.div>
//     </section>
//   );
// }
