import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-primary" data-testid="text-logo">
            Ansab Miana
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-home">Home</a>
            <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-experience">Experience</a>
            <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-skills">Skills</a>
            <a href="#education" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-education">Education</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-contact">Contact</a>
          </div>
          
          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={toggleMobileMenu} data-testid="button-mobile-menu">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`mobile-menu fixed top-16 right-0 w-64 h-full bg-card shadow-lg md:hidden ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="flex flex-col p-6 space-y-4">
          <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors" onClick={handleNavClick} data-testid="link-home-mobile">Home</a>
          <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors" onClick={handleNavClick} data-testid="link-experience-mobile">Experience</a>
          <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors" onClick={handleNavClick} data-testid="link-skills-mobile">Skills</a>
          <a href="#education" className="text-muted-foreground hover:text-foreground transition-colors" onClick={handleNavClick} data-testid="link-education-mobile">Education</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors" onClick={handleNavClick} data-testid="link-contact-mobile">Contact</a>
        </div>
      </div>
    </nav>
  );
}
