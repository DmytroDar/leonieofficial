import { useABTest } from '@/contexts/ABTestContext';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';

const footerLinks = {
  app: [
    { label: 'Online Ordering', href: '#app' },
    { label: 'Subscriptions', href: '#app' },
    { label: 'Loyalty Program', href: '#app' },
    { label: 'Anti-Waste Offers', href: '#' },
  ],
  bakery: [
    { label: 'Our Locations (Paris)', href: '#' },
    { label: 'Artisanal Craftsmanship', href: '#mission' },
    { label: 'Community Events', href: '#community' },
    { label: 'Careers', href: '#' },
  ],
  contact: [
    { label: 'B2B Meal Solutions', href: '#b2b' },
    { label: 'Event Space Rental', href: '#' },
    { label: 'Help & Support', href: '#' },
  ],
};

const Footer = () => {
  const { tests } = useABTest();
  const [email, setEmail] = useState('');

  // A/B Test 9: Footer with newsletter signup
  const showNewsletter = tests.footerDesign === 'B';

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: 'Subscribed!',
        description: "You'll receive our latest updates and exclusive offers.",
      });
      setEmail('');
    }
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-leonie-dark text-primary-foreground">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {showNewsletter && (
          <div className="mb-12 pb-12 border-b border-primary-foreground/20">
            <div className="max-w-xl mx-auto text-center">
              <Mail className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-display font-bold mb-2">
                Stay Fresh with LEONIE
              </h3>
              <p className="text-primary-foreground/70 mb-6">
                Subscribe to receive exclusive offers, new product alerts, and community event invitations.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button type="submit" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Léonie+ App</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.app.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">LEONIE</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.bakery.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Contact & B2B</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.contact.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="mailto:support@leoniebakery.com"
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  Email Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Our Flagship</h3>
            <p className="text-sm text-primary-foreground/60">
              LEONIE Reuilly (Largest Bakery in Paris)
            </p>
            <p className="text-sm text-primary-foreground/60 mt-2">12th Arrondissement, Paris.</p>
            <p className="text-sm text-primary-foreground/60 mt-2">Serving 6 Arrondissements</p>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/50">
            © 2025 LEONIE Bakery Deli Café, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;