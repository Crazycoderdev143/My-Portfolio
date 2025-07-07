"use client";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full fixed top-0 left-0 bg-white dark:bg-neutral-900 shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-blue-600">MyPortfolio</h1>
        <nav>
          <ul className="flex space-x-4">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-500"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
