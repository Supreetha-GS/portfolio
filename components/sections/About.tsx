import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";
import TechBadge from "../ui/TechBadge";
import { portfolio } from "@/data/portfolio";

export default function About() {
  const about = portfolio.about;

  return (
    <FadeIn>
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28"
      >
        <SectionTitle
          subtitle={about.subtitle}
          title={about.title}
        />

        {/* About */}

        <div className="max-w-7xl space-y-8">
          {about.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-8 text-slate-300 sm:text-lg sm:leading-9"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Education & Certifications */}

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/* Education */}

          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              {about.educationTitle}
            </h3>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:border-blue-500 sm:p-8">
              <div className="space-y-8">
                {about.educationHighlights.map((education) => (
                  <div key={education.degree}>
                    <h4 className="text-base font-semibold text-white sm:text-lg">
                      {education.degree}
                    </h4>

                    <p className="mt-2 text-blue-400">
                      {education.university}
                    </p>

                    <p className="mt-1 text-sm text-slate-400 sm:text-base">
                      {education.duration}
                      {education.score && ` • ${education.score}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}

          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Certifications
            </h3>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:border-blue-500 sm:p-8">
              <div className="space-y-5">
                {about.certificationHighlights.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 text-blue-400">
                      🏆
                    </span>

                    <p className="text-sm leading-7 text-slate-300 sm:text-base">
                      {cert}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Featured Skills */}

        <div className="mt-16">
          <h3 className="mb-6 text-xl font-semibold text-white">
            {about.skillsTitle}
          </h3>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {about.featuredSkills.map((skill) => (
              <TechBadge
                key={skill.name}
                name={skill.name}
              />
            ))}
          </div>
        </div>

        {/* Stats */}

        <div className="mt-20 grid grid-cols-2 gap-5 md:grid-cols-4">
          {portfolio.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <h3 className="text-3xl font-bold text-blue-400 sm:text-4xl">
                {stat.value}
              </h3>

              <p className="mt-2 text-sm text-slate-400 sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}