"use client";
import { useEffect, useState } from "react";
import { motion, Variants, easeInOut } from "framer-motion";

// ---- CONFIG ----
const pathStrokeDuration = 0.5;
const pathDelay = 0.3;
const totalPaths = 13;
const totalDuration = pathStrokeDuration + pathDelay * (totalPaths - 1) + 0.4;

const textVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: totalDuration, duration: 0.6, ease: easeInOut },
  },
};

export default function CurtainIntro({ onFinish }: { onFinish: () => void }) {
  const [showCurtain, setShowCurtain] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowCurtain(true), 1000);
    const finishTimer = setTimeout(() => onFinish(), 7000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  const strokeVariants: Variants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 4,
        ease: [0.42, 0, 0.58, 1], // easeInOut cubic bezier
      },
    },
  };

  return (
    <>
      {/* Curtain Animation */}
      {showCurtain && (
        <motion.div
          className="fixed inset-0 bg-black z-50"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 1.2, ease: easeInOut }}
          style={{ transformOrigin: "top" }}
        />
      )}

      {/* Text + Job + Progress */}
      <motion.div
        className="fixed inset-0 z-60 flex flex-col justify-center items-center gap-4 sm:gap-6 pointer-events-none px-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        {/* SUNIL SARVAIYA text with stroke animation */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 150"
          className="w-full max-w-[28rem] sm:max-w-[32rem] h-auto"
        >
          {/* Gradient */}
          <defs>
            <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff0000" />
              <stop offset="50%" stopColor="#ff4d4d" />
              <stop offset="100%" stopColor="#ff0000" />
            </linearGradient>
          </defs>

          <motion.text
            x="50%"
            y="100"
            fontFamily="Arial, sans-serif"
            fontSize={60}
            fontWeight="bold"
            fill="transparent"
            stroke="url(#textGradient)"
            strokeWidth={2}
            textAnchor="middle"
            initial="hidden"
            animate="visible"
            variants={strokeVariants}
            style={{
              filter: "drop-shadow(0 0 10px rgba(255,0,0,0.8))",
            }}
          >
            SUNIL SARVAIYA
          </motion.text>
        </motion.svg>

        {/* Job Title */}
        <motion.h1
          className="text-white text-lg sm:text-xl font-mono tracking-wider"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Frontend Developer
        </motion.h1>

        {/* Progress Bar */}
        <div className="flex flex-col items-center mt-4 w-full max-w-xs sm:max-w-md">
          <div className="w-full h-2 bg-white/20 rounded overflow-hidden">
            <motion.div
              className="h-full bg-red-600 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: totalDuration, ease: easeInOut }}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}
