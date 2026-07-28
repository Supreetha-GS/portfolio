"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
} from "react-icons/fa";

import { portfolio } from "@/data/portfolio";


const iconMap = {
  Github: FaGithub,
  Linkedin: FaLinkedin,
  Medium: FaMedium,
  FileText,
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-8 pt-10"
    >
      <div className="grid w-full items-center gap-20 lg:grid-cols-[1.2fr_0.8fr]">
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-lg font-semibold text-blue-400">
            👋 Hi, I am
          </p>

          <h1 className="mt-3 text-6xl font-black leading-none lg:text-7xl">
            {portfolio.profile.fullName}
          </h1>

          <h2 className="mt-6 text-3xl font-semibold text-slate-200">
            {portfolio.profile.title} @ {portfolio.profile.company}
          </h2>

          <p className="mt-3 text-xl text-slate-400">
            {portfolio.profile.subtitle}
          </p>

          <p className="mt-8 whitespace-pre-line text-lg leading-8 text-slate-400">
            {portfolio.profile.about}
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">
            {portfolio.heroButtons.map((button) => {
              const Icon =
                iconMap[
                  button.icon as keyof typeof iconMap
                ] ?? FileText;

              return (
                <a
                  key={button.title}
                  href={button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    button.primary
                      ? "inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/20"
                      : "inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-slate-900"
                  }
                >
                  <Icon size={18} />
                  {button.title}
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 0.8 },
            x: { duration: 0.8 },
            scale: { duration: 0.8 },
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative rounded-full border-4 border-blue-500 p-2 shadow-2xl">
              <Image
                src={portfolio.profile.image}
                alt={portfolio.profile.fullName}
                width={320}
                height={320}
                priority
                className="h-[320px] w-[320px] rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}