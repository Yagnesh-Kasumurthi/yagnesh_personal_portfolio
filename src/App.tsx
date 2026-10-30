import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Education } from './components/sections/Education';
import { Projects } from './components/sections/Projects';
import { Journal } from './components/sections/Journal';
import { Skills } from './components/sections/Skills';
import { Certifications } from './components/sections/Certifications';
import { Activities } from './components/sections/Activities';
import { Hobbies } from './components/sections/Hobbies';
import { Resume } from './components/sections/Resume';
import { Contact } from './components/sections/Contact';

export const App: React.FC = () => {
  return (
    <div className="app-container">
      {/* 1. Navigation */}
      <Navbar />

      <main className="site-main">
        {/* 2. Hero Poster Introduction */}
        <Hero />

        {/* 3. 01. About Me */}
        <About />

        {/* 4. 02. Education Journey */}
        <Education />

        {/* 5. 03. Projects Showcase */}
        <Projects />

        {/* 6. 04. Engineering Journal */}
        <Journal />

        {/* 7. 05. Skills Matrix */}
        <Skills />

        {/* 8. 06. Courses & Certifications */}
        <Certifications />

        {/* 9. Activities & Leadership */}
        <Activities />

        {/* 10. Beyond Engineering (Hobbies & Languages) */}
        <Hobbies />

        {/* 11. Official Resume Dossier */}
        <Resume />

        {/* 12. 07. Get In Touch (Contact) */}
        <Contact />
      </main>

      {/* 13. Deep Navy Footer */}
      <Footer />
    </div>
  );
};

export default App;
