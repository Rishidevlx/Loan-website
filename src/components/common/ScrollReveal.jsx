import React, { useState, useEffect, useRef } from 'react';

/**
 * ScrollReveal - Production-grade Global Scroll Reveal Component
 * Uses native IntersectionObserver with GPU-accelerated CSS transforms for 60fps animations.
 * 
 * Props:
 * - variant: 'fade-up' (default) | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'fade'
 * - delay: number (milliseconds, e.g. 150)
 * - duration: number (milliseconds, default 650)
 * - distance: string (default '28px')
 * - threshold: number (default 0.12)
 * - once: boolean (default true, trigger only once)
 * - as: string | ReactComponent (default 'div')
 * - className: string
 * - style: object
 */
export default function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 650,
  distance = '28px',
  threshold = 0.12,
  once = true,
  as: Component = 'div',
  className = '',
  style = {},
  ...rest
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Graceful fallback for older browsers or SSR
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    // Respect user's accessibility reduced motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px', // triggers slightly before scrolling fully into view
      }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [threshold, once]);

  // Compute CSS transform based on variant
  const getHiddenTransform = () => {
    switch (variant) {
      case 'fade-up':
        return `translate3d(0, ${distance}, 0)`;
      case 'fade-down':
        return `translate3d(0, -${distance}, 0)`;
      case 'fade-left':
        return `translate3d(${distance}, 0, 0)`;
      case 'fade-right':
        return `translate3d(-${distance}, 0, 0)`;
      case 'zoom-in':
        return 'scale3d(0.94, 0.94, 1)';
      case 'zoom-out':
        return 'scale3d(1.06, 1.06, 1)';
      case 'fade':
      default:
        return 'none';
    }
  };

  const animationStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate3d(0, 0, 0) scale3d(1, 1, 1)' : getHiddenTransform(),
    transitionProperty: 'opacity, transform',
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', // Smooth Apple/Vercel deceleration
    willChange: 'opacity, transform',
    ...style,
  };

  return (
    <Component
      ref={elementRef}
      className={className}
      style={animationStyle}
      {...rest}
    >
      {children}
    </Component>
  );
}
