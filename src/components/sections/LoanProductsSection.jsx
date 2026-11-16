import React, { useState, useEffect, useRef } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { themeConfig } from '../../config/themeconfig';
import { loansProducts } from '../../data/loansData';
import RoundArrowBtn from '../UI/btns/RoundArrowBtn';
import coinImg from '../../assets/Vectors/Coin.png';
import msgIconImg from '../../assets/Vectors/msg-icon.png';

// Individual Loan Card Component with dynamic cursor-aware radial expanding ripple
function LoanCard({ loan }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const IconData = loan.icon;

  const handleMouseEnter = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCoords({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
    setIsHovered(true);
  };

  const handleMouseLeave = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCoords({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
    setIsHovered(false);
  };

  return (
    // Outer Dashed Frame without hover color change
    <div className="border-2 border-dashed border-slate-300 rounded-3xl p-2 sm:p-2.5 transition-all duration-300 h-full">
      {/* Inner White Card with cursor-aware expanding ripple */}
      <a
        ref={cardRef}
        href={loan.slug}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden block bg-white rounded-2xl p-5 sm:p-6 md:p-7 text-center h-full flex flex-col justify-between shadow-xs transition-all duration-300 cursor-pointer"
        style={{
          boxShadow: isHovered ? '0 16px 36px rgba(37, 99, 235, 0.22)' : 'none',
          transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
        }}
      >
        {/* Dynamic Expanding Circle Overlay (Brand Blue) */}
        <span
          className="absolute rounded-full pointer-events-none transition-transform duration-700 ease-out"
          style={{
            left: `${coords.x}px`,
            top: `${coords.y}px`,
            width: '800px',
            height: '800px',
            backgroundColor: themeConfig.colors.primary,
            transform: isHovered 
              ? 'translate(-50%, -50%) scale(1)' 
              : 'translate(-50%, -50%) scale(0)',
            willChange: 'transform',
          }}
        />

        {/* Card Content above the expanding background */}
        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            {/* Top Centered Circular Icon Badge: Solid border, bg: themeConfig.colors.sectionProductsBg */}
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 transition-all duration-300 shadow-xs"
              style={{
                backgroundColor: isHovered ? '#FFFFFF' : themeConfig.colors.sectionProductsBg,
                border: '1px solid rgba(0, 0, 0, 0.05)',
              }}
            >
              {typeof IconData === 'string' ? (
                <img 
                  src={IconData} 
                  alt={`${loan.name} icon`}
                  draggable={false}
                  className="w-9 h-9 sm:w-10 sm:h-10 object-contain transition-transform duration-300 select-none pointer-events-none"
                  style={{
                    transform: isHovered ? 'scale(1.12)' : 'scale(1)',
                  }}
                />
              ) : (
                IconData && <IconData className="w-8 h-8 transition-transform duration-300" />
              )}
            </div>

            {/* Loan Title (Card Heading: 24.6px, weight 400, color #262626) */}
            <h3 
              className="text-xl sm:text-[23px] font-normal mb-2 tracking-tight transition-colors duration-300"
              style={{ 
                color: isHovered ? '#FFFFFF' : themeConfig.colors.textHeading 
              }}
            >
              {loan.name}
            </h3>

            {/* Short Elaborated Description (weight 300) */}
            <p 
              className="text-xs sm:text-sm font-light leading-relaxed px-1 mb-5 min-h-[48px] transition-colors duration-300"
              style={{ 
                color: isHovered ? 'rgba(255, 255, 255, 0.9)' : '#666666' 
              }}
            >
              {loan.desc}
            </p>
          </div>

          {/* Bottom Circular Action Arrow Button */}
          <div className="pt-1">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center mx-auto shadow-xs transition-all duration-300"
              style={{
                backgroundColor: '#FFFFFF',
                color: isHovered ? themeConfig.colors.primary : '#64748B',
                border: isHovered ? '1px solid #FFFFFF' : '1px solid #E2E8F0',
                transform: isHovered ? 'scale(1.08)' : 'scale(1)',
              }}
            >
              <FiArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-0.5 -translate-y-0.5' : ''}`} />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function LoanProductsSection() {
  const sectionRef = useRef(null);
  const totalItems = loansProducts.length;
  // 5x duplication (30 items total) ensures abundant buffer so cards are NEVER empty
  const extendedSlides = [
    ...loansProducts, 
    ...loansProducts, 
    ...loansProducts, 
    ...loansProducts, 
    ...loansProducts
  ];

  // Start at the center group (index 12)
  const [currentIndex, setCurrentIndex] = useState(totalItems * 2);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [enableTransition, setEnableTransition] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasTriggeredFirst, setHasTriggeredFirst] = useState(false);

  // Responsive cards per view calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Re-enable CSS transitions safely after invisible jump
  useEffect(() => {
    if (!enableTransition) {
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
      return () => cancelAnimationFrame(id);
    }
  }, [enableTransition]);

  // Observer to trigger first slide immediately when user enters section, then continuous 2s autoplay
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (!hasTriggeredFirst) {
            setHasTriggeredFirst(true);
            // Immediate first scroll upon scrolling into view
            const timer = setTimeout(() => {
              setIsAnimating(true);
              setEnableTransition(true);
              setCurrentIndex((prev) => prev + 1);
            }, 300);
            return () => clearTimeout(timer);
          }
        } else {
          setIsInView(false);
        }
      },
      { 
        threshold: 0.25 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasTriggeredFirst]);

  // Autoplay: Slower, silky-smooth continuous movement (pauses on user hover)
  useEffect(() => {
    if (isPaused || !isInView) return;
    const timer = setInterval(() => {
      setIsAnimating(true);
      setEnableTransition(true);
      setCurrentIndex((prev) => prev + 1);
    }, 2800);

    return () => clearInterval(timer);
  }, [isPaused, isInView, totalItems]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setEnableTransition(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setEnableTransition(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Seamless invisible jump keeping currentIndex always safely within center bounds
  const handleTransitionEnd = () => {
    setIsAnimating(false);
    if (currentIndex >= totalItems * 3) {
      setEnableTransition(false);
      setCurrentIndex((prev) => prev - totalItems);
    } else if (currentIndex < totalItems * 2) {
      setEnableTransition(false);
      setCurrentIndex((prev) => prev + totalItems);
    }
  };

  // Calculate active pagination dot (0 to 5)
  const activeDotIndex = ((currentIndex % totalItems) + totalItems) % totalItems;

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-20 relative overflow-hidden"
      style={{ 
        backgroundColor: themeConfig.colors.sectionProductsBg,
        fontFamily: themeConfig.typography.fontFamily 
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative Spinning Coin Icon (Top-Right) - Well-proportioned on mobile */}
      <img
        src={coinImg}
        alt="Decorative Coin"
        draggable={false}
        className="absolute top-3 right-3 sm:top-6 sm:right-8 lg:top-8 lg:right-12 w-14 sm:w-18 md:w-22 lg:w-26 h-auto object-contain select-none pointer-events-none opacity-90 z-10 animate-spin-slow"
        style={{ animation: 'spinSlow 14s linear infinite' }}
      />

      {/* Decorative Floating Message Bubble (Bottom-Left) - Clearly visible and nicely sized on mobile */}
      <img
        src={msgIconImg}
        alt="Decorative Message Bubble"
        draggable={false}
        className="absolute bottom-3 left-3 sm:bottom-6 sm:left-8 lg:bottom-10 lg:left-12 w-12 sm:w-16 md:w-20 lg:w-24 h-auto object-contain select-none pointer-events-none opacity-90 z-10 block animate-horizontal-float"
        style={{ animation: 'horizontalFloat 3.8s ease-in-out infinite' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 md:mb-14">
          
          {/* Eyebrow Tagline with Loan Spark Icon */}
          <div className="inline-flex items-center gap-2">
            <svg 
              className="w-4 h-4 text-blue-600 shrink-0" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 2L13.8 8.2C14.3 9.7 15.5 10.9 17 11.4L23.2 13.2L17 15C15.5 15.5 14.3 16.7 13.8 18.2L12 24.4L10.2 18.2C9.7 16.7 8.5 15.5 7 15L0.8 13.2L7 11.4C8.5 10.9 9.7 9.7 10.2 8.2L12 2Z" 
                fill="currentColor"
              />
            </svg>
            <span 
              className="text-xs sm:text-sm font-medium tracking-wider uppercase"
              style={{ color: themeConfig.colors.textHeading }}
            >
              Our Loan Products
            </span>
          </div>

          {/* Main H2 Heading (24.6px - 28px, weight 400, color #262626) */}
          <h2 
            className="text-2xl sm:text-3xl md:text-[28px] font-normal tracking-tight leading-tight"
            style={{ color: themeConfig.colors.textHeading }}
          >
            Loans for Every Need
          </h2>

          {/* Sub-text from Official Requirement Document (18.45px, weight 300, color #262626) */}
          <p 
            className="text-base sm:text-[18.45px] font-light leading-relaxed max-w-2xl mx-auto"
            style={{ color: themeConfig.colors.textBody }}
          >
            Funding solutions tailored to your unique personal and business goals. 
            Compare offers from 16+ leading banks and NBFCs with zero upfront fees.
          </p>

        </div>

        {/* Carousel Outer Container with Left and Right Solid Outlined Flanking Buttons */}
        <div className="relative px-4 sm:px-10 md:px-14 lg:px-16">
          
          {/* Left Solid Outlined Flanking Button */}
          <RoundArrowBtn
            direction="left"
            onClick={prevSlide}
            ariaLabel="Previous loan product"
            className="hidden sm:flex absolute -left-2 sm:-left-3 md:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-30"
            size="w-12 h-12 md:w-13 md:h-13"
          />

          {/* Right Solid Outlined Flanking Button */}
          <RoundArrowBtn
            direction="right"
            onClick={nextSlide}
            ariaLabel="Next loan product"
            className="hidden sm:flex absolute -right-2 sm:-right-3 md:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-30"
            size="w-12 h-12 md:w-13 md:h-13"
          />

          {/* Overflow Viewport */}
          <div className="overflow-hidden py-3 -my-3">
            <div 
              onTransitionEnd={handleTransitionEnd}
              className="flex"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                transition: enableTransition ? 'transform 1000ms cubic-bezier(0.25, 1, 0.35, 1)' : 'none',
              }}
            >
              {extendedSlides.map((loan, idx) => (
                <div 
                  key={`${loan.id}-${idx}`}
                  className="shrink-0 px-2.5 sm:px-3 md:px-3.5"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <LoanCard loan={loan} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Bottom Move Buttons */}
          <div className="flex sm:hidden items-center justify-center gap-4 mt-7">
            <RoundArrowBtn
              direction="left"
              onClick={prevSlide}
              ariaLabel="Previous loan product"
              size="w-11 h-11"
            />
            <RoundArrowBtn
              direction="right"
              onClick={nextSlide}
              ariaLabel="Next loan product"
              size="w-11 h-11"
            />
          </div>

          {/* Pagination Indicator Dots */}
          <div className="flex items-center justify-center gap-2 mt-7 md:mt-9">
            {loansProducts.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setEnableTransition(true);
                  setCurrentIndex(totalItems * 2 + idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 transition-all duration-300 rounded-full focus:outline-none cursor-pointer ${
                  activeDotIndex === idx 
                    ? 'w-8 bg-[#113764]' 
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
