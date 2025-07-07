import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with HTML, CSS, JS, and now upgraded to Next.js + Tailwind.",
    link: "#",
  },
  {
    title: "E-commerce App",
    description:
      "Built with React, Redux, Firebase, and integrated Stripe payment.",
    link: "#",
  },
  {
    title: "Weather App",
    description: "Fetches real-time weather data using OpenWeatherMap API.",
    link: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-100 dark:bg-neutral-800"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-900 shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {project.description}
              </p>
              <a
                href={project.link}
                className="text-blue-600 dark:text-blue-400 underline mt-3 inline-block"
                target="_blank"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
