import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, StarsCanvas, HeroStarsCanvas, Works, Footer } from './components';

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative hero-container">
          <Navbar />
          <HeroStarsCanvas /> {/* Render stars first with pointer-events: none */}
          <Hero /> {/* Render Hero with car model on top */}
        </div>

        <div className="stars-section">
          <Experience />
          <StarsCanvas className="stars-services" />
        </div>

        <div className="stars-section">
          <Works />
          <StarsCanvas className="stars-tourismus" />
        </div>

        <div className="stars-section">
          <About />
          <StarsCanvas className="stars-fuhrpark" />
        </div>

        <div className="stars-section">
          <Contact />
          <StarsCanvas className="stars-contact" />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
