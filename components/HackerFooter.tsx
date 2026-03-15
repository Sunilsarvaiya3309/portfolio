"use client";

import { motion } from "framer-motion";

export default function CyberFooter() {
  return (
    <motion.div className="w-full bg-black space-y-4 text-white text-center py-16 font-mono border-t border-red-600">
      {/* Glowing animated copyright */}
      <motion.p
        className="text-lg select-none tracking-widest"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{ textShadow: "0 0 8px #ff0000, 0 0 12px #ff4d4d" }}
      >
        &copy; {new Date().getFullYear()} Sunil Sarvaiya Portfolio. All rights
        reserved.
      </motion.p>

      {/* Pulsing hacker-style underscore */}
      <motion.p
        className="text-sm mt-2 uppercase tracking-wider flex justify-center items-center gap-1 opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span className="inline-block text-red-500 animate-pulse">_</span>
        Crafted with <span className="text-red-400">code</span> &{" "}
        <span className="text-red-400">coffee</span>
      </motion.p>

      {/* Sliding underline effect */}
      <motion.div
        className="h-1 w-24 bg-red-500 mx-auto mt-3 rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
