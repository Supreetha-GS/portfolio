import SectionTitle from "../ui/SectionTitle";
import FadeIn from "../ui/FadeIn";
import { portfolio } from "@/data/portfolio";

export default function Skills() {
  return (
    <FadeIn>
      <section
        id="skills"
        className="mx-auto max-w-7xl px-8 py-28"
      >

        <SectionTitle
          subtitle="Tech Stack"
          title="Skills"
        />


        <div className="grid gap-8 md:grid-cols-2">

          {Object.entries(portfolio.skills).map(
            ([category, skills]) => (

            <div
              key={category}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8"
            >

              <h3 className="mb-6 text-2xl font-bold text-white">
                {category}
              </h3>


              <div className="flex flex-wrap gap-3">

                {skills.map((skill) => (

                  <div
                    key={skill.name}
                    className="rounded-full border border-slate-700 px-4 py-2"
                  >

                    <span className="text-slate-200">
                      {skill.name}
                    </span>

                    <span className="ml-2 text-xs text-blue-400">
                      {skill.level}
                    </span>

                  </div>

                ))}

              </div>


            </div>

          ))}

        </div>

      </section>
    </FadeIn>
  );
}