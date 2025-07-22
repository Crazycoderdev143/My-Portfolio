
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

export const IconParticles2: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement[]>([]);
  const mouse = useRef({x: window.innerWidth / 2, y: window.innerHeight / 2});

  useEffect(() => {
    const icons: HTMLDivElement[] = [];
    const container = containerRef.current;
    if (!container) return;

    // Create icons
    for (let i = 0; i < TOTAL_ICONS; i++) {
      const iconWrapper = document.createElement("div");
      iconWrapper.style.position = "absolute";
      iconWrapper.style.left = Math.random() * window.innerWidth + "px";
      iconWrapper.style.top = Math.random() * window.innerHeight + "px";
      iconWrapper.style.pointerEvents = "none";
      iconWrapper.style.transition = "transform 0.1s linear";

      const Icon = ICONS[i % ICONS.length];
      const color = ICON_COLORS[i % ICON_COLORS.length];

      const element = (
        <Icon
          size={24}
          color={color}
        />
      );
      iconWrapper.appendChild(document.createElement("div"));
      icons.push(iconWrapper);
      container.appendChild(iconWrapper);

      // Inject react icon manually
      // Hack to inject icon inside native DOM
      import("react-dom/client").then(({ createRoot }) => {
        const root = createRoot(iconWrapper.firstChild as Element);
        root.render(element);
      });

    }

    iconsRef.current = icons;

    const particles = icons.map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));

    const animate = () => {
      for (let i = 0; i < icons.length; i++) {
        const p = particles[i];
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const angle = Math.atan2(dy, dx);
          const repel = (120 - dist) / 120;
          p.vx += Math.cos(angle) * repel * 0.6;
          p.vy += Math.sin(angle) * repel * 0.6;
        }
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;

        if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;

        icons[i].style.transform = `translate(${p.x}px, ${p.y}px)`;
      }
      requestAnimationFrame(animate);
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (e instanceof MouseEvent) {
        mouse.current = {x: e.clientX, y: e.clientY};
      } else {
        mouse.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      icons.forEach((icon) => icon.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

