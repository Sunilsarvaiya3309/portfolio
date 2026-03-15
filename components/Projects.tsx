"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiGlobe } from "react-icons/fi";

export default function Projects() {
  const projects = [
    // {
    //   id: "01",
    //   title: "HelloPanso CRM",
    //   desc: "Customer relationship management dashboard with analytics, user management and automation.",
    //   link: "https://crm.hellopanso.com/",
    //   type: "Dashboard",
    //   tech: ["Vue", "Tailwind", "API"],
    //   icon: FiGlobe,
    // },
    {
      id: "02",
      title: "Connester",
      desc: "Professional networking platform with authentication and communication tools.",
      link: "https://connester.com/login",
      type: "Web Platform",
      tech: ["React", "Node", "API"],
      icon: FiGlobe,
    },
    // {
    //   id: "03",
    //   title: "MDRC India",
    //   desc: "Corporate business website with modern UI and responsive design.",
    //   link: "https://www.mdrcindia.com/",
    //   type: "Corporate Website",
    //   tech: ["Vue", "Tailwind"],
    //   icon: FiGlobe,
    // },
    {
      id: "04",
      title: "NxLite",
      desc: "Modern web application built with Next.js and advanced UI components.",
      link: "https://nxlite.vercel.app/",
      type: "Web App",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      icon: FiGlobe,
    },
    // {
    //   id: "05",
    //   title: "Soundstage Studio",
    //   desc: "Music production platform with login dashboard and project management.",
    //   link: "https://dev.soundstage.studio/login",
    //   type: "Media Platform",
    //   tech: ["React", "API"],
    //   icon: FiGlobe,
    // },
    // {
    //   id: "06",
    //   title: "HelloPanso Share",
    //   desc: "Secure cloud file sharing system integrated with HelloPanso ecosystem.",
    //   link: "https://share.hellopanso.com/",
    //   type: "File Sharing",
    //   tech: ["Vue", "Cloud"],
    //   icon: FiGlobe,
    // },
  ];

  return (
    <section id="projects" className="bg-black text-white py-24">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-red-500 mb-16">
        {"Projects".split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.07 }}
            whileHover={{
              scale: 1.2,
              textShadow: "0 0 15px rgba(239,68,68,0.9)",
            }}
          >
            {char}
          </motion.span>
        ))}
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {projects.map((project) => {
          const Icon = project.icon;

          return (
            <motion.div
              key={project.id}
              whileHover={{ y: -12, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group relative bg-zinc-900 border border-red-500/40 p-6 rounded-xl overflow-hidden"
            >
              {/* glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-red-500/10 to-transparent pointer-events-none" />
              {/* id */}
              <span className="text-red-500 text-4xl font-bold opacity-30">
                {project.id}
              </span>

              {/* icon */}
              <div className="mt-2 text-red-500 text-2xl">
                <Icon />
              </div>

              {/* title */}
              <h3 className="text-xl font-semibold mt-3">{project.title}</h3>

              {/* type */}
              <p className="text-xs text-red-400 mt-1 uppercase tracking-wider">
                {project.type}
              </p>

              {/* description */}
              <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                {project.desc}
              </p>

              {/* tech stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs border border-red-500/40 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* buttons */}
              <div className="flex gap-4 mt-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm border border-red-500 px-3 py-2 rounded hover:bg-red-500 hover:text-white transition"
                >
                  <FiExternalLink />
                  Live
                </a>
                <button className="flex items-center gap-2 text-sm border border-zinc-600 px-3 py-2 rounded hover:border-red-500 transition">
                  <FiGithub />
                  Code
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
