import React from "react";

const ProjectsHeroSection = () => {
  return (
    <section className="pt-16 max-w-7xl mx-auto px-6 py-xl border-b border-outline-variant">
      <span className="font-data-mono text-label-caps text-primary-container uppercase tracking-widest block mb-md animate-glitch">
        {"// ALL WORK"}
      </span>
      <h1 className="font-display-poetry text-display-poetry text-primary-fixed mb-md">
        Projects
      </h1>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
        Each project taught me new things and helped me grow as a software
        engineer. If you have a project in mind, I would love to help bring it
        to life — especially if it solves a problem or helps people.
      </p>
    </section>
  );
};

export default ProjectsHeroSection;
