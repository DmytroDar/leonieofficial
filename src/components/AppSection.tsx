import { Shield, Calendar, Bell, Smartphone } from 'lucide-react';
import { useABTest } from '@/contexts/ABTestContext';
import { useState } from 'react';
import AppDownloadModal from './modals/AppDownloadModal';

const AppSection = () => {
  const { tests } = useABTest();
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);

  const features = [
    {
      icon: Shield,
      title: 'Seamless Ordering & Subscriptions',
      description:
        'Quick pre-ordering, payment, and recurring bread or meal subscriptions to save you time and money.',
    },
    {
      icon: Calendar,
      title: 'Community Events & Workshops',
      description:
        'View the monthly calendar, RSVP for cooking workshops, and participate in social/solidarity events.',
    },
    {
      icon: Bell,
      title: 'Anti-Waste Notifications',
      description:
        'Receive timely alerts for "end-of-day anti-waste" baskets and special discounts.',
    },
  ];

  // A/B Test 4: Features Layout
  const isCardLayout = tests.appFeaturesLayout === 'B';

  return (
    <>
      <section id="app" className="py-16 lg:py-24 gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-secondary font-semibold tracking-wide uppercase">
              The Digital Connection
            </h2>
            <p className="mt-2 text-4xl leading-tight font-display font-bold tracking-tight sm:text-5xl">
              Léonie+ App: Your All-in-One Bakery Platform
            </p>
            <p className="mt-4 text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Order, subscribe, participate in events, and access nutritional
              transparency—all designed to combat high costs, urban isolation, and food
              waste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Features */}
            {isCardLayout ? (
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-secondary">
                          {feature.title}
                        </h4>
                        <p className="mt-1 text-primary-foreground/70">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-secondary">{feature.title}</h4>
                      <p className="mt-1 text-primary-foreground/80">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* App Mockup */}
            <div 
              className="relative p-4 bg-card rounded-2xl shadow-2xl cursor-pointer group"
              onClick={() => setIsAppModalOpen(true)}
            >
              <img
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=650&fit=crop"
                alt="Léonie+ Mobile App showcasing fresh bakery products"
                className="w-full h-auto rounded-xl shadow-lg border-2 border-secondary transition-transform group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-0 left-0 right-0 py-4 bg-leonie-dark/90 rounded-b-xl text-center">
                <div className="flex items-center justify-center gap-2">
                  <Smartphone className="w-5 h-5 text-secondary" />
                  <span className="text-secondary font-bold">Get it on App Store & Google Play</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AppDownloadModal open={isAppModalOpen} onOpenChange={setIsAppModalOpen} />
    </>
  );
};

export default AppSection;