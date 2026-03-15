"use client";

import { motion, Variants, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import NavbarParticles from "@/components/NavbarParticles";
import Image from "next/image";
import { scrollToId } from "./SmoothScroll";

// Motion Variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const item: Variants = {
  hidden: { y: 60, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(mouseY, { stiffness: 120, damping: 15 });
  const rotateY = useSpring(mouseX, { stiffness: 120, damping: 15 });

  return (
    <section
      className="h-screen flex items-center py-20 sm:py-40 justify-center relative overflow-hidden bg-black"
      onMouseMove={(e) => {
        const { innerWidth, innerHeight } = window;

        const x = e.clientX - innerWidth / 2;
        const y = e.clientY - innerHeight / 2;

        mouseX.set(x / 28);
        mouseY.set(-y / 28);
      }}
    >
      <NavbarParticles />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col lg:flex-row sm:pt-0 pt-24 items-center gap-6 sm:gap-12"
      >
        {/* Profile Image */}
        <motion.div
          variants={item}
          style={{
            rotateX,
            rotateY,
            transformPerspective: 800,
          }}
        >
          <div className="relative w-36 sm:w-56 lg:w-72 h-36 sm:h-56 lg:h-72">
            <Image
              src="/profile/sunil.jpeg"
              alt="Sunil Sarvaiya"
              fill
              className="rounded-full border-4 border-red-500 shadow-[0_0_30px_rgba(255,0,0,0.8)] object-cover"
            />
          </div>
        </motion.div>

        {/* Text */}
        <div className="text-center lg:text-left px-4 sm:px-0">
          <motion.h1 className="text-[clamp(2.5rem,5vw,4.5rem)] uppercase font-extrabold text-red-500 drop-shadow-[0_0_20px_rgba(255,0,0,0.8)] flex justify-center lg:justify-start cursor-default">
            {"Sunil Sarvaiya".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 120,
                  damping: 12,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.25,
                  color: "#ff0000",
                  textShadow: `
                    0 0 5px #ffffff,
                    0 0 10px #ffffff,
                    0 0 20px #ffffff,
                    0 0 30px #ffffff,
                    0 0 40px #ffffff
                  `,
                  transition: { type: "spring", stiffness: 500, damping: 18 },
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-white font-bold text-xl sm:text-3xl"
          >
            <Typewriter
              words={[
                "Vue.js Developer",
                "React.js Developer",
                "Next.js Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 text-white font-medium text-sm sm:text-base max-w-xs sm:max-w-xl mx-auto lg:mx-0"
          >
            I am a Frontend Developer with over 2 years of experience building
            responsive, user-friendly web applications. I specialize in
            React.js, Next.js, and modern UI development, delivering
            high-quality digital experiences.
          </motion.p>

          <motion.div className="mt-8 flex gap-4 sm:gap-6 flex-wrap justify-center lg:justify-start">
            <motion.a
              onClick={() => scrollToId("projects")}
              className="relative inline-block px-6 py-3 rounded-lg font-bold text-white border-2 border-red-500 overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <span className="absolute inset-0 rounded-lg bg-red-600 opacity-20 animate-pulse"></span>
              <span className="relative z-10">View Projects</span>
            </motion.a>

            <motion.a
              onClick={() => scrollToId("contact")}
              className="relative inline-block px-6 py-3 rounded-lg font-mono text-black bg-white shadow-[0_0_10px_rgba(255,0,0,0.7)] overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <span className="absolute inset-0 bg-red-500 opacity-20 animate-pulse"></span>
              <span className="relative z-10">Get In Touch</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
