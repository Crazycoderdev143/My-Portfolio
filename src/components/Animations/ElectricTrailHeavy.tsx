"use client";

import React, {useRef, useEffect} from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  color: string;
};

const COLORS = ["#00fff7", "#00eaff", "#00cfff", "#10f8ff"];

export const ElectricTrailHeavy: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles: Particle[] = [];

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animationId: number;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const spawnParticles = (x: number, y: number, amount = 20) => {
      for (let i = 0; i < amount; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const speed = Math.random() * 2 + 1;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 100 + Math.random() * 50,
          size: Math.random() * 1.5 + 1.5,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
    };

    const animate = () => {
      // Persistent trails via low alpha fill
      ctx.fillStyle = "rgba(0, 0, 0, 0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Drag & curve
        p.vx *= 0.97;
        p.vy *= 0.97;
        p.vx += Math.sin(p.y * 0.05) * 0.05;
        p.vy += Math.cos(p.x * 0.05) * 0.05;

        // Glow
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
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.life -= 1;
        if (p.life <= 0) particles.splice(i, 1);
      }

      ctx.globalCompositeOperation = "source-over";
      animationId = requestAnimationFrame(animate);
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const x = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
      const y = e instanceof TouchEvent ? e.touches[0].clientY : e.clientY;
      spawnParticles(x, y, 25);
    };

    animate();

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};
