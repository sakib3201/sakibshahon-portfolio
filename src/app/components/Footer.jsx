import React from "react";
import { SiGithub, SiLinkedin, SiYoutube } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-primary text-neutral-content">
      <aside className="items-center grid-flow-col">
        <p>
          Copyright by Sakib Ahamed Shahon&copy;, 2024 - All rights reserved
        </p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a className="hover:text-black"><SiGithub size={30} /></a>
        <a className="hover:text-blue-500"><SiLinkedin size={30} /></a>
        <a className="hover:text-red-500"><SiYoutube size={30} /></a>
      </nav>
    </footer>
  );
};

export default Footer;
