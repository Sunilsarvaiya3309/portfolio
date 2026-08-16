"use client";

import { motion, Variants } from "framer-motion";

// ======================================================
// DATA
// ======================================================

const frontend = [
  { name: "JavaScript", years: 3, progress: 90 },
  { name: "React JS", years: 1, progress: 75 },
  { name: "Next JS", years: 1, progress: 70 },
  { name: "Vue JS", years: 2.5, progress: 80 },
  { name: "jQuery", years: 3, progress: 80 },
];

const styling = [
  { name: "HTML", years: 3, progress: 95 },
  { name: "CSS", years: 3, progress: 90 },
  { name: "Tailwind CSS", years: 3, progress: 85 },
  { name: "Bootstrap", years: 3, progress: 85 },
  { name: "GitHub", years: 3, progress: 85 },
];

// ======================================================
// VARIANTS
// ======================================================

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.96,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const stagger: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// ======================================================
// SKILLS
// ======================================================

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[#030508]
        px-6
        py-28
        text-white
        sm:px-10
        lg:px-16
      "
    >
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#0c1b2b_0%,#050a12_40%,#030508_82%)]" />

      {/* Cyan glow */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-15%]
          top-[5%]
          h-[30rem]
          w-[30rem]
          rounded-full
          bg-cyan-500/[0.06]
          blur-[120px]
        "
      />

      {/* Blue glow */}

      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 60, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-15%]
          top-[30%]
          h-[35rem]
          w-[35rem]
          rounded-full
          bg-blue-500/[0.055]
          blur-[130px]
        "
      />

      {/* Indigo glow */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-15%]
          left-[35%]
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-indigo-500/[0.045]
          blur-[120px]
        "
      />

      {/* ==================================================
          GRID
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
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

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.55)_100%)]" />

      {/* ==================================================
          MAIN
      ================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ==================================================
            HEADER
        ================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="mb-16 text-center"
        >
          {/* Eyebrow */}

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-cyan-400 sm:w-12" />

            <span className="text-[9px] uppercase tracking-[0.4em] text-cyan-400/70 sm:text-[10px]">
              04 / Expertise
            </span>

            <span className="h-px w-8 bg-cyan-400 sm:w-12" />
          </div>

          {/* Heading */}

          <h2
            className="
              text-4xl
              font-semibold
              tracking-[-0.05em]
              sm:text-5xl
              lg:text-6xl
            "
          >
            {"Skills".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                  rotateX: -60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -7,
                  color: "#67e8f9",
                  textShadow:
                    "0 0 25px rgba(34,211,238,0.6)",
                }}
                className="inline-block text-white"
              >
                {char}
              </motion.span>
            ))}
          </h2>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.5,
              duration: 0.7,
            }}
            className="
              mx-auto
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-slate-500
              sm:text-base
            "
          >
            Technologies and tools I use to build
            responsive, scalable and interactive
            digital experiences.
          </motion.p>
        </motion.div>

        {/* ==================================================
            SKILL CARDS
        ================================================== */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            grid
            gap-7
            lg:grid-cols-2
          "
        >
          <SkillCard
            title="Frontend Development"
            number="01"
            description="Modern frameworks, JavaScript and component-driven development."
            skills={frontend}
          />

          <SkillCard
            title="Styling & UI"
            number="02"
            description="Responsive layouts, visual systems and modern interface styling."
            skills={styling}
          />
        </motion.div>

        {/* ==================================================
            BOTTOM TECH STRIP
        ================================================== */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="
            mt-12
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-6
            gap-y-3
            text-[9px]
            uppercase
            tracking-[0.3em]
            text-slate-700
          "
        >
          <span>Frontend</span>

          <span className="h-1 w-1 rounded-full bg-cyan-400/50" />

          <span>UI / UX</span>

          <span className="h-1 w-1 rounded-full bg-cyan-400/50" />

          <span>Responsive</span>

          <span className="h-1 w-1 rounded-full bg-cyan-400/50" />

          <span>Performance</span>

          <span className="h-1 w-1 rounded-full bg-cyan-400/50" />

          <span>Animation</span>
        </motion.div>

        {/* Bottom divider */}

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
          }}
          className="
            mx-auto
            mt-20
            h-px
            max-w-3xl
            bg-gradient-to-r
            from-transparent
            via-cyan-400/25
            to-transparent
          "
        />
      </div>
    </section>
  );
}

// ======================================================
// SKILL CARD
// ======================================================

