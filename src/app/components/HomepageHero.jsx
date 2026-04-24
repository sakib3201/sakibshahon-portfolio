"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const tagline = "Agentic Engineer & AI Architect";
const chars = tagline.split("");

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.4 },
  },
};

const charVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.01 } },
};

const HomepageHero = () => {
  const [typingDone, setTypingDone] = useState(false);

  return (
    <section className="pt-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="border-l-2 border-primary-container pl-lg py-lg">
          <span className="font-data-mono text-label-caps text-primary-container uppercase tracking-widest mb-md block animate-glitch">
            {"// IDENTIFICATION"}
          </span>
          <h1 className="font-display-poetry text-display-poetry text-on-surface mb-md leading-tight">
            Sakib Ahammed Shahon
          </h1>
          <div className="font-headline-lg text-[24px] text-on-surface-variant mb-md flex items-center min-h-[36px]">
            <motion.span
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              aria-label={tagline}
              onAnimationComplete={() => setTypingDone(true)}
            >
              {chars.map((char, i) => (
                <motion.span key={i} variants={charVariants}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
            <motion.span
              className="text-primary-container ml-0.5"
              animate={
                typingDone
                  ? { opacity: 0 }
                  : { opacity: [1, 1, 0, 0, 1, 1, 0, 0] }
              }
              transition={
                typingDone
                  ? { duration: 0.5 }
                  : { duration: 0.8, repeat: Infinity }
              }
            >
              |
            </motion.span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mb-lg">
            Building AI-native systems and agentic features that ship fast and
            cost less. Specializing in agentic cost optimization, AI-first
            product design, and intelligent automation that actually works in
            production.
          </p>
          <div className="flex gap-sm flex-wrap">
            <Link
              href="/projects"
              className="font-data-mono text-label-caps uppercase px-md py-sm bg-primary-container text-on-primary rounded-none hover:bg-surface-tint transition-colors duration-150"
            >
              VIEW PROJECTS
            </Link>
            <a
              href="/files/Sakib-Ahamed-Shahon-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-data-mono text-label-caps uppercase px-md py-sm border border-primary-container text-primary-container rounded-none hover:bg-slate-900 transition-colors duration-150"
            >
              VIEW RESUME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageHero;
