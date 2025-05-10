import React from 'react';
import '@fontsource/syne/400.css';
import '@fontsource/syne/700.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/700.css';
import { ThemeProvider } from './context/ThemeContext';

// Import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';
// @ts-expect-error - No type definitions available for Particles component
import Particles from './assets/Particles';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <div className="fixed inset-0 z-0">
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={2000}
            particleSpread={15}
            speed={0.2}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            particleHoverFactor={2}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <HowItWorks />
          <WhyChooseUs />
          <Testimonials />
          <ContactForm />
          <Footer />
        </div>
        <AIChatbot />
      </div>
    </ThemeProvider>
  );
};

export default App;