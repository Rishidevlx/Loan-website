import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import LoanProductsSection from '../components/sections/LoanProductsSection';
import StatsSection from '../components/sections/StatsSection';
import PartnersSection from '../components/sections/PartnersSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FaqSection from '../components/sections/FaqSection';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Our Loan Products Section (Slider with #EDF0EC background) */}
      <LoanProductsSection />

      {/* 3. Connected Trust Stats Section (Pure White background) */}
      <StatsSection />

      {/* 4. Banking & NBFC Partners Continuous Marquee (#EDF0EC background) */}
      <PartnersSection />

      {/* 5. Client Testimonials Carousel (Pure White background - LottoLend design) */}
      <TestimonialsSection />

      {/* 6. Frequently Asked Questions (FAQ) Section (Pure White background) */}
      <FaqSection />
    </>
  );
}
