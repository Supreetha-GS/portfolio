import SectionTitle from "../ui/SectionTitle";
import FadeIn from "../ui/FadeIn";
import { portfolio } from "@/data/portfolio";

export default function Experience() {
  return (
    <FadeIn>
      <section
        id="experience"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28"
      >
        <SectionTitle
          subtitle="Career"
          title="Experience"
        />

        <div className="relative mt-12 border-l border-slate-700">

          {portfolio.experience.map((job) => (
            <div
              key={job.id}
              className="relative mb-12 ml-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:border-blue-500 hover:shadow-2xl sm:mb-16 sm:ml-8 sm:p-8"
            >
              {/* Timeline Dot */}

              <div className="absolute -left-[31px] top-8 h-4 w-4 rounded-full border-4 border-slate-950 bg-blue-500 sm:-left-[42px] sm:top-10 sm:h-5 sm:w-5" />

              {/* Header */}

              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

                <div>

                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    {job.company}
                  </h3>

                  <p className="mt-2 text-base text-blue-400 sm:text-lg">
                    {job.role}
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    📍 {job.location}
                  </p>

                </div>

                <span className="text-sm text-slate-400 md:text-base md:whitespace-nowrap">
                  {job.duration}
                </span>

              </div>

              {/* Summary */}

              <p className="mt-6 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                {job.summary}
              </p>

              {/* Technologies */}

              <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">

                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700 px-3 py-1.5 text-xs text-slate-300 sm:px-4 sm:py-2 sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              {/* Achievements */}

              <ul className="mt-8 space-y-4">

                {job.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 text-blue-400">
                      ✓
                    </span>

                    <span className="text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                      {achievement}
                    </span>
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>
      </section>
    </FadeIn>
  );
}