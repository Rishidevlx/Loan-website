import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import LoanProductsSection from './components/sections/LoanProductsSection';
import StatsSection from './components/sections/StatsSection';
import PartnersSection from './components/sections/PartnersSection';
import FaqSection from './components/sections/FaqSection';
import { themeConfig } from './config/themeconfig';

export default function App() {
  return (
    <div 
      className="min-h-screen flex flex-col antialiased selection:bg-blue-100 selection:text-blue-700 bg-white"
      style={{ 
        fontFamily: themeConfig.typography.fontFamily 
      }}
    >
      {/* 1. Header with Animated Loans Dropdown & Quick Call */}
      <Navbar />

      {/* 2. Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Our Loan Products Section (Slider with #EDF0EC background) */}
        <LoanProductsSection />

        {/* 3. Connected Trust Stats Section (Pure White background) */}
        <StatsSection />

        {/* 4. Banking & NBFC Partners Continuous Marquee (#EDF0EC background) */}
        <PartnersSection />

        {/* 5. Frequently Asked Questions (FAQ) Section (Pure White background) */}
        <FaqSection />
      </main>

      {/* 6. Contrast Footer */}
      <Footer />
    </div>
  );
}
