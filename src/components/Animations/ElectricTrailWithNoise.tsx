"use client";

import React, {useEffect, useRef} from "react";

const COLORS = ["#00ffff", "#00eaff", "#00cfff", "#0088ff"];

export const ElectricTrailWithNoise: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles: any[] = [];

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animationId: number;
    let time = 0;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Sound burst using Web Audio API
    const playBurstSound = () => {
      const ctx = new AudioContext();
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();

      oscillator.type = "sawtooth";
      oscillator.frequency.setValueAtTime(
        800 + Math.random() * 400,
        ctx.currentTime
      );
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);

      oscillator.connect(gain);
      gain.connect(ctx.destination);
      oscillator.start();
      oscillator.stop(ctx.currentTime + 0.3);
    };

    const spawnParticles = (x: number, y: number, amount = 10) => {
      for (let i = 0; i < amount; i++) {
        particles.push({
          x,
          y,
          angle: Math.random() * 2 * Math.PI,
          speed: Math.random() * 3 + 1,
          size: Math.random() * 2 + 1,
          alpha: 1,
          life: 60,
          noiseOffset: Math.random() * 100,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
    };

    const animate = () => {
      time += 0.01;

      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Sinusoidal wiggle (fake noise curve)
        const curve = Math.sin(p.noiseOffset + time * 5);
        p.x += Math.cos(p.angle) * p.speed + curve * 0.5;
        p.y += Math.sin(p.angle) * p.speed + curve * 0.5;

        p.alpha -= 0.015;
        p.life--;

        ctx.beginPath();
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
      spawnParticles(x, y, 5);
    };

    const handleClick = (e: MouseEvent | TouchEvent) => {
      const x = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
      const y = e instanceof TouchEvent ? e.touches[0].clientY : e.clientY;
      spawnParticles(x, y, 25);
      playBurstSound();
    };

    animate();

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleClick);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("touchstart", handleClick);
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleClick);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchstart", handleClick);
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
