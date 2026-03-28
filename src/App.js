import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import SiteProjects from './components/SiteProjects/SiteProjects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <SiteProjects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
