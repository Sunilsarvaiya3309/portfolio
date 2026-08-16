"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
};

export default function NavbarParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrame: number;

    // =====================================================
    // RESPONSIVE PARTICLE COUNT
    // =====================================================

    const getParticleCount = () => {
      if (width < 640) return 45;
      if (width < 1024) return 80;
      return 120;
    };

    // =====================================================
    // CANVAS SETUP
    // =====================================================

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();

    // =====================================================
    // MOUSE
    // =====================================================

    const mouse = {
      x: width / 2,
      y: height / 2,
      radius: 180,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // =====================================================
    // PARTICLES
    // =====================================================

    const particles: Particle[] = [];

    const createParticles = () => {
      particles.length = 0;

      const count = getParticleCount();

      for (let i = 0; i < count; i++) {
        const isBlue = Math.random() > 0.5;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,

          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,

          size: Math.random() * 1.8 + 0.7,

          color: isBlue
            ? "rgba(59,130,246,"
            : "rgba(34,211,238,",
        });
      }
    };

    createParticles();

    // =====================================================
    // DRAW GLOW PARTICLE
    // =====================================================

    const drawParticle = (particle: Particle) => {
      const gradient = ctx.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        particle.size * 5
      );

      gradient.addColorStop(
        0,
        `${particle.color}0.9)`
      );

      gradient.addColorStop(
        0.4,
        `${particle.color}0.3)`
      );

      gradient.addColorStop(
        1,
        `${particle.color}0)`
      );

      ctx.beginPath();

      ctx.arc(
        particle.x,
        particle.y,
        particle.size * 5,
        0,
        Math.PI * 2
      );

      ctx.fillStyle = gradient;
      ctx.fill();

      // Core

      ctx.beginPath();

      ctx.arc(
        particle.x,
        particle.y,
        particle.size,
        0,
        Math.PI * 2
      );

      ctx.fillStyle = `${particle.color}0.8)`;
      ctx.fill();
    };

    // =====================================================
    // CONNECTION LINE
    // =====================================================

    const drawConnection = (
      p1: Particle,
      p2: Particle,
      distance: number
    ) => {
      const maxDistance = 110;

      const opacity =
        (1 - distance / maxDistance) * 0.16;

      const gradient = ctx.createLinearGradient(
        p1.x,
        p1.y,
        p2.x,
        p2.y
      );

      gradient.addColorStop(
        0,
        `rgba(34,211,238,${opacity})`
      );

      gradient.addColorStop(
        1,
        `rgba(59,130,246,${opacity})`
      );

      ctx.beginPath();

      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 0.6;

      ctx.stroke();
    };

    // =====================================================
    // ANIMATION
    // =====================================================

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // -----------------------------------------------
      // UPDATE PARTICLES
      // -----------------------------------------------

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Screen wrapping

        if (particle.x < -10) {
          particle.x = width + 10;
        }

        if (particle.x > width + 10) {
          particle.x = -10;
        }

        if (particle.y < -10) {
          particle.y = height + 10;
        }

        if (particle.y > height + 10) {
          particle.y = -10;
        }

        // ---------------------------------------------
        // MOUSE INTERACTION
        // ---------------------------------------------

        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;

        const distance = Math.sqrt(
          dx * dx + dy * dy
        );

        if (
          distance < mouse.radius &&
          distance > 0
        ) {
          const force =
            (mouse.radius - distance) /
            mouse.radius;

          particle.x +=
            (dx / distance) *
            force *
            0.35;

          particle.y +=
            (dy / distance) *
            force *
            0.35;
        }
      });

      // -----------------------------------------------
      // PARTICLE CONNECTIONS
      // -----------------------------------------------

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        for (
          let j = i + 1;
          j < particles.length;
          j++
        ) {
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (distance < 110) {
            drawConnection(
              p1,
              p2,
              distance
            );
          }
        }
      }

      // -----------------------------------------------
      // MOUSE CONNECTIONS
      // -----------------------------------------------

      particles.forEach((particle) => {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;

        const distance = Math.sqrt(
          dx * dx + dy * dy
        );

        if (distance < 160) {
          const opacity =
            (1 - distance / 160) * 0.25;

          ctx.beginPath();

          ctx.moveTo(
            particle.x,
            particle.y
          );

          ctx.lineTo(
            mouse.x,
            mouse.y
          );

          ctx.strokeStyle = `rgba(34,211,238,${opacity})`;

          ctx.lineWidth = 0.7;

          ctx.stroke();
        }
      });

      // -----------------------------------------------
      // DRAW PARTICLES
      // -----------------------------------------------

      particles.forEach(drawParticle);

      animationFrame =
        requestAnimationFrame(draw);
    };

    draw();

    // =====================================================
    // RESIZE
    // =====================================================

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "resize",
      handleResize
    );

    // =====================================================
    // CLEANUP
    // =====================================================

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        h-full
        w-full
        opacity-80
      "
    />
  );
}