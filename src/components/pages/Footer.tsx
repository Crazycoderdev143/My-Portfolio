import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-gray-200 dark:bg-neutral-800 text-center">
      <p className="text-gray-700 dark:text-gray-400">
        © {new Date().getFullYear()} Dileep Nishad. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
