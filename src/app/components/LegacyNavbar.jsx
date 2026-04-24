"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "HOME" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/about", label: "ABOUT" },
];

const LegacyNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-container-lowest border-b border-outline-variant h-16 flex items-center">
      <div className="flex justify-between items-center w-full px-6 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-primary-container font-data-mono text-sm font-black tracking-widest uppercase hover:opacity-80 transition-opacity"
        >
          SAKIB AHAMMED SHAHON
        </Link>
        <div className="hidden md:flex gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-data-mono text-label-caps uppercase tracking-widest transition-colors duration-200 py-sm ${
                pathname === href
                  ? "text-primary-container border-b border-primary-container"
                  : "text-outline hover:text-primary-container"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
        <button
          aria-label="Toggle navigation"
          className="md:hidden text-primary-container hover:bg-surface-container-low transition-colors p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default LegacyNavbar;
