import React from 'react';
import { Building2, Sun, Moon } from 'lucide-react';
// @ts-expect-error - No type definitions available for ShinyText component
import ShinyText from '../assets/ShinyText';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Building2 className="text-primary h-6 w-6" />
          <span className="font-mono font-bold text-xl">SOFTSELL</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors">Home</a>
          <a href="#why-us" className="text-foreground/80 hover:text-primary transition-colors">Resources</a>
          <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">Testimonials</a>
          <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-background hover:bg-background/80 transition-all duration-300 ease-in-out"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-foreground transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="w-5 h-5 text-foreground transition-transform duration-300 hover:rotate-45" />
            )}
          </button>
          <ShinyText text="LOGIN" disabled={false} speed={3} className='button' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 