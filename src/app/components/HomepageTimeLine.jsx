"use client";
import React from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2003",
    title: "That Magic Moment",
    text: "When I first saw a computer, it was nothing short of magic. The fascination of how a machine could do so many things created an impression that lasted a lifetime. This is when the spark was ignited.",
  },
  {
    year: "2014",
    title: "Hello World!!",
    text: "I wrote my first \"Hello World\" in Python. It was the first time I wrote a program and saw the output. That was the moment I fell in love with programming. This is where my journey began.",
  },
  {
    year: "2015",
    title: "Out of the Terminal",
    text: "First time I wrote a program with a graphical user interface — HTML, CSS, and JavaScript. I was no longer confined to the terminal. Out in the open world of the web.",
  },
  {
    year: "2016",
    title: "Is That Programming I 'C'?",
    text: "From the moment I wrote my first program in C, I decided I wanted to master it. Programming was no longer just a hobby — it was a passion.",
  },
  {
    year: "2019",
    title: "Algorithm for Passion",
    text: "Enrolled in a CSE program at JKKNIU. Long sleepless nights, countless hours of coding, hundreds of problems to solve. Problem solving became my passion. I became part of a community of competitive programmers.",
  },
  {
    year: "2021",
    title: "It Can Learn!!!",
    text: "Stepped into the world of machine learning and AI. Fascinated by how a computer can learn from data. I was writing code that could predict and make decisions.",
  },
  {
    year: "2023",
    title: "Passion & Profession",
    text: "Started freelance software engineering. Later in November, joined Incevio as a full-time web developer. Code became profession.",
  },
  {
    year: "2024",
    title: "Learner of a Lifetime",
    text: "Still learning, still writing code, still solving problems. Exploring cloud computing, code architecture, and system design. Growing the Mymensingh programmers community.",
  },
];

const HomepageTimeLine = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-lg">
      <div className="mb-lg">
        <span className="font-data-mono text-label-caps text-primary-container uppercase tracking-widest block mb-xs animate-glitch">
          {"// TIMELINE"}
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">
          The Journey
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl italic">
          &ldquo;Programming has been an amazing journey. It&apos;s not just about writing code, but a passion that burns bright in my soul.&rdquo;
        </p>
      </div>
      <div className="relative pl-0 md:pl-[60px]">
        <div className="absolute left-[3px] top-0 bottom-0 w-[1px] bg-outline-variant hidden md:block" />
        <div className="flex flex-col gap-lg">
          {milestones.map((m) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <div
                className="absolute -left-[57px] top-2 w-2 h-2 bg-primary-container hidden md:block"
                style={{ boxShadow: "0 0 8px rgba(125, 211, 252, 0.6)" }}
              />
              <div className="flex flex-col md:flex-row gap-sm md:gap-md items-start">
                <div className="w-16 font-data-mono text-data-mono text-primary-container pt-1 shrink-0">
                  &gt; {m.year}
                </div>
                <div className="flex-1 bg-surface-container-high border border-outline-variant p-md group hover:border-primary-container/50 transition-colors relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary-container/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="font-headline-lg text-[20px] text-on-surface mb-xs">
                    {m.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {m.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageTimeLine;
