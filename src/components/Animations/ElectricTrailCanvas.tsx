"use client";

import React, {useRef, useEffect} from "react";

const PARTICLE_COUNT = 800;
const colors = ["#00ffff", "#00eaff", "#00cfff"];

export const ElectricTrailCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({x: 0, y: 0});

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animationId: number;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
    }[] = [];

    const initParticles = () => {
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const attractToMouse = (p: any) => {
      const dx = mouse.current.x - p.x;
      const dy = mouse.current.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const force = Math.min(200 / (dist || 1), 5); // Attraction force

      const angle = Math.atan2(dy, dx);
      p.vx += Math.cos(angle) * force * 0.01;
      p.vy += Math.sin(angle) * force * 0.01;
    };

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particles[i];
        attractToMouse(p);

        p.x += p.vx;
        p.y += p.vy;

        // friction
        p.vx *= 0.96;
        p.vy *= 0.96;

        // boundary check
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
      animationId = requestAnimationFrame(animate);
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      let x = 0,
        y = 0;
      if (e instanceof TouchEvent) {
        x = e.touches[0]?.clientX ?? 0;
        y = e.touches[0]?.clientY ?? 0;
      } else {
        x = (e as MouseEvent).clientX;
        y = (e as MouseEvent).clientY;
      }

      mouse.current.x = x;
      mouse.current.y = y;
    };

    // Setup
    initParticles();
    animate();

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
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
