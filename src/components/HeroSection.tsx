import { Button } from '@/components/ui/button';
import { useABTest } from '@/contexts/ABTestContext';
import { useState } from 'react';
import AppDownloadModal from './modals/AppDownloadModal';
import BakeryLocationsModal from './modals/BakeryLocationsModal';

const HeroSection = () => {
  const { tests } = useABTest();
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [isLocationsModalOpen, setIsLocationsModalOpen] = useState(false);

  // A/B Test 1: Hero Headline
  const headline =
    tests.heroHeadline === 'B'
      ? "Paris's Largest Bakery, Now in Your Pocket"
      : 'Authentic Parisian Baking, Modernized.';

  // A/B Test 3: CTA Button Text
  const ctaText =
    tests.ctaButtonText === 'B' ? 'Order Now - Get 20% Off' : 'Discover Léonie+ App';

  // A/B Test 2: CTA Button Color
  const ctaColorClass =
    tests.heroCTAColor === 'B'
      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80';

  return (
    <>
      <section className="py-16 md:py-24 bg-leonie-light-green relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block text-lg font-semibold text-primary tracking-wide uppercase mb-3 animate-fade-in">
            Artisanal Excellence, Digitally Connected
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight leading-tight mb-6 animate-fade-in-up">
            {tests.heroHeadline === 'B' ? (
              headline
            ) : (
              <>
                Authentic Parisian Baking,{' '}
                <span className="text-primary">Modernized.</span>
              </>
            )}
          </h1>

          <p className="mt-3 max-w-3xl mx-auto text-xl text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            LEONIE is Paris's largest bakery, renowned for 100% homemade products, organic
            sourcing, and merging tradition with the convenience of a modern digital
            experience.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button
              size="lg"
              onClick={() => setIsAppModalOpen(true)}
              className={`rounded-full px-10 py-6 text-lg font-medium hero-button-solid transition-all hover:scale-105 ${ctaColorClass}`}
            >
              {ctaText}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setIsLocationsModalOpen(true)}
              className="rounded-full px-10 py-6 text-lg font-medium border-2 border-primary text-primary bg-transparent hover:bg-primary/10 hero-button-outline transition-all hover:scale-105"
            >
              Explore Our Bakeries
            </Button>
          </div>

          {/* Hero Image */}
          <div className="mt-16 w-full max-w-5xl mx-auto relative animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <img
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&h=500&fit=crop"
              alt="Fresh artisan bread and pastries from LEONIE bakery"
              className="rounded-2xl shadow-2xl border-4 border-primary/20 w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
            <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
              <span className="text-sm font-semibold text-primary">
                #Local #Handmade #Paris
              </span>
            </div>
          </div>
        </div>
      </section>

      <AppDownloadModal open={isAppModalOpen} onOpenChange={setIsAppModalOpen} />
      <BakeryLocationsModal open={isLocationsModalOpen} onOpenChange={setIsLocationsModalOpen} />
    </>
  );
};

export default HeroSection;