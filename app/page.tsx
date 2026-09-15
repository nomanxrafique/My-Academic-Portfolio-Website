import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Research from '@/components/Research';
import ResearchDirection from '@/components/ResearchDirection';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Coursework from '@/components/Coursework';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import ResearchGoals from '@/components/ResearchGoals';
import CV from '@/components/CV';
import GitHubSection from '@/components/GitHubSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Research />
        <ResearchDirection />
        <Skills />
        <Education />
        <Coursework />
        <Projects />
        <Certifications />
        <ResearchGoals />
        <CV />
        <GitHubSection />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
