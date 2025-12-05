import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useABTest } from '@/contexts/ABTestContext';
import { useState } from 'react';
import B2BDemoModal from './modals/B2BDemoModal';

const benefits = [
  {
    text: 'Shared Delivery: Grouped orders at no extra cost to reduce carbon footprint.',
  },
  {
    text: 'Employer Contribution: Subsidize healthy meals directly via the app.',
  },
  {
    text: 'Dedicated Space: Use our large café locations for team meetings and events.',
  },
];

const B2BSection = () => {
  const { tests } = useABTest();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // A/B Test 7: B2B Section Title
  const title =
    tests.b2bTitle === 'B'
      ? 'Feed Your Team, Save 30%'
      : 'The Responsible Meal Plan for Your Employees.';

  const subtitle = tests.b2bTitle === 'B' ? 'Enterprise Solutions' : 'Corporate Solutions';

  return (
    <>
      <section id="b2b" className="gradient-primary py-16 lg:py-24 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-base text-secondary font-semibold tracking-wide uppercase">
                {subtitle}
              </h2>
              <p className="mt-2 text-3xl leading-tight font-display font-bold tracking-tight sm:text-4xl">
                {title}
              </p>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Offer your team healthy, locally sourced artisanal meals via the Léonie+ B2B
                module. Bridge the gap between employee well-being and responsible catering.
              </p>

              <ul className="mt-6 space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="flex-shrink-0 w-6 h-6 text-secondary mt-0.5 mr-3" />
                    <span className="text-primary-foreground/90">{benefit.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  size="lg"
                  onClick={() => setIsDemoModalOpen(true)}
                  className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg transition-all hover:scale-105"
                >
                  Request B2B Demo
                </Button>
              </div>
            </div>

            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop"
                alt="Corporate catering with fresh artisan meals"
                className="rounded-xl shadow-2xl border-4 border-primary-foreground/20 transform rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <B2BDemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </>
  );
};

export default B2BSection;