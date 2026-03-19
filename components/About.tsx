"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { useEffect, useRef, useState } from "react";

const stats = [
  { id: "01", number: "2+", title: "Years of Experience" },
  { id: "02", number: "6+", title: "Worked on Projects" },
  { id: "03", number: "2+", title: "Worked on Companies" },
  { id: "04", number: "8+", title: "Technologies Known" },
];

const cards = [
  {
    title: "React Developer",
    text: "Building modern UI with React and reusable components.",
  },
  {
    title: "Next.js Expert",
    text: "Creating fast and SEO optimized web applications.",
  },
  {
    title: "Vue Developer",
    text: "Developing reactive and scalable Vue applications.",
  },
  {
    title: "UI Animation",
    text: "Creating smooth and engaging user experiences.",
  },
  {
    title: "Responsive Design",
    text: "Mobile-first design for all screen sizes.",
  },
];

const experiences = [
  {
    company: "Octal Infotech",
    location: "Surat, India",
    role: "Front-End Web Developer",
    insight:
      "Worked on modern web interfaces using Vue.js and React.js. Built responsive UI components, integrated front side APIs and collaborated with frontend teams to deliver scalable web applications.",
  },
  {
    company: "Web Contrive",
    location: "Katargam, Surat, India",
    role: "Shopify and Web Developer",
    insight:
      "Developed Shopify themes and storefront UI using Liquid, HTML, CSS, and JavaScript. Focused on responsive layouts, performance optimization and improving user experience.",
  },
  {
    company: "The Dezine",
    location: "Makarba, Ahmedabad",
    role: "Front-End Web Developer",
    current: true,
    insight:
      "Currently working as a Frontend Developer focusing on modern frameworks like Vue.js, React, and Next.js. Building responsive interfaces using Tailwind CSS, JavaScript and component-based architecture while collaborating with teams to create fast, scalable and user-friendly web applications. Most of my core frontend skills and real-world project experience were developed here.",
  },
];

const text = "Work Experience";
const textAbout = "About Me";

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

export default function About() {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  useEffect(() => {
    const close = () => setActiveTooltip(null);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWidth(
      carouselRef.current!.scrollWidth - carouselRef.current!.offsetWidth,
    );
  }, []);
  return (
    <section
      id="about"
      className="bg-black text-white py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-4xl font-bold text-red-500 mb-6">
              {textAbout.split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="text-red-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.4,
                  }}
                  whileHover={{
                    scale: 1.2,
                    textShadow: "0px 0px 10px rgba(239,68,68,0.8)",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              I am a passionate Frontend Developer specializing in React,
              Next.js and Vue with 2+ years of experience building modern,
              responsive and animated web applications.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I focus on creating clean UI, smooth animations and fast
              performance to deliver engaging user experiences.
            </p>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative rounded-xl p-[2px] overflow-hidden"
              >
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-[conic-gradient(red,transparent,red)]"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 4,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                />

                {/* Card */}
                <div className="relative bg-zinc-900 rounded-xl p-6 h-full">
                  <span className="text-gray-500 text-sm">{item.id}</span>

                  <h3 className="text-3xl font-bold text-red-500 mt-2">
                    {item.number}
                  </h3>

                  <p className="text-gray-400 text-sm mt-2">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-full relative py-4 overflow-hidden">
          <motion.div
            ref={carouselRef}
            className="flex gap-4 md:gap-8 cursor-grab"
            drag="x"
            dragConstraints={{ left: -width, right: 0 }}
            whileTap={{ cursor: "grabbing" }}
          >
            {cards.map((card, i) => (
              <motion.div
                key={i}
                className="min-w-[180px] sm:min-w-[240px] md:min-w-[280px] bg-zinc-900 border border-red-500/30 rounded-xl p-4 sm:p-6 flex-shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-red-500 text-lg sm:text-xl font-semibold mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">{card.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* WORK EXPERIENCE */}

        <div className="mt-24">
          <h2 className="sm:text-4xl text-3xl font-bold mb-12 text-center flex justify-center flex-wrap">
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                className="text-red-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.4,
                }}
                whileHover={{
                  scale: 1.2,
                  textShadow: "0px 0px 10px rgba(239,68,68,0.8)",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onMouseEnter={() => setActiveTooltip(index)}
                onMouseLeave={() => setActiveTooltip(null)}
                className="group relative bg-zinc-900 border border-red-500/20 rounded-xl p-6
        hover:border-red-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.4)] transition"
              >
                {/* COMPANY */}
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl text-red-500 font-semibold">
                    {exp.company}
                  </h3>

                  {exp.current && (
                    <span className="text-xs bg-red-500 text-black px-2 py-1 rounded-md font-medium">
                      Current
                    </span>
                  )}
                </div>

                {/* LOCATION */}
                <p className="text-gray-400 text-sm mb-3">{exp.location}</p>

                {/* ROLE */}
                <div className="flex items-center gap-2">
                  <p className="text-gray-300">{exp.role}</p>

                  {/* INFO ICON */}
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveTooltip(activeTooltip === index ? null : index);
                    }}
                    className="text-red-500 cursor-pointer text-xs border border-red-500 
            rounded-full w-5 h-5 flex items-center justify-center
            hover:bg-red-500 hover:text-black transition"
                  >
                    i
                  </span>
                </div>

                {/* TOOLTIP */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{
                    opacity: activeTooltip === index ? 1 : 0,
                    scale: activeTooltip === index ? 1 : 0.9,
                    y: activeTooltip === index ? 0 : 10,
                  }}
                  transition={{ duration: 0.25 }}
                  className={`absolute left-1/2 -translate-x-1/2 bottom-8 w-80
          bg-zinc-950 text-gray-300 text-xs p-4 rounded-lg 
          border border-red-500/30 shadow-xl
          ${
            activeTooltip === index
              ? "pointer-events-auto"
              : "pointer-events-none"
          }`}
                >
                  <p className="text-red-500 font-semibold mb-2">
                    Experience Insights
                  </p>

                  <p className="leading-relaxed">{exp.insight}</p>

                  {/* Tooltip Arrow */}
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-3 h-3 bg-zinc-950 rotate-45 border-r border-b border-red-500/30"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="max-w-6xl mt-24 mx-auto">
          <h2 className="sm:text-4xl text-2xl font-bold text-center text-red-500 mb-16">
            {"Educational Journey".split("").map((char, index) => (
              <motion.span
                key={index}
                className="text-red-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.4,
                }}
                whileHover={{
                  scale: 1.2,
                  textShadow: "0px 0px 10px rgba(239,68,68,0.8)",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.03,
                  rotateX: 5,
                  rotateY: -5,
                }}
                className="relative bg-zinc-900 border border-red-500/20 rounded-xl p-8
                hover:border-red-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.4)]
                transition-all duration-300"
              >
                {/* ID + ICON */}
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-red-500/10 p-3 rounded-lg flex items-center justify-center"
                  >
                    <FaGraduationCap className="text-red-500 text-xl" />
                  </motion.div>
                  <span className="text-red-500 font-semibold text-lg">
                    {edu.id}
                  </span>
                </div>

                {/* YEAR */}
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <MdDateRange className="text-red-400 text-lg" />{" "}
                  <span>{edu.year}</span>
                </div>

                {/* DEGREE */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {edu.degree}
                </h3>

                <p className="text-gray-400 text-sm mb-1">{edu.university}</p>

                <p className="text-gray-500 text-sm mb-4">{edu.location}</p>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {edu.desc}
                </p>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="text-xs bg-red-500/10 text-red-400 px-3 py-1 rounded-full border border-red-500/30"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
