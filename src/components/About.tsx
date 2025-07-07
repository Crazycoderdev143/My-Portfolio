import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-100 dark:bg-neutral-800"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I'm a passionate frontend developer with experience in building
          responsive websites using HTML, CSS, JavaScript, React, and Tailwind
          CSS. I enjoy crafting user-friendly interfaces and continuously
          learning new technologies to improve my skills.
        </p>
      </div>
    </section>
  );
};

export default About;
