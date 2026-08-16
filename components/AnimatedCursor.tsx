"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function AnimatedCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cursorX = useSpring(mouseX, {
    stiffness: 180,
    damping: 22,
    mass: 0.5,
  });

  const cursorY = useSpring(mouseY, {
    stiffness: 180,
    damping: 22,
    mass: 0.5,
  });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Don't run on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const interactive = target.closest(
        "a, button, input, textarea, select, [role='button']"
      );

      setIsHovering(!!interactive);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* =====================================================
          OUTER GLOW
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]
          hidden
          h-12
          w-12
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          sm:block
        "
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 0.18 : 0.1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
      >
        <div className="h-full w-full rounded-full bg-cyan-400 blur-xl" />
      </motion.div>

      {/* =====================================================
          MAIN CURSOR
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[10000]
          hidden
          h-8
          w-8
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-cyan-400/70
          sm:flex
        "
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovering ? 1.6 : 1,
          borderColor: isHovering
            ? "rgba(34,211,238,0.95)"
            : "rgba(34,211,238,0.65)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        {/* Inner glow */}

        <motion.div
          className="
            absolute
            inset-0
            rounded-full
            border
            border-cyan-300/20
          "
          animate={{
            rotate: 360,
            scale: isHovering ? 1.15 : 1,
          }}
          transition={{
            rotate: {
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 0.25,
            },
          }}
        />

        {/* Center dot */}

        <motion.div
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-cyan-300
            shadow-[0_0_8px_rgba(103,232,249,1),0_0_18px_rgba(34,211,238,0.8)]
          "
          animate={{
            scale: isHovering
              ? [1, 1.4, 1]
              : [1, 1.25, 1],
            opacity: [1, 0.65, 1],
          }}
          transition={{
            duration: isHovering ? 0.7 : 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </>
  );
}