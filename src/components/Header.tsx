import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useABTest } from '@/contexts/ABTestContext';
import AppDownloadModal from './modals/AppDownloadModal';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const { tests } = useABTest();

  const navLinks = [
    { href: '#mission', label: 'Artisan Bakery' },
    { href: '#mission', label: 'Our Mission' },
    { href: '#app', label: 'Léonie+ App' },
    { href: '#community', label: 'Community' },
    { href: '#b2b', label: 'B2B' },
  ];

  const ctaText = tests.navCTA === 'B' ? 'Start Free Trial' : 'Download Léonie+';

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 bg-card/95 backdrop-blur-sm shadow-leonie z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-primary flex items-center group">
            <Leaf className="w-7 h-7 mr-2 transition-transform group-hover:rotate-12" />
            <span className="font-display">LEONIE</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground hover:text-primary transition-colors duration-150 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => setIsAppModalOpen(true)}
              className="rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              {ctaText}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-primary hover:bg-primary/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border animate-fade-in">
            <nav className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  setIsAppModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full mt-2 rounded-full"
              >
                {ctaText}
              </Button>
            </nav>
          </div>
        )}
      </header>

      <AppDownloadModal open={isAppModalOpen} onOpenChange={setIsAppModalOpen} />
    </>
  );
};

export default Header;