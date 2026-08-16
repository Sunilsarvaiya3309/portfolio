"use client";

import { motion } from "framer-motion";
import {
  FiArrowUp,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiCode,
} from "react-icons/fi";

export default function CyberFooter() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#030508] text-white">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      {/* Cyan glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          bottom-0
          h-72
          w-72
          rounded-full
          bg-cyan-400/[0.04]
          blur-[120px]
        "
      />

      {/* Blue glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-10
          h-80
          w-80
          rounded-full
          bg-blue-500/[0.04]
          blur-[130px]
        "
      />

      {/* Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        {/* Top line */}

        <div className="mb-12 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-400/40 sm:w-28" />

          <span className="text-[9px] uppercase tracking-[0.4em] text-cyan-400/60">
            End of the line
          </span>

          <span className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-400/40 sm:w-28" />
        </div>

        {/* =================================================
            BRAND
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center"
        >
          {/* Logo icon */}

          <motion.div
            whileHover={{
              rotate: 10,
              scale: 1.1,
            }}
            className="
              mx-auto
              mb-5
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              border
              border-cyan-400/20
              bg-cyan-400/[0.05]
              text-cyan-400
              shadow-[0_0_30px_rgba(34,211,238,0.08)]
            "
          >
            <FiCode className="text-xl" />
          </motion.div>

          {/* Name */}

          <h2
            className="
              text-3xl
              font-semibold
              tracking-[-0.04em]
              text-white
              sm:text-4xl
            "
          >
            Sunil{" "}
            <span
              className="
                text-cyan-400
                [text-shadow:0_0_25px_rgba(34,211,238,0.25)]
              "
            >
              Sarvaiya
            </span>
          </h2>

          {/* Tagline */}

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-500">
            Frontend Developer crafting modern, interactive and
            high-performance web experiences.
          </p>
        </motion.div>

        {/* =================================================
            SOCIAL LINKS
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}
          className="mt-8 flex justify-center gap-3"
        >
          {/* GitHub */}

          <SocialButton
            href="https://github.com/"
            icon={<FiGithub />}
            label="GitHub"
          />

          {/* LinkedIn */}

          <SocialButton
            href="https://www.linkedin.com/in/sunil-sarvaiya-4b9702277"
            icon={<FiLinkedin />}
            label="LinkedIn"
          />

          {/* Email */}

          <SocialButton
            href="mailto:sunilsarvaiya7989@gmail.com"
            icon={<FiMail />}
            label="Email"
          />
        </motion.div>

        {/* =================================================
            DIVIDER
        ================================================= */}

        <div className="relative my-12">
          <div className="h-px w-full bg-white/[0.06]" />

          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              absolute
              left-1/2
              top-0
              h-px
              w-32
              -translate-x-1/2
              origin-center
              bg-gradient-to-r
              from-transparent
              via-cyan-400
              to-transparent
              shadow-[0_0_10px_rgba(34,211,238,0.5)]
            "
          />
        </div>

        {/* =================================================
            BOTTOM AREA
        ================================================= */}

        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Copyright */}

          <div className="text-center sm:text-left">
            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} Sunil Sarvaiya
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-700">
              All rights reserved
            </p>
          </div>

          {/* Crafted */}

          <div className="flex items-center gap-2 text-xs text-slate-600">
            <span>Built with</span>

            <span className="text-cyan-400">code</span>

            <span>&</span>

            <span className="text-cyan-400">coffee</span>

            <motion.span
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="text-cyan-400"
            >
              _
            </motion.span>
          </div>

          {/* Back to top */}

          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{
              y: -4,
              scale: 1.05,
              boxShadow: "0 0 30px rgba(34,211,238,0.15)",
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              group
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-cyan-400/20
              bg-cyan-400/[0.04]
              px-4
              py-2.5
              text-xs
              text-cyan-400
              transition-all
              duration-300
              hover:border-cyan-400/50
              hover:bg-cyan-400/[0.08]
            "
          >
            <span>Back to top</span>

            <FiArrowUp
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-1
              "
            />
          </motion.button>
        </div>
      </div>

      {/* =====================================================
          BOTTOM GLOW LINE
      ===================================================== */}

      <motion.div
        initial={{
          scaleX: 0,
        }}
        whileInView={{
          scaleX: [0, 1, 0],
        }}
        viewport={{
          once: false,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          h-px
          w-full
          origin-center
          bg-gradient-to-r
          from-transparent
          via-cyan-400
          to-transparent
          opacity-40
        "
      />
    </footer>
  );
}

// ======================================================
// SOCIAL BUTTON
// ======================================================

function SocialButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={
        href.startsWith("http")
          ? "noopener noreferrer"
          : undefined
      }
      aria-label={label}
      whileHover={{
        y: -4,
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        border
        border-white/[0.07]
        bg-white/[0.025]
        text-slate-500
        transition-all
        duration-300
        hover:border-cyan-400/30
        hover:bg-cyan-400/[0.05]
        hover:text-cyan-400
        hover:shadow-[0_0_20px_rgba(34,211,238,0.08)]
      "
    >
      {icon}
    </motion.a>
  );
}