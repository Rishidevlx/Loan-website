import React, { useState, useEffect, useRef } from 'react';
import { themeConfig } from '../../config/themeconfig';
import { trustStats } from '../../data/statsData';

export default function StatsSection() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    customers: 0,
    rating: 0.0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger ONLY when the user actively scrolls into the section
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1800; // 1.8 seconds duration
          const startTime = performance.now();

          const animateCounts = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            // Ease-out cubic curve for natural smooth deceleration
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);

            setCounts({
              customers: Math.floor(easeOutProgress * 5000),
              rating: parseFloat((easeOutProgress * 4.8).toFixed(1)),
            });

            if (progress < 1) {
              requestAnimationFrame(animateCounts);
            } else {
              setCounts({
                customers: 5000,
                rating: 4.8,
              });
            }
          };

          requestAnimationFrame(animateCounts);
        }
      },
      { 
        threshold: 0.35,
        rootMargin: '0px 0px -50px 0px' 
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
  }, [hasAnimated]);

  return (
    <section 
      ref={sectionRef}
      className="bg-white py-12 sm:py-16 md:py-20 border-b border-slate-100 relative z-10"
      style={{ fontFamily: themeConfig.typography.fontFamily }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Connected Stats Row with Subtle Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          
          {trustStats.map((stat, idx) => {
            let displayValue = stat.title;
            if (stat.isCounter) {
              if (stat.isDecimal) {
                displayValue = counts.rating.toFixed(1);
              } else {
                displayValue = `${counts.customers.toLocaleString()}${stat.suffix || ''}`;
              }
            }

            return (
              <div 
                key={stat.id || idx}
                className={`py-6 md:py-4 px-4 sm:px-6 lg:px-10 flex items-center justify-center group ${
                  idx === 0 ? 'md:pl-0' : idx === trustStats.length - 1 ? 'md:pr-0' : ''
                }`}
              >
                {/* Horizontal Stat Container: Centered max-width on mobile ensures 100% straight vertical alignment */}
                <div className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-none flex items-center justify-start md:justify-start lg:justify-center gap-4 sm:gap-5">
                  
                  {/* Left Icon Container (Prominent Size, Soft Background) */}
                  <div 
                    className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-xs"
                    style={{ 
                      backgroundColor: themeConfig.colors.sectionProductsBg,
                      border: '1px solid rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    <img 
                      src={stat.icon} 
                      alt={stat.title}
                      draggable={false}
                      className="w-10 h-10 sm:w-11 sm:h-11 object-contain select-none pointer-events-none transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Right Typography Content */}
                  <div>
                    {/* Stat Headline */}
                    <div 
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#222E48] flex items-center gap-1.5 leading-none mb-1.5"
                      style={{ color: themeConfig.colors.textHeading }}
                    >
                      <span>{displayValue}</span>
                      {stat.starIcon && (
                        <span className="text-amber-500 text-xl sm:text-2xl leading-none">
                          ★
                        </span>
                      )}
                    </div>

                    {/* Stat Subtext */}
                    <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">
                      {stat.subtitle}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
