"use client";

import {
  motion,
  Variants,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import NavbarParticles from "@/components/NavbarParticles";
import Image from "next/image";
import { scrollToId } from "./SmoothScroll";

// ======================================================
// ANIMATION VARIANTS
// ======================================================

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.25,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    y: 50,
    filter: "blur(15px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const letterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 70,
    rotateX: -90,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 13,
    },
  },
};

// ======================================================
// HERO
// ======================================================

export default function Hero() {
  // ----------------------------------------------------
  // MOUSE PARALLAX
  // ----------------------------------------------------

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  const rotateX = useTransform(smoothY, [-30, 30], [8, -8]);
  const rotateY = useTransform(smoothX, [-30, 30], [-8, 8]);

  const imageX = useTransform(smoothX, [-30, 30], [-10, 10]);
  const imageY = useTransform(smoothY, [-30, 30], [-10, 10]);

  const contentX = useTransform(smoothX, [-30, 30], [5, -5]);
  const contentY = useTransform(smoothY, [-30, 30], [5, -5]);

  // ----------------------------------------------------
  // MOUSE MOVE
  // ----------------------------------------------------

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { innerWidth, innerHeight } = window;

    const x = e.clientX / innerWidth - 0.5;
    const y = e.clientY / innerHeight - 0.5;

    mouseX.set(x * 30);
    mouseY.set(y * 30);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // ----------------------------------------------------
  // NAME
  // ----------------------------------------------------

  const name = "SUNIL SARVAIYA";

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
    relative
    min-h-[100svh]
    w-full
    overflow-hidden
    bg-[#030508]
    text-white
  "
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#101b2f_0%,#070c16_42%,#030508_85%)]" />

      {/* Aurora */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
      pointer-events-none
      absolute
      -left-32
      top-10
      h-72
      w-72
      rounded-full
      bg-cyan-500/[0.07]
      blur-[90px]
      sm:h-[28rem]
      sm:w-[28rem]
      lg:h-[32rem]
      lg:w-[32rem]
    "
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 35, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
      pointer-events-none
      absolute
      -right-32
      top-20
      h-80
      w-80
      rounded-full
      bg-blue-500/[0.08]
      blur-[100px]
      sm:h-[30rem]
      sm:w-[30rem]
      lg:h-[35rem]
      lg:w-[35rem]
    "
      />

      {/* Grid */}
      <div
        className="
      pointer-events-none
      absolute
      inset-0
      opacity-[0.035]
    "
        style={{
          backgroundImage: `
        linear-gradient(rgba(148,163,184,0.35) 1px, transparent 1px),
        linear-gradient(90deg, rgba(148,163,184,0.35) 1px, transparent 1px)
      `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 75%)",
        }}
      />

      {/* Particles */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <NavbarParticles />
      </div>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(0,0,0,0.6)_100%)]" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="
      relative
      z-10
      flex
      min-h-[100svh]
      items-center
      px-5
      pb-16
      pt-28
      sm:px-8
      sm:pt-32
      lg:px-12
      xl:px-16
    "
      >
        <div
          className="
        mx-auto
        flex
        w-full
        max-w-7xl
        flex-col
        items-center
        gap-12
        xl:flex-row
        xl:items-center
        xl:justify-between
        xl:gap-16
      "
        >
          {/* =================================================
          PROFILE
      ================================================= */}

          <motion.div
            variants={imageVariants}
            style={{
              rotateX,
              rotateY,
              x: imageX,
              y: imageY,
              transformPerspective: 1000,
            }}
            className="
          relative
          flex
          h-[18rem]
          w-[18rem]
          shrink-0
          items-center
          justify-center
          sm:h-[23rem]
          sm:w-[23rem]
          lg:h-[26rem]
          lg:w-[26rem]
          xl:h-[30rem]
          xl:w-[30rem]
        "
          >
            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
            absolute
            h-[17rem]
            w-[17rem]
            rounded-full
            border
            border-cyan-400/20
            sm:h-[21rem]
            sm:w-[21rem]
            lg:h-[24rem]
            lg:w-[24rem]
            xl:h-[28rem]
            xl:w-[28rem]
          "
            >
              <span
                className="
              absolute
              left-1/2
              top-0
              h-1.5
              w-1.5
              -translate-x-1/2
              rounded-full
              bg-cyan-300
              shadow-[0_0_15px_rgba(34,211,238,1)]
              sm:h-2
              sm:w-2
            "
              />
            </motion.div>

            {/* Inner ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
            absolute
            h-[14rem]
            w-[14rem]
            rounded-full
            border
            border-blue-400/20
            sm:h-[18rem]
            sm:w-[18rem]
            lg:h-[21rem]
            lg:w-[21rem]
            xl:h-[25rem]
            xl:w-[25rem]
          "
            >
              <span
                className="
              absolute
              bottom-3
              right-5
              h-1.5
              w-1.5
              rounded-full
              bg-blue-400
              shadow-[0_0_14px_rgba(59,130,246,1)]
            "
              />
            </motion.div>

            {/* Glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
            absolute
            h-40
            w-40
            rounded-full
            bg-cyan-400/20
            blur-[60px]
            sm:h-56
            sm:w-56
            lg:h-72
            lg:w-72
          "
            />

            {/* Image */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
            relative
            h-36
            w-36
            overflow-hidden
            rounded-full
            sm:h-52
            sm:w-52
            lg:h-60
            lg:w-60
            xl:h-72
            xl:w-72
          "
            >
              <div
                className="
              absolute
              -inset-[3px]
              rounded-full
              bg-gradient-to-br
              from-cyan-300
              via-blue-500
              to-indigo-600
            "
              />

              <div
                className="
              absolute
              inset-[4px]
              overflow-hidden
              rounded-full
              bg-[#050914]
            "
              >
                <Image
                  src="/profile/sunil.jpeg"
                  alt="Sunil Sarvaiya"
                  fill
                  priority
                  sizes="
                (max-width: 640px) 144px,
                (max-width: 1024px) 240px,
                288px
              "
                  className="
                object-cover
                grayscale-[15%]
                transition-transform
                duration-700
                hover:scale-110
                hover:grayscale-0
              "
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cyan-950/30 via-transparent to-white/5" />
              </div>
            </motion.div>

            {/* Badges */}
            <FloatingBadge
              text="React"
              className="
            left-0
            top-[18%]
            sm:left-[-15px]
            lg:left-[-25px]
          "
              delay={0}
            />

            <FloatingBadge
              text="Next.js"
              className="
            bottom-[15%]
            right-0
            sm:right-[-15px]
            lg:right-[-25px]
          "
              delay={0.7}
            />

            <FloatingBadge
              text="UI/UX"
              className="
            right-[5%]
            top-[5%]
            sm:right-[0]
            lg:right-[-10px]
          "
              delay={1.2}
            />
          </motion.div>

          {/* =================================================
          CONTENT
      ================================================= */}

          <motion.div
            variants={container}
            style={{
              x: contentX,
              y: contentY,
            }}
            className="
          flex
          w-full
          max-w-3xl
          flex-col
          items-center
          text-center
          xl:items-start
          xl:text-left
        "
          >
            {/* Label */}
            <motion.div
              variants={fadeUp}
              className="mb-4 flex items-center gap-3 sm:mb-5"
            >
              <span className="h-px w-6 bg-cyan-400 sm:w-10" />

              <span className="text-[9px] font-medium uppercase tracking-[0.35em] text-cyan-300/80 sm:text-xs">
                Hello, I'm
              </span>

              <span className="h-px w-6 bg-cyan-400 sm:hidden" />
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={container}
              className="
            flex
    flex-wrap
    justify-center
    text-[2.25rem]
    font-semibold
    leading-[0.95]
    tracking-[-0.055em]
    sm:text-5xl
    md:text-6xl
    lg:justify-start
    lg:text-[4.5rem]
    xl:text-[5rem]
          "
              style={{ perspective: 800 }}
            >
              {name.split("").map((char, index) => {
                const isLastName = index >= 6;

                return (
                  <motion.span
                    key={`${char}-${index}`}
                    variants={letterVariants}
                    whileHover={{
                      y: -8,
                      scale: 1.08,
                      color: isLastName ? "#67e8f9" : "#ffffff",
                      textShadow: "0 0 25px rgba(34,211,238,0.65)",
                    }}
                    className={`
                  inline-block
                  cursor-default
                  ${char === " " ? "mx-1 sm:mx-2" : ""}
                  ${
                    isLastName
                      ? "bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent"
                      : "text-white"
                  }
                `}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                );
              })}
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              variants={fadeUp}
              className="
            mt-5
            flex
            min-h-[2rem]
            max-w-full
            flex-wrap
            items-center
            justify-center
            gap-2
            text-base
            font-medium
            sm:mt-6
            sm:text-xl
            lg:text-2xl
            xl:justify-start
            xl:text-3xl
          "
            >
              <span className="text-slate-300">I build</span>

              <span className="max-w-full bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text font-semibold text-transparent">
                <Typewriter
                  words={[
                    "React experiences",
                    "Next.js applications",
                    "modern interfaces",
                    "creative digital experiences",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={65}
                  deleteSpeed={40}
                  delaySpeed={1400}
                />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="
            mt-5
            max-w-2xl
            text-center
            text-sm
            font-light
            leading-7
            text-slate-400
            sm:mt-6
            sm:text-base
            sm:leading-8
            xl:text-left
          "
            >
              I am a Frontend Developer with over 2 years of experience building
              responsive, user-friendly web applications. I specialize in
              React.js, Next.js, and modern UI development, creating
              high-quality digital experiences that combine performance,
              usability, and visual design.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="
            mt-7
            flex
            w-full
            flex-col
            items-center
            justify-center
            gap-3
            sm:mt-9
            sm:w-auto
            sm:flex-row
            sm:gap-4
            xl:justify-start
          "
            >
              <MagneticButton onClick={() => scrollToId("projects")} primary>
                View Projects
              </MagneticButton>

              <MagneticButton onClick={() => scrollToId("contact")}>
                Get In Touch
              </MagneticButton>
            </motion.div>

            {/* Stack */}
            <motion.div
              variants={fadeUp}
              className="
            mt-7
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-4
            gap-y-2
            text-[8px]
            uppercase
            tracking-[0.22em]
            text-slate-600
            sm:mt-9
            sm:text-[9px]
            xl:justify-start
          "
            >
              <span>React</span>
              <span className="h-1 w-1 rounded-full bg-cyan-500/50" />
              <span>Next.js</span>
              <span className="h-1 w-1 rounded-full bg-cyan-500/50" />
              <span>TypeScript</span>
              <span className="h-1 w-1 rounded-full bg-cyan-500/50" />
              <span>Tailwind</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="
      absolute
      bottom-5
      left-1/2
      z-20
      hidden
      -translate-x-1/2
      flex-col
      items-center
      gap-2
      sm:flex
    "
      >
        <span className="text-[8px] uppercase tracking-[0.4em] text-slate-600">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 7, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
        h-7
        w-px
        bg-gradient-to-b
        from-cyan-400
        to-transparent
      "
        />
      </motion.div>

      {/* Desktop decoration */}
      <div
        className="
      absolute
      bottom-7
      right-8
      z-20
      hidden
      text-[8px]
      uppercase
      tracking-[0.3em]
      text-slate-700
      xl:block
    "
      >
        Design · Code · Experience
      </div>
    </section>
  );
}

// ======================================================
// FLOATING BADGE
// ======================================================

function FloatingBadge({
  text,
  className,
  delay,
}: {
  text: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.7,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
      }}
      transition={{
        opacity: {
          duration: 0.7,
          delay,
        },
        scale: {
          duration: 0.7,
          delay,
        },
        y: {
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
      className={`
        absolute
        z-20
        rounded-full
        border
        border-cyan-400/20
        bg-[#07101c]/80
        px-3
        py-1.5
        text-[8px]
        font-medium
        uppercase
        tracking-[0.18em]
        text-cyan-300/80
        shadow-[0_0_20px_rgba(34,211,238,0.08)]
        backdrop-blur-md
        sm:px-4
        sm:py-2
        sm:text-[9px]
        ${className}
      `}
    >
      {text}
    </motion.div>
  );
}

// ======================================================
// MAGNETIC BUTTON
// ======================================================

function MagneticButton({
  children,
  onClick,
  primary = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  primary?: boolean;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{
        y: -4,
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 18,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-full
        px-7
        py-3.5
        text-xs
        font-semibold
        tracking-[0.08em]
        outline-none
        transition-all
        duration-300
        ${
          primary
            ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-white shadow-[0_0_30px_rgba(34,211,238,0.15)]"
            : "border border-white/10 bg-white/[0.035] text-slate-200 hover:border-cyan-400/30 hover:text-cyan-300"
        }
      `}
    >
      {/* Shine */}

      <motion.span
        initial={{
          x: "-150%",
        }}
        whileHover={{
          x: "150%",
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-y-0
          left-0
          w-1/3
          -skew-x-12
          bg-gradient-to-r
          from-transparent
          via-white/30
          to-transparent
        "
      />

      {/* Glow */}

      {primary && (
        <span
          className="
            absolute
            inset-0
            bg-white/10
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />
      )}

      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
