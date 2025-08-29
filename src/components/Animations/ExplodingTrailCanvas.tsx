"use client";

import React, {useRef, useEffect} from "react";

const COLORS = ["#00ffff", "#00eaff", "#00cfff", "#0088ff"];

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  life: number;
  color: string;
};

export const ExplodingTrailCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles: Particle[] = [];

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animationId: number;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();

    const spawnParticles = (x: number, y: number, amount = 8) => {
      for (let i = 0; i < amount; i++) {
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 6, // more energy
          vy: (Math.random() - 0.5) * 6,
          size: Math.random() * 2 + 1,
          alpha: 1,
          life: 60,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
    };

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)"; // slightly stronger trail fade
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // update
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96; // friction
        p.vy *= 0.96;
        p.vy += 0.02; // gravity
        p.alpha -= 0.015;
        p.life--;

        // draw
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size * 5
        );
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.life <= 0 || p.alpha <= 0) {
          particles.splice(i, 1);
        }
      }

      ctx.globalCompositeOperation = "source-over";
      animationId = requestAnimationFrame(animate);
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const x = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
      const y = e instanceof TouchEvent ? e.touches[0].clientY : e.clientY;
      spawnParticles(x, y, 8);
    };

    const handleClick = (e: MouseEvent | TouchEvent) => {
      const x = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
      const y = e instanceof TouchEvent ? e.touches[0].clientY : e.clientY;
      spawnParticles(x, y, 30); // bigger burst
    };

    animate();

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleClick);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("touchstart", handleClick);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleClick);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchstart", handleClick);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};
