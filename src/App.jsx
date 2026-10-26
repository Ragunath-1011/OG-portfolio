import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';
import ResumeBanner from './components/ResumeBanner';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <ResumeBanner />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
