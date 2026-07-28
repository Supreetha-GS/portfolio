import SectionTitle from "../ui/SectionTitle";
import FadeIn from "../ui/FadeIn";
import { portfolio } from "@/data/portfolio";

export default function Contact() {
  return (
    <FadeIn>
      <section
        id="contact"
        className="scroll-mt-20 mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28"
      >
        <SectionTitle
          subtitle={portfolio.contact.title}
          title="Contact"
        />

        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 sm:p-8 lg:p-10">
          <p className="text-base leading-8 text-slate-300 sm:text-lg">
            {portfolio.contact.subtitle}
          </p>

          <div className="mt-8 space-y-5">

            {/* Email */}

            <a
              href={`mailto:${portfolio.contact.email}`}
              className="flex items-center gap-3 break-all text-base text-slate-200 transition-colors hover:text-blue-400 sm:text-lg"
            >
              <span className="text-xl">📧</span>
              <span>{portfolio.contact.email}</span>
            </a>

            {/* Phone */}

            <a
              href={`tel:${portfolio.contact.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-3 text-base text-slate-200 transition-colors hover:text-blue-400 sm:text-lg"
            >
              <span className="text-xl">📱</span>
              <span>{portfolio.contact.phone}</span>
            </a>

            {/* LinkedIn */}

            <a
              href={portfolio.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-base text-slate-200 transition-colors hover:text-blue-400 sm:text-lg"
            >
              <span className="text-xl">💼</span>
              <span>LinkedIn</span>
            </a>

            {/* GitHub */}

            <a
              href={portfolio.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-base text-slate-200 transition-colors hover:text-blue-400 sm:text-lg"
            >
              <span className="text-xl">💻</span>
              <span>GitHub</span>
            </a>

            {/* Location */}

            <div className="flex items-center gap-3 text-base text-slate-400 sm:text-lg">
              <span className="text-xl">📍</span>
              <span>{portfolio.contact.location}</span>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}