function SkillCard({
  title,
  number,
  description,
  skills,
}: {
  title: string;
  number: string;
  description: string;
  skills: {
    name: string;
    years: number;
    progress: number;
  }[];
}) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
        rotateX: 2,
        rotateY: -2,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      style={{
        transformPerspective: 1000,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.07]
        bg-white/[0.025]
        p-6
        backdrop-blur-xl
        sm:p-8
      "
    >
      {/* ==================================================
          ANIMATED TOP BORDER
      ================================================== */}

      <motion.div
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 1,
        }}
        className="
          absolute
          left-0
          top-0
          h-px
          w-1/2
          bg-gradient-to-r
          from-transparent
          via-cyan-400
          to-transparent
        "
      />

      {/* ==================================================
          CARD HEADER
      ================================================== */}

      <div className="mb-9 flex items-start justify-between">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="text-[9px] tracking-[0.3em] text-slate-600">
              {number}
            </span>

            <span className="h-px w-7 bg-cyan-400/30" />
          </div>

          <h3
            className="
              text-2xl
              font-semibold
              tracking-tight
              text-slate-100
              transition-colors
              duration-300
              group-hover:text-cyan-300
            "
          >
            {title}
          </h3>

          <p className="mt-2 max-w-md text-xs leading-6 text-slate-500">
            {description}
          </p>
        </div>

        {/* Floating indicator */}

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="
            mt-1
            h-2
            w-2
            rounded-full
            bg-cyan-400
            shadow-[0_0_15px_rgba(34,211,238,0.8)]
          "
        />
      </div>

      {/* ==================================================
          SKILLS
      ================================================== */}

      <div className="space-y-7">
        {skills.map((skill, index) => (
          <SkillRow
            key={skill.name}
            skill={skill}
            index={index}
          />
        ))}
      </div>

      {/* ==================================================
          CARD FOOTER
      ================================================== */}

      <div className="mt-9 flex items-center justify-between border-t border-white/[0.05] pt-5">
        <span className="text-[8px] uppercase tracking-[0.3em] text-slate-700">
          Proficiency
        </span>

        <span className="text-[8px] uppercase tracking-[0.3em] text-cyan-400/40">
          Active
        </span>
      </div>

      {/* ==================================================
          BOTTOM GLOW
      ================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-px
          w-0
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-cyan-400
          to-transparent
          transition-all
          duration-700
          group-hover:w-3/4
        "
      />
    </motion.div>
  );
}

// ======================================================
// SKILL ROW
// ======================================================

function SkillRow({
  skill,
  index,
}: {
  skill: {
    name: string;
    years: number;
    progress: number;
  };
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="group/skill"
    >
      {/* ==================================================
          LABEL
      ================================================== */}

      <div className="mb-2.5 flex items-end justify-between">
        <div className="flex items-center gap-3">
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-slate-700
              transition-all
              duration-300
              group-hover/skill:bg-cyan-400
              group-hover/skill:shadow-[0_0_10px_rgba(34,211,238,0.8)]
            "
          />

          <span className="text-sm font-medium text-slate-300 transition-colors group-hover/skill:text-white">
            {skill.name}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[9px] uppercase tracking-[0.12em] text-slate-600">
            {skill.years}{" "}
            {skill.years === 1 ? "Year" : "Years"}
          </span>

          <span className="min-w-[34px] text-right text-[10px] font-medium text-cyan-300/70">
            {skill.progress}%
          </span>
        </div>
      </div>

      {/* ==================================================
          PROGRESS BAR
      ================================================== */}

      <div
        className="
          relative
          h-[5px]
          overflow-hidden
          rounded-full
          bg-white/[0.06]
        "
      >
        {/* Background glow */}

        <div
          className="
            absolute
            inset-0
            rounded-full
            bg-cyan-400/[0.02]
          "
        />

        {/* Progress */}

        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: `${skill.progress}%`,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 1.4,
            delay: 0.15 + index * 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative
            h-full
            overflow-hidden
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-indigo-500
            shadow-[0_0_12px_rgba(34,211,238,0.25)]
          "
        >
          {/* Moving shine */}

          <motion.div
            animate={{
              x: ["-100%", "300%"],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 1,
            }}
            className="
              absolute
              inset-y-0
              left-0
              w-1/3
              skew-x-[-20deg]
              bg-gradient-to-r
              from-transparent
              via-white/30
              to-transparent
            "
          />
        </motion.div>
      </div>
    </motion.div>
  );
}