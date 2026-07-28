import SectionTitle from "../ui/SectionTitle";
import FadeIn from "../ui/FadeIn";
import { portfolio } from "@/data/portfolio";

export default function Experience() {
  return (
    <FadeIn>
      <section
        id="experience"
        className="mx-auto max-w-7xl px-8 py-28"
      >

        <SectionTitle
          subtitle="Career"
          title="Experience"
        />


        <div className="relative border-l border-slate-700">

          {portfolio.experience.map((job) => (

            <div
              key={job.id}
              className="relative mb-20 ml-8 rounded-2xl border border-slate-800 bg-slate-900/40 p-8 transition hover:border-blue-500 hover:shadow-2xl"
            >

              {/* Timeline Dot */}

              <div className="absolute -left-[42px] top-10 h-5 w-5 rounded-full border-4 border-slate-950 bg-blue-500" />


              {/* Header */}

              <div className="flex items-start justify-between gap-6">

                <div>

                  <h3 className="text-3xl font-bold text-white">
                    {job.company}
                  </h3>


                  <p className="mt-2 text-blue-400">
                    {job.role}
                  </p>


                  <p className="mt-1 text-sm text-slate-400">
                    📍 {job.location}
                  </p>

                </div>


                <span className="whitespace-nowrap text-slate-400">
                  {job.duration}
                </span>

              </div>


              {/* Summary */}

              <p className="mt-6 leading-8 text-slate-300">
                {job.summary}
              </p>


              {/* Technologies */}

              <div className="mt-6 flex flex-wrap gap-3">

                {job.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300"
                  >
                    {tech}
                  </span>

                ))}

              </div>


              {/* Achievements */}

              <ul className="mt-8 space-y-4 text-slate-300">

                {job.achievements.map((achievement) => (

                  <li
                    key={achievement}
                    className="flex gap-3"
                  >

                    <span className="text-blue-400">
                      ✓
                    </span>

                    <span>
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