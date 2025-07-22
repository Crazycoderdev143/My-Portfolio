
"use client";

import React, {useEffect, useRef, useState} from "react";
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

type Particle = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  bounce: boolean;
  delay: number;
  Icon: React.ComponentType<{size: number; color?: string}>;
};

export const IconParticles3: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [backgroundParticles, setBackgroundParticles] = useState<Particle[]>(
    []
  );
  const particleId = useRef(0);

  // 🌌 Spawn background floaters
  useEffect(() => {
    const bg: Particle[] = Array.from({length: 25}).map(() => {
      const Icon = ICONS[Math.floor(Math.random() * ICONS.length)];
      return {
        id: particleId.current++,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: 18 + Math.random() * 12,
        opacity: 0.3 + Math.random() * 0.4,
        life: Infinity,
        bounce: false,
        delay: 0,
        Icon,
      };
    });
    setBackgroundParticles(bg);
  }, []);

  // ⚡ Active motion icons (cursor trail)
  useEffect(() => {
    let animationId: number;

    const spawn = (x: number, y: number, count = 10) => {
      setParticles((prev) => [
        ...prev,
        ...Array.from({length: count}).map((_, i) => {
          const angle = Math.random() * 2 * Math.PI;
          const speed = Math.random() * 2.5 + 0.5;
          const Icon = ICONS[Math.floor(Math.random() * ICONS.length)];
          return {
            id: particleId.current++,
            x,
            y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            size: 24 + Math.random() * 8,
            opacity: 1,
            life: 100,
            bounce: true,
            delay: i * 30,
            Icon,
          };
        }),
      ]);
    };

    const update = () => {
      setParticles((prev) =>
        prev
          .map((p) => {
            p.x += p.vx;
            p.y += p.vy;
            p.vx *= 0.96;
            p.vy *= 0.96;
            p.life -= 1;
            p.opacity = Math.max(0, p.life / 100);
            return p;
          })
          .filter((p) => p.life > 0)
      );

      setBackgroundParticles((prev) =>
        prev.map((p) => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
          if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;
          return p;
        })
      );

      animationId = requestAnimationFrame(update);
    };

    
    update();
    
    // const handleMove = (e: MouseEvent | TouchEvent) => {
    //   const x = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
    //   const y = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
    //   spawn(x, y, 8);
    // };
    // window.addEventListener("mousemove", handleMove);
    // window.addEventListener("touchmove", handleMove);
    // return () => {
    //   cancelAnimationFrame(animationId);
    //   window.removeEventListener("mousemove", handleMove);
    //   window.removeEventListener("touchmove", handleMove);
    // };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...backgroundParticles, ...particles].map(
        ({id, x, y, size, Icon, opacity, bounce, delay}) => (
          <div
            key={id}
            style={{
              position: "absolute",
              left: x,
              top: y,
              opacity,
              transform: `translate(-50%, -50%) scale(${bounce ? 1.5 : 1})`,
              animation: bounce
                ? `bounceOut 0.6s ease ${delay}ms forwards`
                : undefined,
              filter: "drop-shadow(0 0 6px rgba(0,255,255,0.6))",
              transition: "opacity 0.2s, transform 0.3s",
            }}
          >
            <Icon
              size={size}
              color="#00ffff"
            />
          </div>
        )
      )}

      {/* Animation keyframes */}
      <style>{`
        @keyframes bounceOut {
          0% { transform: translate(-50%, -50%) scale(1.4); }
          40% { transform: translate(-50%, -50%) scale(0.9); }
          70% { transform: translate(-50%, -50%) scale(1.2); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </div>
  );
};
