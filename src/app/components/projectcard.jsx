"use client";
import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index = 0 }) => {
  const {
    title,
    description,
    tags = [],
    liveLink,
    githubLink,
    youtubeLink,
  } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className="bg-surface-container-low border border-outline-variant p-md group hover:border-primary-container transition-colors duration-200 flex flex-col gap-sm"
    >
      <div className="border-b border-outline-variant pb-sm">
        <h3 className="font-headline-lg text-[20px] text-on-surface group-hover:text-primary-container transition-colors">
          {title}
        </h3>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant flex-1">
        {description}
      </p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-xs">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-surface-variant text-primary-container font-data-mono text-[10px] px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="flex gap-md flex-wrap">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-data-mono text-[12px] text-primary-container hover:underline uppercase tracking-widest inline-flex items-center gap-1 group/link"
          >
            LIVE
            <span className="inline-block group-hover/link:translate-x-0.5 transition-transform duration-150">→</span>
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-data-mono text-[12px] text-primary-container hover:underline uppercase tracking-widest inline-flex items-center gap-1 group/link"
          >
            GITHUB
            <span className="inline-block group-hover/link:translate-x-0.5 transition-transform duration-150">→</span>
          </a>
        )}
        {youtubeLink && (
          <a
            href={youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-data-mono text-[12px] text-primary-container hover:underline uppercase tracking-widest inline-flex items-center gap-1 group/link"
          >
            DEMO
            <span className="inline-block group-hover/link:translate-x-0.5 transition-transform duration-150">→</span>
          </a>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
