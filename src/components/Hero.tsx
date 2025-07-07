import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-white to-blue-100 dark:from-neutral-900 dark:to-neutral-800"
    >
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Hi, I'm Dileep
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Frontend Web Developer
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
