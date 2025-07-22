// "use client";

// import React, {useState} from "react";
// import {motion, AnimatePresence} from "framer-motion";
// import {Code2, Layers, Camera, Youtube, Wand2, X} from "lucide-react";

// const services = [
//   {
//     title: "Full Stack Web & App Development",
//     icon: Code2,
//     description:
//       "From concept to deployment, I craft robust, scalable, and high-performance web and mobile applications with responsive UI and secure backend integrations.",
//     tools: [
//       "React",
//       "Next.js",
//       "Node.js",
//       "MongoDB",
//       "PostgreSQL",
//       "Tailwind CSS",
//     ],
//   },
//   {
//     title: "MERN & MEAN Stack Specialist",
//     icon: Layers,
//     description:
//       "Specialized in building modern SPAs and scalable applications using the MERN and MEAN stacks with clean code architecture and real-time capabilities.",
//     tools: ["MongoDB", "Express", "React", "Angular", "Node.js", "WebSockets"],
//   },
//   {
//     title: "Creative Photography",
//     icon: Camera,
//     description:
//       "Bringing stories to life through the lens with portrait, product, and event photography. Edits crafted for social and branding impact.",
//     tools: ["DSLR", "Lightroom", "Photoshop", "Luminar AI"],
//   },
//   {
//     title: "YouTube Creator",
//     icon: Youtube,
//     description:
//       "I produce engaging and educational video content with professional editing, scripting, and channel growth strategy.",
//     tools: ["Premiere Pro", "After Effects", "OBS", "Canva", "TubeBuddy"],
//   },
//   {
//     title: "Freelance Tech Wizard",
//     icon: Wand2,
//     description:
//       "Your go-to problem solver for quick tech fixes, performance optimizations, and freelance project support across the stack.",
//     tools: ["Vercel", "Firebase", "Figma", "CI/CD", "Git"],
//   },
// ];

