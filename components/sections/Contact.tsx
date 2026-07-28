import SectionTitle from "../ui/SectionTitle";
import FadeIn from "../ui/FadeIn";
import { portfolio } from "@/data/portfolio";

export default function Contact() {
  return (
    <FadeIn>
      <section
        id="contact"
        className="mx-auto max-w-7xl px-8 py-28"
      >

        <SectionTitle
          subtitle={portfolio.contact.title}
          title="Contact"
        />


        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-10">

          <p className="text-lg leading-8 text-slate-300">
            {portfolio.contact.subtitle}
          </p>


          <div className="mt-8 space-y-5 text-xl">

            <a
              href={`mailto:${portfolio.contact.email}`}
              className="block text-slate-200 transition hover:text-blue-400"
            >
              📧 {portfolio.contact.email}
            </a>

            
              <a
                href={`tel:${portfolio.contact.phone.replace(/\s+/g, "")}`}
                className="block text-slate-200 transition hover:text-blue-400"
              >
                📱 {portfolio.contact.phone}
              </a>
            


            <a
              href={portfolio.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-slate-200 transition hover:text-blue-400"
            >
              💼 LinkedIn
            </a>


            <a
              href={portfolio.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-slate-200 transition hover:text-blue-400"
            >
              💻 GitHub
            </a>


            <p className="text-slate-400">
              📍 {portfolio.contact.location}
            </p>


          </div>

        </div>

      </section>
    </FadeIn>
  );
}