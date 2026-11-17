import React, { useEffect } from 'react';
import AboutHeroSection from '../components/sections/AboutHeroSection';
import AboutWhyChooseUsSection from '../components/sections/AboutWhyChooseUsSection';
import StatsSection from '../components/sections/StatsSection';
import AboutPartnersGridSection from '../components/sections/AboutPartnersGridSection';
import { themeConfig } from '../config/themeconfig';

/**
 * AboutPage Component
 * Displays:
 * 1. About Hero Section (White)
 * 2. Why Choose Us Section (#EDF0EC - inspired by FINVIEW reference with 3D Spinning Coin)
 * 3. Connected Trust Stats Section (Pure White background)
 * 4. Our Lending Partners Grid Section (Pure White background - 16+ Bank Logos)
 */
export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us | Bharath Finserv - Trusted Loan Partner Across India';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div 
      className="bg-white min-h-[70vh]"
      style={{ fontFamily: themeConfig.typography.fontFamily }}
    >
      {/* 1. About Hero Section (Pure White) */}
      <AboutHeroSection />

      {/* 2. Why Choose Us Section (#EDF0EC with 3D spinning coin) */}
      <AboutWhyChooseUsSection />

      {/* 3. Connected Trust Stats Section (Pure White background, seamlessly connects to partners) */}
      <StatsSection borderBottom={false} />

      {/* 4. Lending Partners Grid Section (Pure White background) */}
      <AboutPartnersGridSection />
    </div>
  );
}
