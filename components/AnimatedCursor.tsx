"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cursorX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const cursorY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border-2 border-red-500 rounded-full pointer-events-none z-[9999] flex items-center justify-center"
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
    >
      {/* Center animated dot */}
      <motion.div
        className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [1, 0.6, 1],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
