"use client";
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Arraytics",
    role: "Software Engineer",
    period: "2024 – Present",
    tags: ["WordPress", "PHP", "React.js", "MySQL"],
    current: true,
  },
  {
    company: "Incevio",
    role: "Full Stack Web Developer",
    period: "Nov 2023 – 2024",
    tags: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
    current: false,
  },
  {
    company: "Data Sapience Lab",
    role: "Software Engineer",
    period: "2023",
    tags: ["Python", "PyTorch", "React.js", "Node.js"],
    current: false,
  },
];

const ExperienceTimeline = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-lg">
      <div className="mb-lg">
        <span className="font-data-mono text-label-caps text-primary-container uppercase tracking-widest block mb-xs animate-glitch">
          {"// EXPERIENCE"}
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface border-b border-slate-800 pb-sm">
          The Ledger
        </h2>
      </div>
      <div className="flex flex-col">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeOut", delay: i * 0.1 }}
            className="group flex flex-col md:flex-row justify-between items-start md:items-center py-sm border-b border-slate-800 hover:bg-slate-900 transition-colors px-sm -mx-sm cursor-pointer"
          >
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-headline-lg text-[20px] text-on-surface group-hover:text-primary-container transition-colors">
                  {exp.role}
                </h3>
                {exp.current && (
                  <span className="font-data-mono text-[10px] text-primary-container border border-primary-container px-2 py-0.5 uppercase">
                    CURRENT
                  </span>
                )}
              </div>
              <div className="font-data-mono text-[12px] text-on-surface-variant">
                @{exp.company} · {exp.period}
              </div>
            </div>
            <div className="mt-xs md:mt-0 flex items-center gap-md">
              <div className="hidden md:flex flex-wrap gap-xs">
                {exp.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="bg-surface-variant text-primary-container font-data-mono text-[10px] px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <svg
                className="text-slate-600 group-hover:text-primary-container transition-colors"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
