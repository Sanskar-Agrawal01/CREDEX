import React from 'react';
import { Mail, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:contact@softsell.com",
      label: "Email"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/softsell",
      label: "Twitter"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://instagram.com/softsell",
      label: "Instagram"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/company/softsell",
      label: "LinkedIn"
    }
  ];

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-lg">SOFTSELL</span>
          </div>
          
          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors p-2 hover:bg-background/80 rounded-lg"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-foreground/50">
          © {new Date().getFullYear()} SoftSell. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 