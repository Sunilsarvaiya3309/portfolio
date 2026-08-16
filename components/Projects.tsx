"use client";

import { motion, Variants } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiGlobe,
  FiArrowUpRight,
} from "react-icons/fi";

// ======================================================
// PROJECT DATA
// ======================================================

const projects = [
  {
    id: "01",
    title: "Connester",
    desc: "Professional networking platform with authentication, communication tools and a modern user experience.",
    link: "https://connester.com/login",
    type: "Web Platform",
    tech: ["React", "Node", "API"],
    icon: FiGlobe,
    accent: "cyan",
  },
  {
    id: "02",
    title: "NxLite",
    desc: "Modern web application built with Next.js and advanced UI components with smooth interactions.",
    link: "https://nxlite.vercel.app/",
    type: "Web Application",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    icon: FiGlobe,
    accent: "blue",
  },
];

// ======================================================
// VARIANTS
// ======================================================

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: "blur(10px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 90,
    scale: 0.92,
    rotateX: 12,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// ======================================================
// PROJECTS
// ======================================================

export default function Projects() {
  return (
    <section
      id="projects"
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

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,#0b1c2d_0%,#050a11_42%,#030508_80%)]" />

      {/* Cyan glow */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-15%]
          top-[5%]
          h-[32rem]
          w-[32rem]
          rounded-full
          bg-cyan-500/[0.055]
          blur-[130px]
        "
      />

      {/* Blue glow */}

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 70, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-15%]
          bottom-[5%]
          h-[35rem]
          w-[35rem]
          rounded-full
          bg-blue-500/[0.05]
          blur-[140px]
        "
      />

      {/* Indigo glow */}

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-15%]
          left-[35%]
          h-[25rem]
          w-[25rem]
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

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]" />

      {/* ==================================================
          CONTENT
      ================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ==================================================
            HEADER
        ================================================== */}

        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="mb-16 text-center"
        >
          {/* Label */}

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-cyan-400 sm:w-12" />

            <span className="text-[9px] uppercase tracking-[0.4em] text-cyan-400/70 sm:text-[10px]">
              05 / Selected Work
            </span>

            <span className="h-px w-8 bg-cyan-400 sm:w-12" />
          </div>

          {/* Title */}

          <h2
            className="
              text-4xl
              font-semibold
              tracking-[-0.05em]
              sm:text-5xl
              lg:text-6xl
            "
          >
            {"Projects".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{
                  opacity: 0,
                  y: 35,
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
                  delay: index * 0.07,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -8,
                  color: "#67e8f9",
                  textShadow:
                    "0 0 25px rgba(34,211,238,0.6)",
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </h2>

          <motion.p
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
              delay: 0.6,
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
            A collection of digital products, web applications
            and interfaces built with modern frontend
            technologies.
          </motion.p>
        </motion.div>

        {/* ==================================================
            PROJECT GRID
        ================================================== */}

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                Icon={Icon}
              />
            );
          })}
        </div>

        {/* ==================================================
            BOTTOM
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
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="
            mt-16
            flex
            flex-col
            items-center
            justify-center
            gap-4
            text-center
          "
        >
          <span className="text-[9px] uppercase tracking-[0.35em] text-slate-700">
            More projects coming soon
          </span>

          <div className="h-px w-20 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

// ======================================================
// PROJECT CARD
// ======================================================

function ProjectCard({
  project,
  index,
  Icon,
}: {
  project: {
    id: string;
    title: string;
    desc: string;
    link: string;
    type: string;
    tech: string[];
    accent: string;
  };
  index: number;
  Icon: any;
}) {
  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      whileHover={{
        y: -12,
        rotateX: 2,
        rotateY: index % 2 === 0 ? -2 : 2,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 18,
      }}
      style={{
        transformPerspective: 1200,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.07]
        bg-white/[0.025]
        p-5
        backdrop-blur-xl
        sm:p-7
      "
    >
      {/* ==================================================
          ANIMATED BORDER
      ================================================== */}

      <motion.div
        animate={{
          x: ["-100%", "250%"],
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
          w-1/3
          bg-gradient-to-r
          from-transparent
          via-cyan-400
          to-transparent
        "
      />

      {/* ==================================================
          HOVER SPOTLIGHT
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-56
          w-56
          rounded-full
          bg-cyan-400/[0.06]
          opacity-0
          blur-[70px]
          transition-opacity
          duration-700
          group-hover:opacity-100
        "
      />

      {/* ==================================================
          PROJECT PREVIEW
      ================================================== */}

      <div
        className="
          relative
          mb-7
          h-52
          overflow-hidden
          rounded-xl
          border
          border-white/[0.06]
          bg-[#050a11]
        "
      >
        {/* Fake browser header */}

        <div
          className="
            flex
            h-9
            items-center
            gap-1.5
            border-b
            border-white/[0.05]
            px-4
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-red-400/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-green-400/50" />

          <div className="ml-3 h-4 flex-1 rounded-full bg-white/[0.03]" />
        </div>

        {/* Preview content */}

        <div className="relative flex h-[calc(100%-36px)] items-center justify-center">
          {/* Grid */}

          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)
              `,
              backgroundSize: "25px 25px",
            }}
          />

          {/* Center icon */}

          <motion.div
            animate={{
              y: [0, -8, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-2xl
              border
              border-cyan-400/20
              bg-cyan-400/[0.05]
              text-3xl
              text-cyan-300
              shadow-[0_0_40px_rgba(34,211,238,0.12)]
            "
          >
            <Icon />
          </motion.div>

          {/* Scan line */}

          <motion.div
            animate={{
              y: ["-100%", "300%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              h-20
              w-full
              bg-gradient-to-b
              from-transparent
              via-cyan-400/[0.08]
              to-transparent
            "
          />

          {/* Project number */}

          <span
            className="
              absolute
              bottom-3
              right-4
              text-[9px]
              font-medium
              tracking-[0.3em]
              text-slate-700
            "
          >
            PROJECT_{project.id}
          </span>
        </div>
      </div>

      {/* ==================================================
          PROJECT META
      ================================================== */}

      <div className="flex items-start justify-between">
        <div>
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-cyan-400/60
            "
          >
            {project.type}
          </span>

          <h3
            className="
              mt-2
              text-2xl
              font-semibold
              tracking-tight
              text-slate-100
              transition-colors
              duration-300
              group-hover:text-cyan-300
            "
          >
            {project.title}
          </h3>
        </div>

        <motion.div
          whileHover={{
            rotate: 45,
          }}
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/[0.08]
            text-slate-500
            transition-colors
            duration-300
            group-hover:border-cyan-400/30
            group-hover:text-cyan-300
          "
        >
          <FiArrowUpRight />
        </motion.div>
      </div>

      {/* ==================================================
          DESCRIPTION
      ================================================== */}

      <p
        className="
          mt-4
          max-w-lg
          text-sm
          leading-7
          text-slate-500
        "
      >
        {project.desc}
      </p>

      {/* ==================================================
          TECH STACK
      ================================================== */}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tech, techIndex) => (
          <motion.span
            key={tech}
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2 + techIndex * 0.08,
            }}
            whileHover={{
              y: -3,
            }}
            className="
              rounded-full
              border
              border-white/[0.08]
              bg-white/[0.025]
              px-3
              py-1.5
              text-[9px]
              uppercase
              tracking-[0.12em]
              text-slate-500
              transition-colors
              duration-300
              hover:border-cyan-400/30
              hover:text-cyan-300
            "
          >
            {tech}
          </motion.span>
        ))}
      </div>

      {/* ==================================================
          ACTIONS
      ================================================== */}

      <div className="mt-7 flex items-center gap-3 border-t border-white/[0.05] pt-6">
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="
            flex
            items-center
            gap-2
            rounded-lg
            border
            border-cyan-400/30
            bg-cyan-400/[0.05]
            px-4
            py-2.5
            text-xs
            font-medium
            text-cyan-300
            transition-all
            duration-300
            hover:border-cyan-400/60
            hover:bg-cyan-400/10
            hover:shadow-[0_0_20px_rgba(34,211,238,0.12)]
          "
        >
          <FiExternalLink />
          Live Preview
        </motion.a>

        <motion.button
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="
            flex
            items-center
            gap-2
            rounded-lg
            border
            border-white/[0.08]
            px-4
            py-2.5
            text-xs
            font-medium
            text-slate-500
            transition-all
            duration-300
            hover:border-white/20
            hover:text-white
          "
        >
          <FiGithub />
          Source
        </motion.button>
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
    </motion.article>
  );
}