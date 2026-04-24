"use client";
import React from "react";
import { motion } from "framer-motion";
import GlitchLabel from "./GlitchLabel";

const expertiseCards = [
  {
    id: "01",
    title: "Agentic Engineering",
    tags: ["LangChain", "LangGraph", "CrewAI", "OpenAI", "Claude"],
    description:
      "Designing and building autonomous AI agents that reason, plan, and execute multi-step tasks. From tool-calling agents to complex agentic workflows that replace manual processes.",
  },
  {
    id: "02",
    title: "AI-First Feature Development",
    tags: ["RAG", "Vector DBs", "Prompt Engineering", "Fine-tuning", "APIs"],
    description:
      "Shipping AI-native features that are core to the product — not bolted on. RAG pipelines, intelligent search, conversational interfaces, and recommendation systems built for scale.",
  },
  {
    id: "03",
    title: "Agentic Cost Optimization",
    tags: ["Token Optimization", "Caching", "Model Routing", "Evaluation", "Monitoring"],
    description:
      "Cutting AI infrastructure costs without sacrificing quality. Smart model routing, prompt optimization, intelligent caching, and rigorous eval-driven development to maximize ROI on every token.",
  },
];

const ServiceSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-lg">
      <div className="mb-lg">
        <GlitchLabel className="font-data-mono text-label-caps text-primary-container uppercase tracking-widest block mb-xs">
          {"// SKILLS"}
        </GlitchLabel>
        <h2 className="font-headline-lg text-headline-lg text-on-surface border-b border-outline-variant pb-sm">
          Expertise
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {expertiseCards.map((card, i) => (
          <motion.article
            key={card.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            className="bg-surface-container-low border border-outline-variant p-md group hover:border-primary-container transition-colors duration-200"
          >
            <div className="border-b border-outline-variant pb-sm mb-md">
              <h3 className="font-data-mono text-data-mono text-primary-container uppercase tracking-widest">
                {"Expertise // "}{card.id}
              </h3>
            </div>
            <h4 className="font-headline-lg text-[24px] text-on-surface mb-sm">
              {card.title}
            </h4>
            <div className="flex flex-wrap gap-xs mb-md">
              {card.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-surface-variant text-primary-container font-data-mono text-[10px] px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {card.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
