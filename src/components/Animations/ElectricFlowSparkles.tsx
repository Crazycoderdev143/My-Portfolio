"use client";

import React, {useEffect, useRef} from "react";

const COLORS = ["#00f0ff", "#1fc9ff", "#00c3ff", "#24f0db"];

type Particle = {
  x: number;
  y: number;
  angle: number;
  speed: number;
  size: number;
  alpha: number;
  noiseOffset: number;
  color: string;
  life: number;
};

export const ElectricFlowSparkles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles: Particle[] = [];

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animationId: number;
    let time = 0;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const createSparkle = () => {
      const angle = Math.random() * Math.PI * 2;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        angle,
        speed: 0.5 + Math.random() * 1.5,
        size: Math.random() * 1.5 + 0.5,
        alpha: 1,
        noiseOffset: Math.random() * 100,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        life: 100 + Math.random() * 100,
      };
    };

    const initParticles = () => {
      for (let i = 0; i < 200; i++) {
        particles.push(createSparkle());
      }
    };

    const animate = () => {
      time += 0.01;

      ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        const wobble = Math.sin(p.noiseOffset + time * 5) * 1.5;

        p.x += Math.cos(p.angle + wobble) * p.speed;
        p.y += Math.sin(p.angle + wobble) * p.speed;

        p.life--;
        p.alpha = p.life / 100;

        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size * 4
        );
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (
          p.life <= 0 ||
          p.x < 0 ||
          p.x > canvas.width ||
          p.y < 0 ||
          p.y > canvas.height
        ) {
          particles[i] = createSparkle(); // respawn
        }
      }

      ctx.globalCompositeOperation = "source-over";
      animationId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => {
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
