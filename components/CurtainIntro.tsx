"use client";

import { useEffect, useState } from "react";
import { motion, Variants, easeOut, useReducedMotion } from "framer-motion";

// --------------------------------------------------
// CONFIG
// --------------------------------------------------

const introDuration = 5000;

const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
    filter: "blur(14px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const subtitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.45,
      ease: easeOut,
    },
  },
};

const labelVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.15,
      ease: easeOut,
    },
  },
};

export default function CurtainIntro({ onFinish }: { onFinish: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [started, setStarted] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setIsVisible(false);
      onFinish();
      return;
    }

    const startTimer = setTimeout(() => {
      setStarted(true);
    }, 100);

    const finishTimer = setTimeout(() => {
      setIsVisible(false);
      onFinish();
    }, introDuration);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish, shouldReduceMotion]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-hidden bg-[#030508]"
      initial={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      animate={{
        opacity: 0,
        scale: 1.035,
        filter: "blur(8px)",
      }}
      transition={{
        duration: 0.9,
        delay: 4.15,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      {/* ==================================================
          BASE BACKGROUND
      ================================================== */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,#101b2f_0%,#070c16_42%,#030508_80%)]" />

      {/* ==================================================
          AURORA GLOWS
      ================================================== */}

      <motion.div
        className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
        initial={{
          opacity: 0,
          scale: 0.45,
        }}
        animate={{
          opacity: [0, 0.55, 0.35],
          scale: [0.45, 1.05, 1],
        }}
        transition={{
          duration: 3.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.18) 0%, rgba(59,130,246,0.12) 32%, rgba(99,102,241,0.06) 50%, transparent 72%)",
          filter: "blur(35px)",
        }}
      />

      <motion.div
        className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full"
        animate={{
          x: [0, -25, 0],
          y: [0, 30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.16), rgba(59,130,246,0.08) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <motion.div
        className="absolute -bottom-48 -left-48 h-[36rem] w-[36rem] rounded-full"
        animate={{
          x: [0, 35, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.15), rgba(139,92,246,0.07) 45%, transparent 72%)",
          filter: "blur(70px)",
        }}
      />

      {/* ==================================================
          GRID
      ================================================== */}

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.055 }}
        transition={{ duration: 1.8 }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(148,163,184,0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,0.35) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 72%)",
        }}
      />

      {/* ==================================================
          TOP / BOTTOM VIGNETTE
      ================================================== */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(0,0,0,0.45)_100%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />

      {/* ==================================================
          CORNER INFORMATION
      ================================================== */}

      <motion.div
        className="absolute left-7 top-7 hidden items-center gap-3 text-[9px] uppercase tracking-[0.32em] text-slate-500 sm:flex"
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.8,
          duration: 0.7,
        }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
        <span>Portfolio / 2026</span>
      </motion.div>

      <motion.div
        className="absolute bottom-7 right-7 hidden text-[9px] uppercase tracking-[0.3em] text-slate-600 sm:block"
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 1,
          duration: 0.7,
        }}
      >
        Design · Code · Experience
      </motion.div>

      {/* ==================================================
          CENTER
      ================================================== */}

      <main className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="flex w-full max-w-5xl flex-col items-center text-center">
          {/* ----------------------------------------------
              WELCOME LABEL
          ---------------------------------------------- */}

          <motion.div
            variants={labelVariants}
            initial="hidden"
            animate={started ? "visible" : "hidden"}
            className="mb-7 flex items-center gap-3"
          >
            <motion.span
              className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400 sm:w-14"
              initial={{ width: 0, opacity: 0 }}
              animate={
                started
                  ? {
                      width: undefined,
                      opacity: 1,
                    }
                  : {}
              }
              transition={{ duration: 0.7 }}
            />

            <span className="text-[10px] font-medium uppercase tracking-[0.45em] text-cyan-300/80 sm:text-xs">
              Welcome
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400 sm:w-14" />
          </motion.div>

          {/* ----------------------------------------------
              NAME
          ---------------------------------------------- */}

          <div className="relative">
            {/* Soft glow behind name */}

            <motion.div
              className="absolute inset-x-[15%] top-1/2 h-24 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: started ? 1 : 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />

            <motion.h1
              variants={titleVariants}
              initial="hidden"
              animate={started ? "visible" : "hidden"}
              className="relative text-[2.7rem] font-semibold leading-none tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[6.4rem]"
            >
              SUNIL{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
                  SARVAIYA
                </span>

                {/* Subtle text highlight */}
                <motion.span
                  className="absolute -inset-1 -z-10 bg-cyan-400/10 blur-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: started ? 0.7 : 0 }}
                  transition={{ duration: 1.5, delay: 1 }}
                />
              </span>
            </motion.h1>

            {/* Light sweep */}

            <motion.div
              className="pointer-events-none absolute inset-y-0 -left-[20%] w-[12%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm"
              initial={{ x: "-100%" }}
              animate={{ x: "900%" }}
              transition={{
                duration: 1.3,
                delay: 1.25,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* ----------------------------------------------
              ROLE
          ---------------------------------------------- */}

          <motion.div
            variants={subtitleVariants}
            initial="hidden"
            animate={started ? "visible" : "hidden"}
            className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:gap-5"
          >
            <span className="text-xs font-medium tracking-[0.28em] text-slate-200 sm:text-sm">
              FRONTEND DEVELOPER
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] sm:block" />

            <span className="text-[10px] tracking-[0.22em] text-slate-500 sm:text-xs">
              CREATIVE DIGITAL EXPERIENCES
            </span>
          </motion.div>

          {/* ----------------------------------------------
              LOADING
          ---------------------------------------------- */}

          <motion.div
            className="mt-12 w-full max-w-xs sm:mt-14 sm:max-w-md"
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={
              started
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.7,
              delay: 0.65,
            }}
          >
            <div className="mb-3 flex items-center justify-between text-[8px] uppercase tracking-[0.3em] text-slate-600">
              <span>Initializing</span>
              <span>Portfolio</span>
            </div>

            {/* Track */}

            <div className="relative h-[2px] w-full overflow-hidden bg-white/[0.08]">
              {/* Progress */}

              <motion.div
                className="absolute inset-y-0 left-0 origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 3.4,
                  delay: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              {/* Moving glow */}

              <motion.div
                className="absolute -inset-y-2 left-0 w-24 bg-cyan-300/50 blur-md"
                initial={{ x: "-120%" }}
                animate={{ x: "520%" }}
                transition={{
                  duration: 3.4,
                  delay: 0.45,
                  ease: "linear",
                }}
              />
            </div>

            {/* Loading dots */}

            <div className="mt-4 flex justify-center gap-1.5">
              {[0, 1, 2].map((item) => (
                <motion.span
                  key={item}
                  className="h-1 w-1 rounded-full bg-cyan-400"
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: item * 0.18,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* ==================================================
          BOTTOM ACCENT
      ================================================== */}

      <motion.div
        className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
        animate={{
          width: started ? "45%" : "0%",
        }}
        transition={{
          duration: 2,
          delay: 0.5,
          ease: easeOut,
        }}
      />
    </motion.div>
  );
}
