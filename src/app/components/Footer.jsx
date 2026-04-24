import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-slate-800 mt-xl">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-8 gap-4 max-w-7xl mx-auto">
        <div className="text-primary-container font-data-mono text-label-caps uppercase tracking-widest">
          {"© 2024 SAKIB AHAMMED SHAHON // SYSTEM_STABLE"}
        </div>
        <div className="flex gap-6">
          <a
            href="https://github.com/sakib3201"
            target="_blank"
            rel="noopener noreferrer"
            className="font-data-mono text-label-caps uppercase tracking-widest text-slate-600 hover:text-primary-container transition-colors duration-150"
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com/in/sakib-ahamed-shahon"
            target="_blank"
            rel="noopener noreferrer"
            className="font-data-mono text-label-caps uppercase tracking-widest text-slate-600 hover:text-primary-container transition-colors duration-150"
          >
            LINKEDIN
          </a>
          <a
            href="https://www.youtube.com/@sakib3201"
            target="_blank"
            rel="noopener noreferrer"
            className="font-data-mono text-label-caps uppercase tracking-widest text-slate-600 hover:text-primary-container transition-colors duration-150"
          >
            YOUTUBE
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