// export default function ServicesPage() {
//   const [activeService, setActiveService] = useState<null | number>(null);

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-[#0f0f0f] dark:to-[#1a1a1a] py-16 px-6 md:px-20">
//       <div className="text-center mb-12">
//         <motion.h2
//           initial={{opacity: 0, y: -20}}
//           animate={{opacity: 1, y: 0}}
//           transition={{duration: 0.6}}
//           className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text"
//         >
//           My Services
//         </motion.h2>
//         <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto mt-4 text-lg">
//           Explore the range of creative and technical services I offer to bring
//           your digital vision to life.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {services.map((service, index) => {
//           const Icon = service.icon;
//           return (
//             <motion.div
//               key={index}
//               initial={{opacity: 0, y: 50}}
//               whileInView={{opacity: 1, y: 0}}
//               viewport={{once: true}}
//               transition={{duration: 0.5, delay: index * 0.1}}
//               className="relative group overflow-hidden border border-gray-200 dark:border-gray-700 rounded-3xl p-6 bg-white dark:bg-neutral-900 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
//               onClick={() => setActiveService(index)}
//             >
//               <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl pointer-events-none" />
//               <Icon className="w-10 h-10 text-blue-600 dark:text-blue-300 mb-4" />
//               <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:scale-105 transition-transform duration-300">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
//                 {service.description}
//               </p>
//               <div className="flex flex-wrap gap-2 mt-4">
//                 {service.tools.map((tool, i) => (
//                   <motion.span
//                     key={i}
//                     whileHover={{scale: 1.1}}
//                     className="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900 dark:to-blue-900 text-sm px-3 py-1 rounded-full text-blue-800 dark:text-cyan-200 font-medium shadow-sm"
//                   >
//                     {tool}
//                   </motion.span>
//                 ))}
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>

//       <AnimatePresence>
//         {activeService !== null && (
//           <motion.div
//             initial={{opacity: 0}}
//             animate={{opacity: 1}}
//             exit={{opacity: 0}}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
//             onClick={() => setActiveService(null)}
//           >
//             <motion.div
//               initial={{scale: 0.8, y: 100}}
//               animate={{scale: 1, y: 0}}
//               exit={{scale: 0.8, y: 100}}
//               transition={{duration: 0.3}}
//               onClick={(e) => e.stopPropagation()}
//               className="bg-white dark:bg-neutral-900 rounded-2xl p-6 w-full max-w-lg shadow-xl relative"
//             >
//               <button
//                 onClick={() => setActiveService(null)}
//                 className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//               <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
//                 {services[activeService].title}
//               </h2>
//               <p className="text-gray-700 dark:text-gray-300 mb-4">
//                 {services[activeService].description}
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {services[activeService].tools.map((tool, i) => (
//                   <span
//                     key={i}
//                     className="bg-blue-100 dark:bg-blue-900 dark:text-blue-300 text-blue-700 px-3 py-1 text-sm rounded-full"
//                   >
//                     {tool}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

"use client";

import React, {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Code2, Layers, Camera, Youtube, Wand2, X} from "lucide-react";

const services = [
  {
    title: "Full Stack Web & App Development",
    icon: Code2,
    description:
      "From concept to deployment, I craft robust, scalable, and high-performance web and mobile applications with responsive UI and secure backend integrations.",
    tools: [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Tailwind CSS",
    ],
  },
  {
    title: "MERN & MEAN Stack Specialist",
    icon: Layers,
    description:
      "Specialized in building modern SPAs and scalable applications using the MERN and MEAN stacks with clean code architecture and real-time capabilities.",
    tools: ["MongoDB", "Express", "React", "Angular", "Node.js", "WebSockets"],
  },
  {
    title: "Creative Photography",
    icon: Camera,
    description:
      "Bringing stories to life through the lens with portrait, product, and event photography. Edits crafted for social and branding impact.",
    tools: ["DSLR", "Lightroom", "Photoshop", "Luminar AI"],
  },
  {
    title: "YouTube Creator",
    icon: Youtube,
    description:
      "I produce engaging and educational video content with professional editing, scripting, and channel growth strategy.",
    tools: ["Premiere Pro", "After Effects", "OBS", "Canva", "TubeBuddy"],
  },
  {
    title: "Freelance Tech Wizard",
    icon: Wand2,
    description:
      "Your go-to problem solver for quick tech fixes, performance optimizations, and freelance project support across the stack.",
    tools: ["Vercel", "Firebase", "Figma", "CI/CD", "Git"],
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<null | number>(null);

  return (
    <section
      id="services"
      className="min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-[#0f0f0f] dark:to-[#1a1a1a] py-16 px-6 md:px-20"
    >
      <div className="text-center mb-12">
        <motion.h2
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text"
        >
          My Services
        </motion.h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto mt-4 text-lg">
          Explore the range of creative and technical services I offer to bring
          your digital vision to life.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.5, delay: index * 0.1}}
              className="relative group overflow-hidden border border-gray-200 dark:border-gray-700 rounded-3xl p-6 bg-white dark:bg-neutral-900 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setActiveService(index)}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl pointer-events-none" />
              <Icon className="w-10 h-10 text-blue-600 dark:text-blue-300 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:scale-105 transition-transform duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {service.tools.map((tool, i) => (
                  <motion.span
                    key={i}
                    whileHover={{scale: 1.1}}
                    className="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900 dark:to-blue-900 text-sm px-3 py-1 rounded-full text-blue-800 dark:text-cyan-200 font-medium shadow-sm"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {activeService !== null && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveService(null)}
          >
            <motion.div
              initial={{scale: 0.8, y: 100}}
              animate={{scale: 1, y: 0}}
              exit={{scale: 0.8, y: 100}}
              transition={{duration: 0.3}}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-neutral-900 rounded-2xl p-6 w-full max-w-lg shadow-xl relative"
            >
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {services[activeService].title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {services[activeService].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {services[activeService].tools.map((tool, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-900 dark:text-blue-300 text-blue-700 px-3 py-1 text-sm rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
