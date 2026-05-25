import { useEffect, useState } from 'react';
import Navbar from './Layout/Navbar';
import Hero from './Sections/Hero';
import Projects from './Sections/Projects';
import Contact from './Sections/Contact';
import About from './Sections/About';
import Experience from './Sections/Experience';
import Testimonials from './Sections/Testimonials';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoaded(true), 120);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div className={`min-h-screen overflow-x-hidden transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <main style={{ paddingTop: '5rem' }}>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
