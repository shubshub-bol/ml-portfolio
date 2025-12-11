import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SkillsMarquee from './components/SkillsMarquee';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <SkillsMarquee />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
