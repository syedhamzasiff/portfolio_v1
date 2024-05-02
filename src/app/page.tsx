import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SectionDivider from "@/components/SectionDivider";
import Projects from "@/components/projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <HeroSection/>
      <SectionDivider/>
      <AboutSection/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </main>
  );
}
