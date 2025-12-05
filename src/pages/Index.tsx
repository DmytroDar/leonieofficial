import { ABTestProvider } from '@/contexts/ABTestContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AppSection from '@/components/AppSection';
import MissionSection from '@/components/MissionSection';
import CommunitySection from '@/components/CommunitySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import B2BSection from '@/components/B2BSection';
import Footer from '@/components/Footer';
import ABTestToggle from '@/components/ABTestToggle';
import StickyCTA from '@/components/StickyCTA';

const Index = () => {
  return (
    <ABTestProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AppSection />
          <MissionSection />
          <CommunitySection />
          <TestimonialsSection />
          <B2BSection />
        </main>
        <Footer />
        <ABTestToggle />
        <StickyCTA />
      </div>
    </ABTestProvider>
  );
};

export default Index;