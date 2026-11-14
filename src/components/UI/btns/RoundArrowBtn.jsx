import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

/**
 * Reusable Circular Arrow Button (Used in Loan Products Slider & Testimonials Carousel)
 * Features brand blue outlined circular border with smooth hover fill and scale animation
 */
export default function RoundArrowBtn({
  direction = 'left',
  onClick,
  ariaLabel,
  className = '',
  disabled = false,
  size = 'w-11 h-11 md:w-12 md:h-12',
}) {
  const isLeft = direction === 'left';
  const Icon = isLeft ? FiChevronLeft : FiChevronRight;
  const label = ariaLabel || (isLeft ? 'Previous slide' : 'Next slide');

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`rounded-full border-2 border-solid border-blue-600 bg-transparent text-blue-600 hover:bg-blue-600 hover:text-white shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center focus:outline-none transform hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-transparent disabled:hover:text-blue-600 ${size} ${className}`}
    >
      <Icon className="w-5 h-5 md:w-6 md:h-6 stroke-[2.5]" />
    </button>
  );
}
