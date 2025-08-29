"use client";

import React, {useEffect, useRef} from "react";
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
import {createRoot} from "react-dom/client";

const ICONS = [
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
];

const ICON_COLORS = [
  "#F16529",
  "#2965F1",
  "#F7DF1E",
  "#3178C6",
  "#61DAFB",
  "#000000",
  "#38BDF8",
  "#8CC84B",
  "#47A248",
  "#0C344B",
  "#303030",
  "#FFCA28",
  "#764ABC",
  "#E10098",
  "#0db7ed",
  "#FF6C37",
  "#F1502F",
  "#181717",
  "#646CFF",
  "#7952B3",
  "#336791",
  "#D82C20",
  "#EBB724",
  "#F9DC3E",
  "#000000",
  "#0093FF",
];

const TOTAL_ICONS = 25;

export const IconParticles: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({x: window.innerWidth / 2, y: window.innerHeight / 2});
  const prevMouse = useRef({x: mouse.current.x, y: mouse.current.y});
  const frameRef = useRef<number>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const particles = Array.from({length: TOTAL_ICONS}, (_, i) => {
      const wrapper = document.createElement("div");
      wrapper.style.position = "absolute";
      wrapper.style.pointerEvents = "none";
      container.appendChild(wrapper);

      const Icon = ICONS[i % ICONS.length];
      const color = ICON_COLORS[i % ICON_COLORS.length];
      const root = createRoot(wrapper);
      root.render(
        <Icon
          size={24}
          color={color}
        />
      );

      return {
        el: wrapper,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      };
    });

    const animate = () => {
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98; // slow down over time
        p.vy *= 0.98;

        if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;

        p.el.style.transform = `translate(${p.x}px, ${p.y}px)`;
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const x = "clientX" in e ? e.clientX : e.touches[0].clientX;
      const y = "clientY" in e ? e.clientY : e.touches[0].clientY;

      // cursor velocity
      const dx = x - prevMouse.current.x;
      const dy = y - prevMouse.current.y;

      // push nearby particles in cursor direction
      particles.forEach((p) => {
        const dist = Math.hypot(p.x - x, p.y - y);
        if (dist < 150) {
          p.vx += dx * 0.05;
          p.vy += dy * 0.05;
        }
      });

      mouse.current = {x, y};
      prevMouse.current = {x, y};
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      frameRef.current ? cancelAnimationFrame(frameRef.current) : null; 
      particles.forEach((p) => p.el.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};
