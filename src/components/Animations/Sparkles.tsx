"use client";

import React from "react";

interface SparklesCoreProps {
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  speedMultiplier?: number;
  flicker?: boolean;
  glow?: boolean;
  shapeSet?: string[]; // ✅ New
  enableClick?: boolean;
}

const COLORS = ["#22d3ee", "#3b82f6", "#ec4899", "#f59e0b", "#10b981"];
const SHAPES = ["circle", "square", "triangle", "star"];
const shapeSet = ["star", "circle", "triangle"];
const shapeChoices = ["star", "circle"]; // default


export const SparklesCore: React.FC<SparklesCoreProps> = ({
  className = "",
  background = "transparent",
  minSize = 1.5,
  maxSize = 3,
  particleDensity = 100,
  speedMultiplier = 0.4,
  flicker = true,
  glow = true,
  enableClick = true,
}) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const stableParticles: any[] = [];
    const dynamicParticles: any[] = [];

    const createStableParticles = () => {
      const area = canvas.width * canvas.height;
      const count = (area / 10000) * (particleDensity / 100);
      stableParticles.length = 0; // Clear existing
      for (let i = 0; i < count; i++) {
        stableParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: minSize + Math.random() * (maxSize - minSize),
          alpha: Math.random() * 0.8 + 0.2,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          // shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
          shape: (shapeSet || shapeChoices)[
            Math.floor(Math.random() * (shapeSet || shapeChoices).length)
          ],
        });
      }
    };

    const drawShape = (p: any) => {
      const x = p.x;
      const y = p.y;

      if (glow) {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, p.size * 4);
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
      } else {
        ctx.fillStyle = p.color;
      }

      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      switch (p.shape) {
        case "circle":
          ctx.arc(x, y, p.size, 0, 2 * Math.PI);
          break;
        case "square":
          ctx.rect(x - p.size, y - p.size, p.size * 2, p.size * 2);
          break;
        case "triangle":
          ctx.moveTo(x, y - p.size);
          ctx.lineTo(x - p.size, y + p.size);
          ctx.lineTo(x + p.size, y + p.size);
          ctx.closePath();
          break;
        case "star":
          for (let i = 0; i < 5; i++) {
            const angle = (Math.PI * 2 * i) / 5;
            const x1 = x + Math.cos(angle) * p.size;
            const y1 = y + Math.sin(angle) * p.size;
            ctx.lineTo(x1, y1);
          }
          ctx.closePath();
          break;
      }
      ctx.fill();
      ctx.globalAlpha = 1;
    };

    const spawnMouseParticles = (x: number, y: number, amount = 4) => {
      for (let i = 0; i < amount; i++) {
        dynamicParticles.push({
          x,
          y,
          size: minSize + Math.random() * (maxSize - minSize),
          speed: speedMultiplier * (0.5 + Math.random()),
          alpha: 1,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
          life: 50 + Math.random() * 50,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 🌟 Animate STABLE particles (never removed)
      stableParticles.forEach((p) => {
        if (flicker) {
          const pulse = Math.sin(Date.now() * 0.003 + p.x);
          p.alpha = 0.6 + pulse * 0.2;
        }
        drawShape(p);
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      // ✨ Animate DYNAMIC (temporary) particles
      for (let i = dynamicParticles.length - 1; i >= 0; i--) {
        const p = dynamicParticles[i];
        drawShape(p);
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 1;
        if (p.life <= 0) dynamicParticles.splice(i, 1);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      spawnMouseParticles(e.clientX - rect.left, e.clientY - rect.top, 2);
    };

    const handleClick = (e: MouseEvent) => {
      if (!enableClick) return;
      const rect = canvas.getBoundingClientRect();
      spawnMouseParticles(e.clientX - rect.left, e.clientY - rect.top, 10);
    };

    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      createStableParticles(); // recreate background particles
    };

    resize();
    createStableParticles();
    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, [
    background,
    minSize,
    maxSize,
    particleDensity,
    speedMultiplier,
    flicker,
    glow,
    enableClick,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        display: "block",
        zIndex: 0,
      }}
    />
  );
};
