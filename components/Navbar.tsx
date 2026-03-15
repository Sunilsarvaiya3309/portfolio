"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa"; // social icons

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.25 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 14 },
    },
  };

  const menuItems = ["About", "Skills", "Projects", "Contact"];

  return (
    <>
      {/* Header */}
      <nav className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-8 bg-black text-white z-50 shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-b border-red-500/20">
        <h1 className="text-2xl font-extrabold tracking-widest text-red-500 drop-shadow-[0_0_12px_rgba(255,0,0,0.7)] select-none">
          SUNIL.DEV
        </h1>

        <button
          onClick={toggleMenu}
          className="space-y-1 outline-none cursor-pointer focus:outline-none"
        >
          {/* Top line */}
          <motion.span
            animate={open ? { width: "16px", x: 0 } : { width: "24px", x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="block h-[2px] bg-white origin-left"
          />

          {/* Middle line */}
          <motion.span
            animate={open ? { width: "24px", x: 0 } : { width: "12px", x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="block h-[2px] bg-white origin-left"
          />

          {/* Bottom line */}
          <motion.span
            animate={open ? { width: "16px", x: 0 } : { width: "24px", x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="block h-[2px] bg-white origin-left"
          />
        </button>
      </nav>

      {/* Menu */}
      <AnimatePresence mode="sync">
        {open && (
          <motion.div
            key="menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 70, damping: 16 }}
            className="fixed inset-0 bg-black text-white z-40 flex flex-col md:flex-row shadow-2xl"
          >
            {/* Left Text */}
            <div className="hidden md:flex items-center justify-center w-1/4 border-r border-gray-800">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ delay: 0.4 }}
                className="rotate-[-90deg] text-7xl font-bold tracking-widest"
              >
                NAVIGATION
              </motion.h2>
            </div>

            {/* Menu Links */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 flex flex-col justify-center items-start pl-8 lg:pl-24 sm:text-5xl text-4xl lg:text-6xl font-bold sm:space-y-10 space-y-6"
            >
              {menuItems.map((text) => (
                <MagneticLink
                  key={text}
                  text={text}
                  setOpen={setOpen}
                  variants={item}
                />
              ))}

              {/* Divider */}
              <div className="w-full border-t border-gray-700"></div>

              {/* Social Section */}
              <motion.div
                variants={container}
                className="flex flex-col space-y-6 text-xl"
              >
                <p className="text-gray-400 font-light">Connect with me:</p>
                <div className="flex gap-4 flex-wrap">
                  <a
                    href="mailto:sunilsarvaiya7989@gmail.com"
                    className="flex items-center space-x-2 hover:text-red-500 transition-colors"
                  >
                    <FaEnvelope /> <span>Email</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sunil-sarvaiya-4b9702277"
                    target="_blank"
                    className="flex items-center space-x-2 hover:text-red-500 transition-colors"
                  >
                    <FaLinkedin /> <span>LinkedIn</span>
                  </a>
                  <a
                    href="tel:+919727808076"
                    className="flex items-center space-x-2 hover:text-red-500 transition-colors"
                  >
                    <FaPhone /> <span>Phone</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MagneticLink({
  text,
  setOpen,
  variants,
}: {
  text: string;
  setOpen: (v: boolean) => void;
  variants: Variants;
}) {
  return (
    <motion.a
      variants={variants}
      href={`#${text.toLowerCase()}`}
      onClick={() => setOpen(false)}
      whileHover={{
        x: 35,
        scale: 1.05,
        color: "#ff0000",
        transition: { type: "spring", stiffness: 300 },
      }}
      className="cursor-pointer select-none"
    >
      {text}
    </motion.a>
  );
}
