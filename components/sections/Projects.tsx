"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import FadeIn from "../ui/FadeIn";
import { portfolio } from "@/data/portfolio";

export default function Projects() {
  return (
    <FadeIn>
      <section
        id="projects"
        className="mx-auto max-w-7xl px-8 py-28"
      >

        <SectionTitle
          subtitle="Portfolio"
          title="Featured Projects"
        />


        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {portfolio.projects
            .filter((project) => project.featured)
            .map((project) => (

            <motion.div
              key={project.id}
              whileHover={{
                scale: 1.03,
                y: -8,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 20,
              }}
              className="group rounded-3xl border border-slate-800 bg-slate-900/40 p-8 transition-all duration-300 hover:border-blue-500 hover:shadow-2xl"
            >

              {/* Company */}

              <p className="text-sm font-medium text-blue-400">
                {project.company}
              </p>


              {/* Title */}

              <h3 className="mt-3 text-2xl font-bold text-white">
                {project.title}
              </h3>


              {/* Duration */}

              <p className="mt-2 text-sm text-slate-500">
                {project.duration}
              </p>


              {/* Description */}

              <p className="mt-5 leading-8 text-slate-400">
                {project.shortDescription}
              </p>


              {/* Technologies */}

              <div className="mt-6 flex flex-wrap gap-2">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </span>

                ))}

              </div>


              {/* Highlights */}

              <div className="mt-8 rounded-xl bg-blue-500/10 p-4">

                {project.highlights.map((highlight) => (

                  <p
                    key={highlight}
                    className="text-sm font-semibold text-blue-400"
                  >
                    🚀 {highlight}
                  </p>

                ))}

              </div>


            </motion.div>

          ))}

        </div>

      </section>
    </FadeIn>
  );
}