"use client";

import React, {useEffect, useState} from "react";
import {Link as ScrollLink, Events} from "react-scroll";
import {motion} from "framer-motion";

const navLinks = ["Home", "About", "Skills", "Projects", "Services", "Contact"];

const Header: React.FC = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to: string) => {
    setActive(to);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-sm shadow-md"
          : "bg-[#02002a] transition-all"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <ScrollLink
          to="home"
          smooth={true}
          offset={-80}
          duration={500}
          className="text-white text-xl font-extrabold tracking-wide cursor-pointer"
        >
          Portfolio
        </ScrollLink>

        <nav className="flex space-x-6">
          {navLinks.map((item) => {
            const id = item.toLowerCase();
            const isActive = active === id;

            return (
              <ScrollLink
                key={item}
                to={id}
                smooth={true}
                spy={true}
                offset={-80}
                duration={500}
                onSetActive={handleSetActive}
                className={`group relative font-semibold text-lg cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "text-cyan-400 drop-shadow-[0_0_8px_cyan]"
                    : "text-white hover:text-cyan-300"
                }`}
              >
                <motion.span
                  whileHover={{scale: 1.1}}
                  transition={{type: "spring", stiffness: 300}}
                  className="relative z-10"
                >
                  {item}
                </motion.span>

                {/* Underline */}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] w-full origin-left transform transition-transform duration-300 ease-out bg-cyan-400 ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>

                {/* Glow effects */}
                {isActive && (
                  <>
                    <span className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-cyan-400/10 to-transparent rounded-lg blur-lg pointer-events-none"></span>
                    <span className="absolute -inset-1 rounded-lg border border-cyan-400/30 blur-sm animate-pulse pointer-events-none"></span>
                  </>
                )}
              </ScrollLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
