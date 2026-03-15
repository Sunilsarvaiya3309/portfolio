import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import HackerFooter from "../components/HackerFooter";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <div className="p-4">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

      {/* Client-side footer */}
      <HackerFooter />
    </main>
  );
}
