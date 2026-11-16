import React, { useState, useEffect, useRef } from 'react';
import { FaStar } from 'react-icons/fa6';
import { themeConfig } from '../../config/themeconfig';
import { testimonialsData } from '../../data/testimonialsData';
import RoundArrowBtn from '../UI/btns/RoundArrowBtn';

/**
 * TestimonialsSection - Clean, elegant customer review slider inspired by LottoLend design
 * Features 5 gold stars, centered quote, reviewer avatar & location, reusable RoundArrowBtn,
 * and responsive pagination dots.
 */
export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const totalReviews = testimonialsData.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  // Auto-play interval every 6 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isPaused, totalReviews]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    setTouchStart(null);
  };

  const currentReview = testimonialsData[currentIndex];

  return (
    <section 
      className="py-16 sm:py-24 bg-white relative overflow-hidden select-none"
      style={{ fontFamily: themeConfig.typography.fontFamily }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main Review Stage with Left and Right Flanking Buttons */}
        <div className="relative flex items-center justify-between max-w-5xl mx-auto">
          
          {/* Desktop Left Round Arrow Button */}
          <div className="hidden sm:block shrink-0 z-20">
            <RoundArrowBtn
              direction="left"
              onClick={prevSlide}
              ariaLabel="Previous testimonial"
              size="w-12 h-12 md:w-13 md:h-13"
            />
          </div>

          {/* Centered Testimonial Content Container */}
          <div className="w-full sm:px-8 md:px-12 text-center min-h-[320px] sm:min-h-[300px] flex flex-col justify-center items-center">
            
            {/* 5 Centered Gold/Amber Rating Stars */}
            <div className="flex items-center justify-center gap-1.5 mb-6">
              {[...Array(5)].map((_, i) => (
                <FaStar 
                  key={i} 
                  className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 fill-amber-400 drop-shadow-xs" 
                />
              ))}
            </div>

            {/* Testimonial Quote (Animated smoothly on index change) */}
            <div 
              key={currentReview.id} 
              className="animate-fade-in transition-all duration-500 max-w-3xl mx-auto"
            >
              <blockquote 
                className="text-base sm:text-lg md:text-xl lg:text-[21px] font-light leading-relaxed mb-8 px-2 sm:px-4"
                style={{ color: themeConfig.colors.textHeading }}
              >
                &ldquo;{currentReview.quote}&rdquo;
              </blockquote>

              {/* Reviewer Profile */}
              <div className="flex flex-col items-center justify-center space-y-2">
                <img
                  src={currentReview.avatar}
                  alt={currentReview.name}
                  draggable={false}
                  className="w-13 h-13 rounded-full object-cover ring-3 ring-blue-100 shadow-sm"
                />
                <div>
                  <h4 
                    className="text-base sm:text-lg font-medium tracking-tight"
                    style={{ color: themeConfig.colors.textHeading }}
                  >
                    {currentReview.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-light">
                    {currentReview.location} • <span className="text-blue-600 font-medium">{currentReview.loanType}</span>
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Desktop Right Round Arrow Button */}
          <div className="hidden sm:block shrink-0 z-20">
            <RoundArrowBtn
              direction="right"
              onClick={nextSlide}
              ariaLabel="Next testimonial"
              size="w-12 h-12 md:w-13 md:h-13"
            />
          </div>

        </div>

        {/* Mobile Navigation Buttons (Displayed side-by-side below review on small devices) */}
        <div className="flex sm:hidden items-center justify-center gap-6 mt-8">
          <RoundArrowBtn
            direction="left"
            onClick={prevSlide}
            ariaLabel="Previous testimonial"
            size="w-11 h-11"
          />
          <RoundArrowBtn
            direction="right"
            onClick={nextSlide}
            ariaLabel="Next testimonial"
            size="w-11 h-11"
          />
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`h-2 transition-all duration-300 rounded-full focus:outline-none cursor-pointer ${
                currentIndex === idx 
                  ? 'w-6 bg-blue-600' 
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
