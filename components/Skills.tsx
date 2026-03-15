"use client";

import { motion } from "framer-motion";

export default function Skills() {
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

  const SkillCard = ({ title, skills }: any) => (
    <motion.div
      whileHover={{
        scale: 1.03,
        rotateX: 5,
        rotateY: -5,
      }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-zinc-900 border border-red-500/20 rounded-xl p-8 
      hover:border-red-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.4)] 
      transition-all duration-300"
    >
      <h3 className="text-2xl font-semibold text-red-500 mb-8">{title}</h3>

      <div className="space-y-8">
        {skills.map((skill: any, index: number) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">{skill.name}</span>
              <span className="text-gray-400 text-sm">{skill.years} Years</span>
            </div>

            <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-red-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.progress}%` }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const text = "Skills";

  return (
    <section id="skills" className="bg-black text-white px-6 pt-24">
      <h2 className="text-4xl font-bold mb-12 text-center flex justify-center flex-wrap">
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

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <SkillCard title="Frontend" skills={frontend} />
        <SkillCard title="Styling & UI" skills={styling} />
      </div>
    </section>
  );
}
