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
        className="mx-auto max-w-7xl px-8 py-28"
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
              className="text-lg leading-9 text-slate-300"
            >
              {paragraph}
            </p>
          ))}
        </div>

       {/* Education & Certifications */}

<div className="mt-16 grid gap-8 lg:grid-cols-2">

  {/* Education */}

  <div>
    <h3 className="mb-6 text-xl font-semibold text-white">
      {about.educationTitle}
    </h3>

    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
      <div className="space-y-8">
        {about.educationHighlights.map((education) => (
          <div key={education.degree}>
            <h4 className="text-lg font-semibold text-white">
              {education.degree}
            </h4>

            <p className="mt-1 text-blue-400">
              {education.university}
            </p>

            <p className="mt-1 text-slate-400">
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

    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
      <div className="space-y-4">
        {about.certificationHighlights.map((cert) => (
          <div
            key={cert}
            className="flex items-start gap-3"
          >
            <span className="text-blue-400">🏆</span>

            <p className="text-slate-300">
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

          <div className="flex flex-wrap gap-3">
            {about.featuredSkills.map((skill) => (
              <TechBadge
                key={skill.name}
                name={skill.name}
              />
            ))}
          </div>
        </div>

        {/* Stats */}

        <div className="mt-20 grid grid-cols-2 gap-10 md:grid-cols-4">
          {portfolio.stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-4xl font-bold text-blue-400">
                {stat.value}
              </h3>

              <p className="mt-2 text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}