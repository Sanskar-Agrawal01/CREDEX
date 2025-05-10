import React from 'react';
import { Building2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Building2 className="text-primary h-6 w-6" />
            <span className="font-mono font-bold text-xl">SOFTSELL</span>
          </div>
          <div className="flex gap-6 mb-6 md:mb-0">
            <a href="#how-it-works" className="text-foreground/70 hover:text-primary transition-colors">How It Works</a>
            <a href="#why-us" className="text-foreground/70 hover:text-primary transition-colors">Why Choose Us</a>
            <a href="#testimonials" className="text-foreground/70 hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-8 text-center text-foreground/50 text-sm font-mono">
          © 2024 SoftSell. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 