"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) =>
        document.getElementById(link.toLowerCase())
      );

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
initial={{
y:-100
}}
animate={{
y:0
}}
transition={{
duration:.5
}}
     className="fixed top-0 left-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-lg">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <div className="flex items-center gap-4">
        <a
          href="#hero"
          className="flex items-center gap-4 transition-opacity hover:opacity-80"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold">
            SG
          </div>

          <div>

            <h1 className="font-semibold">
              Supreetha G S
            </h1>

            <p className="text-xs text-slate-400">
              Data Engineer
            </p>

          </div>
          </a>

        </div>

        <div className="flex gap-8">

          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`transition ${
                active === link.toLowerCase()
                  ? "text-blue-400"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link}
            </a>
          ))}

        </div>

      </div>

    </motion.nav>
  );
}