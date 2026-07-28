"use client";

import FadeIn from "../ui/FadeIn";
import { portfolio } from "@/data/portfolio";

export default function Stats() {
  return (
    <FadeIn>
      <section className="scroll-mt-20 mx-auto max-w-7xl px-8 py-20">

        <div className="grid gap-6 md:grid-cols-4">

          {portfolio.stats.map((stat) => (

            <div
              key={stat.label}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 text-center transition-all duration-300 hover:border-blue-500 hover:-translate-y-2"
            >

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