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
      className="scroll-mt-20 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 sm:px-8 lg:py-28"
    >
      <div className="grid w-full gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

        {/* Profile Image - Mobile First */}
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
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
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
                className="h-56 w-56 rounded-full object-cover sm:h-72 sm:w-72 lg:h-[320px] lg:w-[320px]"
              />
            </div>
          </div>
        </motion.div>

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 mx-auto max-w-2xl text-center lg:order-1 lg:mx-0 lg:text-left"
        >
          <p className="text-base font-semibold text-blue-400 sm:text-lg">
            👋 Hi, I am
          </p>

          <h1 className="mt-4 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            {portfolio.profile.fullName}
          </h1>

          <h2 className="mt-6 text-xl font-semibold text-slate-200 sm:text-2xl lg:text-3xl">
            {portfolio.profile.title} @ {portfolio.profile.company}
          </h2>

          <p className="mt-3 text-base text-slate-400 sm:text-lg">
            {portfolio.profile.subtitle}
          </p>

          <p className="mt-8 whitespace-pre-line text-base leading-8 text-slate-400 sm:text-lg">
            {portfolio.profile.about}
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            {portfolio.heroButtons.map((button) => {
              const Icon =
                iconMap[
                  button.icon as keyof typeof iconMap
                ] ?? FileText;

              return (
                <a
                  key={button.title}
                  href={button.link}
                  target={
                    button.link.startsWith("/")
                      ? "_self"
                      : "_blank"
                  }
                  rel={
                    button.link.startsWith("/")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className={
                    button.primary
                      ? "inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/20"
                      : "inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-slate-900"
                  }
                >
                  <Icon size={18} />
                  {button.title}
                </a>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}