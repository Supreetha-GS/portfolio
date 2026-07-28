import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-slate-950 text-white">
      <Navbar />

      <Hero />

      <div className="flex justify-center py-4 sm:py-8">
        <ScrollIndicator />
      </div>

      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  );
}