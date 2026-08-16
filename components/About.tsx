"use client";

import { motion, Variants } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { MdDateRange, MdLocationOn } from "react-icons/md";
import { useEffect, useRef, useState } from "react";

// ======================================================
// DATA
// ======================================================

const stats = [
  {
    id: "01",
    number: "2+",
    title: "Years of Experience",
  },
  {
    id: "02",
    number: "6+",
    title: "Worked on Projects",
  },
  {
    id: "03",
    number: "2+",
    title: "Companies",
  },
  {
    id: "04",
    number: "8+",
    title: "Technologies",
  },
];

const cards = [
  {
    title: "React Developer",
    text: "Building modern interfaces with React and reusable component architecture.",
  },
  {
    title: "Next.js Developer",
    text: "Creating fast, scalable and SEO-friendly web applications.",
  },
  {
    title: "Vue Developer",
    text: "Developing reactive and maintainable Vue applications.",
  },
  {
    title: "UI Animation",
    text: "Creating smooth interactions and engaging digital experiences.",
  },
  {
    title: "Responsive Design",
    text: "Designing mobile-first interfaces that work across every screen.",
  },
];

const experiences = [
  {
    company: "Octal Infotech",
    location: "Surat, India",
    role: "Front-End Web Developer",
    insight:
      "Worked on modern web interfaces using Vue.js and React.js. Built responsive UI components, integrated front-end APIs and collaborated with frontend teams to deliver scalable web applications.",
  },
  {
    company: "Web Contrive",
    location: "Katargam, Surat, India",
    role: "Shopify & Web Developer",
    insight:
      "Developed Shopify themes and storefront UI using Liquid, HTML, CSS, and JavaScript. Focused on responsive layouts, performance optimization and improving user experience.",
  },
  {
    company: "The Dezine",
    location: "Makarba, Ahmedabad",
    role: "Front-End Web Developer",
    current: true,
    insight:
      "Currently working as a Frontend Developer focusing on Vue.js, React, and Next.js. Building responsive interfaces using Tailwind CSS, JavaScript and component-based architecture while collaborating with teams to create fast, scalable and user-friendly web applications.",
  },
];

const education = [
  {
    id: "01",
    year: "2021 - 2023",
    degree: "Bachelor of Computer Applications (BCA)",
    university: "Maharaja Krishnakumarsinhji Bhavnagar University",
    location: "Bhavnagar, Gujarat, India",
    desc: "Focused on web development, programming fundamentals and modern web technologies while building a strong foundation in computer applications.",
    skills: ["Web Development", "Programming", "Web Technologies"],
  },
  {
    id: "02",
    year: "2018 - 2020",
    degree: "Higher Secondary Certificate (12th) – Arts Stream",
    university: "G.S.H.E.B Board",
    location: "Palitana, Gujarat, India",
    desc: "Completed higher secondary education with focus on communication, social understanding and analytical thinking.",
    skills: ["Communication", "Arts", "Critical Thinking"],
  },
];

// ======================================================
// ANIMATION VARIANTS
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

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    x: 0,
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
// SECTION HEADING
// ======================================================

function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <div
        className={`mb-4 flex items-center gap-3 ${
          align === "center" ? "justify-center" : "justify-start"
        }`}
      >
        <span className="h-px w-8 bg-cyan-400 sm:w-12" />

        <span className="text-[9px] uppercase tracking-[0.4em] text-cyan-400/70 sm:text-[10px]">
          {eyebrow}
        </span>

        <span className="h-px w-8 bg-cyan-400 sm:w-12" />
      </div>

      <h2
        className="
          text-3xl
          font-semibold
          tracking-[-0.04em]
          text-white
          sm:text-4xl
          lg:text-5xl
        "
      >
        {title.split("").map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.035,
              duration: 0.45,
            }}
            whileHover={{
              y: -5,
              color: "#67e8f9",
              textShadow: "0 0 20px rgba(34,211,238,0.5)",
            }}
            className={
              char === " " ? "inline-block w-2 sm:w-3" : "inline-block"
            }
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h2>
    </motion.div>
  );
}

