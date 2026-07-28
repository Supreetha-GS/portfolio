import SectionTitle from "../ui/SectionTitle";
import FadeIn from "../ui/FadeIn";
import { portfolio } from "@/data/portfolio";

export default function Certifications() {
  return (
    <FadeIn>
      <section
        id="certifications"
        className="mx-auto max-w-7xl px-8 py-28"
      >

        <SectionTitle
          subtitle="Learning"
          title="Certifications"
        />


        <div className="grid gap-6 md:grid-cols-2">

          {portfolio.certifications.map((cert) => (

            <div
              key={cert.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-blue-500"
            >

              <h3 className="text-lg font-semibold text-white">
                🏆 {cert.title}
              </h3>


              <p className="mt-3 text-slate-400">
                {cert.issuer}
              </p>


              <p className="mt-1 text-sm text-blue-400">
                {cert.year}
              </p>


            </div>

          ))}

        </div>

      </section>
    </FadeIn>
  );
}