"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import FadeIn from "../ui/FadeIn";
import { portfolio } from "@/data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28"
    >
      <FadeIn>
        <SectionTitle
          subtitle="Portfolio"
          title="Featured Projects"
        />
      </FadeIn>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {portfolio.projects
          .filter((project) => project.featured)
          .map((project) => (
            <motion.div
              key={project.id}
              whileHover={{
                scale: 1.01,
                y: -4,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 24,
              }}
              className="group flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 sm:p-8"
            >
              {/* Company */}
              <p className="text-sm font-semibold text-blue-400">
                {project.company}
              </p>

              {/* Title */}
              <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                {project.title}
              </h3>

              {/* Duration */}
              <p className="mt-2 text-sm text-slate-500">
                {project.duration}
              </p>

              {/* Description */}
              <p className="mt-5 flex-1 text-base leading-7 text-slate-400 sm:leading-8">
                {project.shortDescription}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 transition-colors duration-200 hover:border-blue-500 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4">
                <div className="space-y-2">
                  {project.highlights.map((highlight) => (
                    <p
                      key={highlight}
                      className="text-sm font-medium leading-6 text-blue-400"
                    >
                      🚀 {highlight}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
}