// ======================================================
// ABOUT
// ======================================================

export default function About() {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  const carouselRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);

  // ----------------------------------------------------
  // CAROUSEL WIDTH
  // ----------------------------------------------------

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(
          carouselRef.current.scrollWidth - carouselRef.current.offsetWidth,
        );
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // ----------------------------------------------------
  // CLOSE TOOLTIP
  // ----------------------------------------------------

  useEffect(() => {
    const close = () => setActiveTooltip(null);

    window.addEventListener("click", close);

    return () => window.removeEventListener("click", close);
  }, []);

  return (
    <section
      id="about"
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

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#0c1b2b_0%,#050a12_40%,#030508_80%)]" />

      {/* Ambient glow */}

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
          bg-cyan-500/[0.055]
          blur-[120px]
        "
      />

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
          bg-blue-500/[0.05]
          blur-[130px]
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
          MAIN CONTENT
      ================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ==================================================
            ABOUT INTRO
        ================================================== */}

        <div className="mb-28 grid items-center gap-16 lg:grid-cols-[1fr_1fr]">
          {/* ----------------------------------------------
              LEFT
          ---------------------------------------------- */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
          >
            <SectionHeading eyebrow="01 / About" title="About Me" />

            <p className="max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              I am a passionate Frontend Developer specializing in React,
              Next.js and Vue with 2+ years of experience building modern,
              responsive and animated web applications.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
              I focus on creating clean interfaces, smooth animations and fast
              performance to deliver engaging digital experiences.
            </p>

            {/* Mini line */}

            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "120px",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.4,
              }}
              className="
                mt-8
                h-px
                bg-gradient-to-r
                from-cyan-400
                to-transparent
              "
            />
          </motion.div>

          {/* ----------------------------------------------
              STATS
          ---------------------------------------------- */}

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            {stats.map((item) => (
              <StatCard
                key={item.id}
                id={item.id}
                number={item.number}
                title={item.title}
              />
            ))}
          </motion.div>
        </div>

        {/* ==================================================
            SKILLS CAROUSEL
        ================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="relative mb-28"
        >
          <div className="mb-6 flex items-center justify-between">
            <span className="text-[9px] uppercase tracking-[0.35em] text-slate-600">
              Core Capabilities
            </span>

            <span className="hidden text-[9px] uppercase tracking-[0.25em] text-slate-700 sm:block">
              Drag to explore
            </span>
          </div>

          <motion.div
            ref={carouselRef}
            drag="x"
            dragConstraints={{
              left: -width,
              right: 0,
            }}
            whileTap={{
              cursor: "grabbing",
            }}
            className="
              flex
              cursor-grab
              gap-4
              overflow-visible
              py-4
            "
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="
                  group
                  min-w-[230px]
                  flex-shrink-0
                  rounded-2xl
                  border
                  border-white/[0.07]
                  bg-white/[0.025]
                  p-5
                  backdrop-blur-xl
                  sm:min-w-[280px]
                  sm:p-6
                "
              >
                {/* Number */}

                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[9px] tracking-[0.3em] text-slate-600">
                    0{index + 1}
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-300 group-hover:scale-150" />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-slate-200 transition-colors group-hover:text-cyan-300">
                  {card.title}
                </h3>

                <p className="text-xs leading-6 text-slate-500">{card.text}</p>

                <div className="mt-5 h-px w-10 bg-cyan-400/40 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ==================================================
            EXPERIENCE
        ================================================== */}

        <div className="mb-28">
          <SectionHeading
            eyebrow="02 / Career"
            title="Work Experience"
            align="center"
          />

          <div className="relative">
            {/* Timeline */}

            <div className="absolute bottom-0 left-[9px] top-0 hidden w-px bg-gradient-to-b from-cyan-400/50 via-blue-500/20 to-transparent md:block" />

            <div className="space-y-6 md:space-y-8">
              {experiences.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  exp={exp}
                  index={index}
                  activeTooltip={activeTooltip}
                  setActiveTooltip={setActiveTooltip}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ==================================================
            EDUCATION
        ================================================== */}

        <div>
          <SectionHeading
            eyebrow="03 / Education"
            title="Educational Journey"
            align="center"
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="grid gap-6 lg:grid-cols-2"
          >
            {education.map((edu) => (
              <EducationCard key={edu.id} edu={edu} />
            ))}
          </motion.div>
        </div>

        {/* ==================================================
            BOTTOM LINE
        ================================================== */}

        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          whileInView={{
            scaleX: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
          }}
          className="
            mx-auto
            mt-24
            h-px
            max-w-3xl
            origin-center
            bg-gradient-to-r
            from-transparent
            via-cyan-400/30
            to-transparent
          "
        />
      </div>
    </section>
  );
}

