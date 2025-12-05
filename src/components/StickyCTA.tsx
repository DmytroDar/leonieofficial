import { useABTest } from '@/contexts/ABTestContext';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import AppDownloadModal from './modals/AppDownloadModal';

const StickyCTA = () => {
  const { tests } = useABTest();
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // A/B Test 10: Sticky CTA - Only show if Version B
  const showStickyCTA = tests.stickyCTA === 'B';

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (approximately 600px)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showStickyCTA || !isVisible) {
    return null;
  }

  return (
    <>
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40 animate-fade-in">
        <Button
          onClick={() => setIsModalOpen(true)}
          size="lg"
          className="rounded-full shadow-2xl bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-8"
        >
          <Download className="w-5 h-5" />
          Download Léonie+ Now
        </Button>
      </div>

      <AppDownloadModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
};

export default StickyCTA;