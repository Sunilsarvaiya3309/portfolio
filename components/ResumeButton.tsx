"use client";

import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

export default function ResumeButton() {
  return (
    <div className="fixed bottom-8 sm:right-8 right-2 z-[100] group flex flex-col items-center">
      {/* Tooltip */}
      <div className="absolute right-0 bottom-20 w-32 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
        <div className="bg-zinc-900 text-white text-center text-xs px-3 py-1 rounded-md border border-red-500 shadow-lg">
          DOWNLOAD CV
        </div>

        {/* arrow */}
        <div className="w-2 h-2 bg-zinc-900 border-l border-b border-red-500 -rotate-45 mx-auto -mt-1"></div>
      </div>

      {/* Button */}
      <motion.a
        href="/resume/sunil-sarvaiya-resume.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="cursor-pointer"
      >
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="relative flex flex-col items-center justify-center w-16 h-16 rounded-full text-white overflow-hidden shadow-xl"
        >
          {/* background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-red-400"></div>

          {/* glow pulse */}
          <motion.div
            className="absolute w-full h-full rounded-full"
            animate={{
              boxShadow: [
                "0 0 0px rgba(239,68,68,0)",
                "0 0 25px rgba(239,68,68,0.8)",
                "0 0 0px rgba(239,68,68,0)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* ripple */}
          <motion.div
            className="absolute w-20 h-20 border border-white/20 rounded-full"
            animate={{ scale: [0.7, 1.5], opacity: [0.6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />

          {/* icon */}
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="relative z-10"
          >
            <FiDownload className="text-xl" />
          </motion.div>

          {/* text */}
          <span className="text-[10px] tracking-wider relative z-10">
            RESUME
          </span>
        </motion.div>
      </motion.a>
    </div>
  );
}
