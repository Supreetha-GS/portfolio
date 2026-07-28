import SectionTitle from "../ui/SectionTitle";
import FadeIn from "../ui/FadeIn";
import { portfolio } from "@/data/portfolio";

export default function Certifications() {
  return (
    <FadeIn>
      <section
        id="certifications"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28"
      >
        <SectionTitle
          subtitle="Learning"
          title="Certifications"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {portfolio.certifications.map((cert) => (
            <div
              key={cert.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 sm:p-8"
            >
              {/* Title */}

              <h3 className="flex items-start gap-3 text-base font-semibold text-white sm:text-lg">
                <span className="text-xl">🏆</span>

                <span>{cert.title}</span>
              </h3>

              {/* Issuer */}

              <p className="mt-4 text-sm text-slate-400 sm:text-base">
                {cert.issuer}
              </p>

              {/* Year */}

              <p className="mt-2 inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 sm:text-sm">
                {cert.year}
              </p>

              {/* Credential */}

              {cert.credential && (
                <p className="mt-4 break-all text-sm text-slate-500">
                  {cert.credential}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}