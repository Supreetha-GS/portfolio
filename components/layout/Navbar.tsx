"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Certifications",
  "Contact",
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const middle = window.innerHeight / 2;

      // Highlight Contact when reaching the bottom
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5
      ) {
        setActive("contact");
        return;
      }

      for (const link of links) {
        const section = document.getElementById(link.toLowerCase());

        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (rect.top <= middle && rect.bottom >= middle) {
          setActive(section.id);
          break;
        }
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-lg"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-4 transition-opacity hover:opacity-80"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold">
            SG
          </div>

          <div>
            <h1 className="font-semibold text-white">Supreetha G S</h1>

            <p className="text-xs text-slate-400">Data Engineer</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`transition-colors duration-300 ${
                active === link.toLowerCase()
                  ? "text-blue-400"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="flex flex-col py-4">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={`px-6 py-4 transition-colors ${
                  active === link.toLowerCase()
                    ? "bg-blue-500/10 text-blue-400"
                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                }`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
}