"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants, easeOut } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = ["About", "Skills", "Projects", "Contact"];

  // --------------------------------------------------
  // ANIMATION VARIANTS
  // --------------------------------------------------

  const menuContainer: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.25,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };

  const menuItem: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      filter: "blur(8px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      filter: "blur(6px)",
      transition: {
        duration: 0.3,
        ease: easeOut,
      },
    },
  };

  const socialContainer: Variants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.15,
        ease: easeOut,
      },
    },
    exit: {
      opacity: 0,
      y: 15,
      transition: {
        duration: 0.2,
      },
    },
  };

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      {/* ==================================================
          NAVBAR
      ================================================== */}

      <motion.nav
        initial={{
          y: -30,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          fixed
          left-0
          top-0
          z-[100]
          flex
          h-[76px]
          w-full
          items-center
          justify-between
          border-b
          border-white/[0.06]
          bg-[#030508]/75
          px-6
          backdrop-blur-xl
          sm:px-8
          lg:px-10
        "
      >
        {/* ----------------------------------------------
            TOP ACCENT
        ---------------------------------------------- */}

        <motion.div
          className="
            absolute
            left-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-cyan-400
            to-transparent
          "
          initial={{
            width: "0%",
            opacity: 0,
          }}
          animate={{
            width: "100%",
            opacity: 0.8,
          }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: easeOut,
          }}
        />

        {/* ----------------------------------------------
            LOGO
        ---------------------------------------------- */}

        <a href="#" onClick={() => setOpen(false)} className="group relative">
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="relative"
          >
            {/* Glow */}

            <span
              className="
                pointer-events-none
                absolute
                -inset-3
                rounded-xl
                bg-cyan-400/10
                opacity-0
                blur-xl
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

            {/* Logo */}

            <span
              className="
                relative
                text-xl
                font-semibold
                tracking-[0.12em]
                text-white
                sm:text-2xl
              "
            >
              SUNIL
              <span className="text-cyan-400">.</span>
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
                DEV
              </span>
            </span>

            {/* Underline */}

            <motion.span
              className="
                absolute
                -bottom-1
                left-0
                h-px
                bg-gradient-to-r
                from-cyan-400
                to-transparent
              "
              initial={{
                width: 0,
              }}
              whileHover={{
                width: "100%",
              }}
              transition={{
                duration: 0.35,
              }}
            />
          </motion.div>
        </a>

        {/* ----------------------------------------------
            RIGHT SIDE
        ---------------------------------------------- */}

        <div className="flex items-center gap-5">
          {/* Status */}

          <div className="hidden items-center gap-2 sm:flex">
            <motion.span
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [0.85, 1, 0.85],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-cyan-400
                shadow-[0_0_12px_rgba(34,211,238,0.9)]
              "
            />

            <span className="text-[9px] uppercase tracking-[0.25em] text-slate-500">
              Available
            </span>
          </div>

          {/* --------------------------------------------
              MENU BUTTON
          -------------------------------------------- */}

          <button
            type="button"
            onClick={toggleMenu}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="
              group
              relative
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/[0.08]
              bg-white/[0.025]
              outline-none
              transition-all
              duration-300
              hover:border-cyan-400/30
              hover:bg-cyan-400/[0.06]
              focus-visible:ring-2
              focus-visible:ring-cyan-400/40
            "
          >
            {/* Button glow */}

            <span
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-full
                bg-cyan-400/10
                opacity-0
                blur-xl
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            />

            {/* Hamburger */}

            <span className="relative flex w-5 flex-col items-end gap-[5px]">
              {/* Top */}

              <motion.span
                animate={
                  open
                    ? {
                        width: "20px",
                        rotate: 45,
                        y: 7,
                      }
                    : {
                        width: "20px",
                        rotate: 0,
                        y: 0,
                      }
                }
                transition={{
                  duration: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  block
                  h-[1.5px]
                  origin-center
                  rounded-full
                  bg-white
                "
              />

              {/* Middle */}

              <motion.span
                animate={
                  open
                    ? {
                        width: "0px",
                        opacity: 0,
                      }
                    : {
                        width: "12px",
                        opacity: 1,
                      }
                }
                transition={{
                  duration: 0.25,
                }}
                className="
                  block
                  h-[1.5px]
                  self-end
                  rounded-full
                  bg-cyan-400
                "
              />

              {/* Bottom */}

              <motion.span
                animate={
                  open
                    ? {
                        width: "20px",
                        rotate: -45,
                        y: -7,
                      }
                    : {
                        width: "20px",
                        rotate: 0,
                        y: 0,
                      }
                }
                transition={{
                  duration: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  block
                  h-[1.5px]
                  origin-center
                  rounded-full
                  bg-white
                "
              />
            </span>
          </button>
        </div>
      </motion.nav>

      {/* ==================================================
          FULL SCREEN MENU
      ================================================== */}

      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            key="navigation"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              fixed
              inset-0
              z-[90]
              overflow-hidden
              bg-[#030508]
              text-white
            "
          >
            {/* ==================================================
                BACKGROUND
            ================================================== */}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,#101b2f_0%,#070c16_45%,#030508_85%)]" />

            {/* Aurora center */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 0.45,
                scale: 1,
              }}
              transition={{
                duration: 1.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                absolute
                left-1/2
                top-1/2
                h-[35rem]
                w-[35rem]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-cyan-400/[0.06]
                blur-[100px]
              "
            />

            {/* Blue orb */}

            <motion.div
              animate={{
                x: [0, -30, 0],
                y: [0, 25, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -right-40
                -top-40
                h-[32rem]
                w-[32rem]
                rounded-full
                bg-blue-500/[0.08]
                blur-[90px]
              "
            />

            {/* Purple orb */}

            <motion.div
              animate={{
                x: [0, 25, 0],
                y: [0, -30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -bottom-48
                -left-48
                h-[36rem]
                w-[36rem]
                rounded-full
                bg-indigo-500/[0.08]
                blur-[100px]
              "
            />

            {/* Grid */}

            <div
              className="
                absolute
                inset-0
                opacity-[0.045]
              "
              style={{
                backgroundImage: `
                  linear-gradient(rgba(148,163,184,0.4) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(148,163,184,0.4) 1px, transparent 1px)
                `,
                backgroundSize: "70px 70px",
                maskImage:
                  "radial-gradient(ellipse at center, black 0%, transparent 75%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 0%, transparent 75%)",
              }}
            />

            {/* Vignette */}

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.6)_100%)]" />

            {/* ==================================================
                LEFT NAVIGATION LABEL
            ================================================== */}

            <div
              className="
                absolute
                left-8
                top-1/2
                hidden
                -translate-y-1/2
                md:block
              "
            >
              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                }}
                className="flex items-center gap-5"
              >
                <span className="h-16 w-px bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent" />

                <span
                  className="
                    [writing-mode:vertical-rl]
                    rotate-180
                    text-[9px]
                    uppercase
                    tracking-[0.45em]
                    text-slate-600
                  "
                >
                  Navigation
                </span>
              </motion.div>
            </div>

            {/* ==================================================
                MENU CONTENT
            ================================================== */}

            <div
              className="
                relative
                z-10
                flex
                min-h-screen
                items-center
                px-7
                pt-20
                sm:px-12
                lg:px-24
              "
            >
              <div className="w-full max-w-6xl">
                {/* Small heading */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1,
                  }}
                  className="mb-8 flex items-center gap-3"
                >
                  <span className="h-px w-8 bg-cyan-400/70" />

                  <span className="text-[9px] uppercase tracking-[0.4em] text-cyan-300/70">
                    Explore
                  </span>
                </motion.div>

                {/* ----------------------------------------------
                    LINKS
                ---------------------------------------------- */}

                <motion.div
                  variants={menuContainer}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="
                    flex
                    flex-col
                    items-start
                    gap-3
                    sm:gap-5
                  "
                >
                  {menuItems.map((text, index) => (
                    <MagneticLink
                      key={text}
                      text={text}
                      index={index}
                      setOpen={setOpen}
                      variants={menuItem}
                    />
                  ))}
                </motion.div>

                {/* ----------------------------------------------
                    DIVIDER
                ---------------------------------------------- */}

                <motion.div
                  initial={{
                    scaleX: 0,
                    opacity: 0,
                  }}
                  animate={{
                    scaleX: 1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.75,
                    ease: easeOut,
                  }}
                  className="
                    mt-10
                    h-px
                    w-full
                    origin-left
                    bg-gradient-to-r
                    from-white/10
                    via-white/[0.05]
                    to-transparent
                    sm:mt-14
                  "
                />

                {/* ----------------------------------------------
                    SOCIAL
                ---------------------------------------------- */}

                <motion.div
                  variants={socialContainer}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="
                    mt-7
                    flex
                    flex-col
                    gap-5
                    sm:mt-9
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <div>
                    <p className="mb-1 text-[9px] uppercase tracking-[0.3em] text-slate-600">
                      Get in touch
                    </p>

                    <p className="text-sm font-light text-slate-400">
                      Let's create something meaningful.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <SocialLink
                      href="mailto:sunilsarvaiya7989@gmail.com"
                      icon={<FaEnvelope />}
                      label="Email"
                    />

                    <SocialLink
                      href="https://www.linkedin.com/in/sunil-sarvaiya-4b9702277"
                      icon={<FaLinkedin />}
                      label="LinkedIn"
                      external
                    />

                    <SocialLink
                      href="tel:+919727808076"
                      icon={<FaPhone />}
                      label="Phone"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* ==================================================
                FOOTER DETAILS
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1,
                duration: 0.8,
              }}
              className="
                absolute
                bottom-7
                left-7
                right-7
                flex
                items-center
                justify-between
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-slate-700
                sm:left-10
                sm:right-10
              "
            >
              <span>Sunil Sarvaiya</span>

              <span className="hidden sm:block">
                Design · Code · Experience
              </span>

              <span>2026</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ======================================================
// MAGNETIC MENU LINK
// ======================================================

function MagneticLink({
  text,
  index,
  setOpen,
  variants,
}: {
  text: string;
  index: number;
  setOpen: (value: boolean) => void;
  variants: Variants;
}) {
  return (
    <motion.a
      variants={variants}
      href={`#${text.toLowerCase()}`}
      onClick={() => setOpen(false)}
      whileHover="hover"
      className="
        group
        relative
        flex
        cursor-pointer
        items-center
        gap-4
        select-none
      "
    >
      {/* Number */}

      <motion.span
        variants={{
          initial: {
            opacity: 0.25,
            color: "#64748b",
          },
          hover: {
            opacity: 1,
            color: "#22d3ee",
          },
        }}
        initial="initial"
        className="
          hidden
          w-6
          text-[9px]
          font-medium
          tracking-[0.2em]
          sm:block
        "
      >
        0{index + 1}
      </motion.span>

      {/* Link */}

      <motion.span
        variants={{
          initial: {
            x: 0,
            color: "#ffffff",
          },
          hover: {
            x: 20,
            color: "#67e8f9",
          },
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="
          relative
          text-4xl
          font-semibold
          leading-none
          tracking-[-0.04em]
          sm:text-6xl
          md:text-7xl
          lg:text-[5.5rem]
        "
      >
        {text}

        {/* Hover line */}

        <motion.span
          variants={{
            initial: {
              width: 0,
              opacity: 0,
            },
            hover: {
              width: "70%",
              opacity: 1,
            },
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            absolute
            -bottom-2
            left-0
            h-[2px]
            bg-gradient-to-r
            from-cyan-400
            to-transparent
          "
        />
      </motion.span>

      {/* Arrow */}

      <motion.span
        variants={{
          initial: {
            opacity: 0,
            x: -10,
          },
          hover: {
            opacity: 1,
            x: 5,
          },
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="
          text-xl
          text-cyan-400
          sm:text-2xl
        "
      >
        ↗
      </motion.span>
    </motion.a>
  );
}

// ======================================================
// SOCIAL LINK
// ======================================================

function SocialLink({
  href,
  icon,
  label,
  external = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
}) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{
        y: -4,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="
        group
        flex
        items-center
        gap-2.5
        rounded-full
        border
        border-white/[0.08]
        bg-white/[0.025]
        px-4
        py-2.5
        text-xs
        text-slate-400
        transition-colors
        duration-300
        hover:border-cyan-400/30
        hover:bg-cyan-400/[0.06]
        hover:text-cyan-300
      "
    >
      <span
        className="
          text-cyan-400/70
          transition-colors
          duration-300
          group-hover:text-cyan-300
        "
      >
        {icon}
      </span>

      <span>{label}</span>
    </motion.a>
  );
}
