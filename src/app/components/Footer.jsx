import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant mt-xl">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 py-md gap-md max-w-7xl mx-auto">
        <div className="text-primary-container font-data-mono text-label-caps uppercase tracking-widest">
          {"\u00A9 2026 SAKIB AHAMMED SHAHON "}
          <span className="animate-pulse-live">{"// SYSTEM_STABLE"}</span>
        </div>
        <div className="flex gap-md">
          <a
            href="https://github.com/sakib3201"
            target="_blank"
            rel="noopener noreferrer"
            className="font-data-mono text-label-caps uppercase tracking-widest text-outline hover:text-primary-container transition-colors duration-200 py-xs"
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com/in/sakib-ahamed-shahon"
            target="_blank"
            rel="noopener noreferrer"
            className="font-data-mono text-label-caps uppercase tracking-widest text-outline hover:text-primary-container transition-colors duration-200 py-xs"
          >
            LINKEDIN
          </a>
          <a
            href="https://www.youtube.com/@sakib3201"
            target="_blank"
            rel="noopener noreferrer"
            className="font-data-mono text-label-caps uppercase tracking-widest text-outline hover:text-primary-container transition-colors duration-200 py-xs"
          >
            YOUTUBE
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
