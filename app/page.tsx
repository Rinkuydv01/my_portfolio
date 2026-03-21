import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { TechnicalArsenal } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { CodingProfiles } from "@/components/CodingProfiles";
import { Certifications } from "@/components/Certifications";
import { Footer } from "@/components/Footer";
import { MouseGradient } from "@/components/ui/MouseGradient";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-white selection:bg-[#8A0303]/40 selection:text-white">
      <MouseGradient />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechnicalArsenal />
      <Skills />
      <CodingProfiles />
      <Certifications />
      <Footer />
    </main>
  );
}
