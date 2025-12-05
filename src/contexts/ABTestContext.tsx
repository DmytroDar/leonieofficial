import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface ABTests {
  heroHeadline: 'A' | 'B';
  heroCTAColor: 'A' | 'B';
  ctaButtonText: 'A' | 'B';
  appFeaturesLayout: 'A' | 'B';
  navCTA: 'A' | 'B';
  socialProof: 'A' | 'B';
  b2bTitle: 'A' | 'B';
  communityLayout: 'A' | 'B';
  footerDesign: 'A' | 'B';
  stickyCTA: 'A' | 'B';
}

interface ABTestContextType {
  tests: ABTests;
  toggleAllTests: () => void;
  isVersionB: boolean;
}

const defaultTests: ABTests = {
  heroHeadline: 'A',
  heroCTAColor: 'A',
  ctaButtonText: 'A',
  appFeaturesLayout: 'A',
  navCTA: 'A',
  socialProof: 'A',
  b2bTitle: 'A',
  communityLayout: 'A',
  footerDesign: 'A',
  stickyCTA: 'A',
};

const ABTestContext = createContext<ABTestContextType | undefined>(undefined);

export const ABTestProvider = ({ children }: { children: ReactNode }) => {
  const [isVersionB, setIsVersionB] = useState(false);

  const tests: ABTests = isVersionB
    ? {
        heroHeadline: 'B',
        heroCTAColor: 'B',
        ctaButtonText: 'B',
        appFeaturesLayout: 'B',
        navCTA: 'B',
        socialProof: 'B',
        b2bTitle: 'B',
        communityLayout: 'B',
        footerDesign: 'B',
        stickyCTA: 'B',
      }
    : defaultTests;

  const toggleAllTests = () => {
    setIsVersionB(!isVersionB);
  };

  return (
    <ABTestContext.Provider value={{ tests, toggleAllTests, isVersionB }}>
      {children}
    </ABTestContext.Provider>
  );
};

export const useABTest = () => {
  const context = useContext(ABTestContext);
  if (!context) {
    throw new Error('useABTest must be used within an ABTestProvider');
  }
  return context;
};