// ======================================================
// STAT CARD
// ======================================================

function StatCard({
  id,
  number,
  title,
}: {
  id: string;
  number: string;
  title: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
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
        sm:p-6
      "
    >
      {/* Animated glow */}

      <motion.div
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 2,
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

      <span className="text-[9px] tracking-[0.3em] text-slate-600">{id}</span>

      <motion.h3
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.15,
          duration: 0.5,
        }}
        className="
          mt-3
          text-3xl
          font-semibold
          tracking-tight
          text-cyan-300
          sm:text-4xl
        "
      >
        {number}
      </motion.h3>

      <p className="mt-2 text-xs leading-5 text-slate-500">{title}</p>

      <div className="mt-5 h-px w-8 bg-cyan-400/30 transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}

// ======================================================
// EXPERIENCE CARD
// ======================================================

function ExperienceCard({
  exp,
  index,
  activeTooltip,
  setActiveTooltip,
}: {
  exp: (typeof experiences)[number];
  index: number;
  activeTooltip: number | null;
  setActiveTooltip: (value: number | null) => void;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        group
        relative
        md:pl-12
      "
    >
      {/* Timeline dot */}

      <motion.div
        animate={{
          boxShadow: [
            "0 0 0 rgba(34,211,238,0)",
            "0 0 18px rgba(34,211,238,0.6)",
            "0 0 0 rgba(34,211,238,0)",
          ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
        className="
          absolute
          left-[4px]
          top-8
          hidden
          h-[11px]
          w-[11px]
          rounded-full
          border
          border-cyan-400
          bg-[#030508]
          md:block
        "
      />

      {/* Card */}

      <div
        className="
          relative
          overflow-hidden
          rounded-2xl
          border
          border-white/[0.07]
          bg-white/[0.025]
          p-6
          backdrop-blur-xl
          transition-all
          duration-500
          group-hover:border-cyan-400/25
          group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
          sm:p-8
        "
      >
        {/* Top glow */}

        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-cyan-400/60 via-blue-500/30 to-transparent opacity-50 transition-opacity group-hover:opacity-100" />

        {/* Index */}

        <div className="absolute right-6 top-6 text-[9px] tracking-[0.3em] text-slate-700">
          0{index + 1}
        </div>

        {/* Company */}

        <div className="flex flex-wrap items-center gap-3 pr-12">
          <h3 className="text-xl font-semibold text-slate-100 transition-colors group-hover:text-cyan-300 sm:text-2xl">
            {exp.company}
          </h3>

          {exp.current && (
            <motion.span
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-400/10
                px-2.5
                py-1
                text-[8px]
                uppercase
                tracking-[0.15em]
                text-cyan-300
              "
            >
              Current
            </motion.span>
          )}
        </div>

        {/* Location */}

        <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
          <MdLocationOn className="text-cyan-400/60" />

          {exp.location}
        </div>

        {/* Role */}

        <div className="mt-5 flex items-center gap-3">
          <span className="text-sm font-medium text-slate-300 sm:text-base">
            {exp.role}
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();

              setActiveTooltip(activeTooltip === index ? null : index);
            }}
            className="
              flex
              h-5
              w-5
              items-center
              justify-center
              rounded-full
              border
              border-cyan-400/30
              text-[9px]
              text-cyan-300
              transition-all
              hover:bg-cyan-400
              hover:text-black
            "
          >
            i
          </button>
        </div>

        {/* Description */}

        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: "70px",
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="mt-6 h-px bg-gradient-to-r from-cyan-400 to-transparent"
        />

        {/* Tooltip */}

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
            scale: 0.96,
          }}
          animate={{
            opacity: activeTooltip === index ? 1 : 0,
            y: activeTooltip === index ? 0 : 10,
            scale: activeTooltip === index ? 1 : 0.96,
          }}
          transition={{
            duration: 0.25,
          }}
          className={`
            absolute
            bottom-6
            left-1/2
            z-30
            w-[calc(100%-2rem)]
            -translate-x-1/2
            rounded-xl
            border
            border-cyan-400/20
            bg-[#07101c]/95
            p-5
            text-xs
            text-slate-400
            shadow-2xl
            backdrop-blur-xl
            sm:w-80
            ${
              activeTooltip === index
                ? "pointer-events-auto"
                : "pointer-events-none"
            }
          `}
        >
          <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-cyan-300">
            Experience Insights
          </p>

          <p className="leading-6">{exp.insight}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ======================================================
// EDUCATION CARD
// ======================================================

function EducationCard({ edu }: { edu: (typeof education)[number] }) {
  return (
    <motion.div
      variants={fadeUp}
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
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.07]
        bg-white/[0.025]
        p-7
        backdrop-blur-xl
        sm:p-8
      "
      style={{
        transformPerspective: 1000,
      }}
    >
      {/* Animated border */}

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

      {/* Header */}

      <div className="flex items-start justify-between">
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            border
            border-cyan-400/10
            bg-cyan-400/[0.07]
          "
        >
          <FaGraduationCap className="text-xl text-cyan-300" />
        </motion.div>

        <span className="text-[9px] tracking-[0.3em] text-slate-700">
          {edu.id}
        </span>
      </div>

      {/* Year */}

      <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
        <MdDateRange className="text-cyan-400/60" />

        {edu.year}
      </div>

      {/* Degree */}

      <h3 className="mt-4 text-lg font-semibold leading-7 text-slate-100 transition-colors group-hover:text-cyan-300 sm:text-xl">
        {edu.degree}
      </h3>

      {/* University */}

      <p className="mt-3 text-sm leading-6 text-slate-400">{edu.university}</p>

      {/* Location */}

      <p className="mt-1 flex items-center gap-1 text-xs text-slate-600">
        <MdLocationOn />

        {edu.location}
      </p>

      {/* Divider */}

      <div className="my-6 h-px bg-white/[0.06]" />

      {/* Description */}

      <p className="text-xs leading-6 text-slate-500 sm:text-sm">{edu.desc}</p>

      {/* Skills */}

      <div className="mt-6 flex flex-wrap gap-2">
        {edu.skills.map((skill, index) => (
          <motion.span
            key={index}
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            className="
              rounded-full
              border
              border-cyan-400/10
              bg-cyan-400/[0.04]
              px-3
              py-1.5
              text-[9px]
              uppercase
              tracking-[0.08em]
              text-cyan-300/70
              transition-colors
              hover:border-cyan-400/30
              hover:text-cyan-300
            "
          >
            {skill}
          </motion.span>
        ))}
      </div>

      {/* Bottom glow */}

      <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-700 group-hover:w-3/4" />
    </motion.div>
  );
}
