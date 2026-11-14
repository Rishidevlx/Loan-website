import React, { useState, useRef } from 'react';
import { themeConfig } from '../../../config/themeconfig';

export default function OutlineBtn({
  children,
  href,
  onClick,
  icon: Icon,
  endIcon: EndIcon,
  className = "",
  type = "button",
  ...props
}) {
  const btnRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e) => {
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setCoords({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
    setIsHovered(true);
  };

  const handleMouseLeave = (e) => {
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setCoords({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
    setIsHovered(false);
  };

  const baseStyles = `
    relative overflow-hidden inline-flex items-center justify-center gap-2 
    px-5 py-2.5 rounded-full text-sm font-semibold
    border-2 transition-all duration-300 ease-out select-none cursor-pointer
    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
  `;

  const buttonStyle = {
    borderColor: themeConfig.colors.primary,
    color: isHovered ? '#FFFFFF' : themeConfig.colors.primary,
    backgroundColor: 'transparent',
    fontFamily: themeConfig.typography.fontFamily,
    boxShadow: isHovered ? '0 6px 18px rgba(37, 99, 235, 0.25)' : 'none',
    transform: isHovered ? 'translateY(-1px)' : 'translateY(0)',
  };

  // Expanding Circle overlay element (sized generously with slow, graceful 1.5s (1500ms) radial expansion)
  const ExpandingCircle = (
    <span
      className="absolute rounded-full pointer-events-none transition-transform ease-out"
      style={{
        left: `${coords.x}px`,
        top: `${coords.y}px`,
        width: '950px',
        height: '950px',
        backgroundColor: themeConfig.colors.primary,
        transform: isHovered 
          ? 'translate(-50%, -50%) scale(1)' 
          : 'translate(-50%, -50%) scale(0)',
        willChange: 'transform',
        transitionDuration: '1500ms',
        transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      }}
    />
  );

  const InnerContent = (
    <span 
      className="relative z-10 flex items-center gap-2 transition-colors"
      style={{ transitionDuration: '800ms' }}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {EndIcon && <EndIcon className="w-4 h-4 shrink-0 opacity-80" />}
    </span>
  );

  if (href) {
    return (
      <a
        ref={btnRef}
        href={href}
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`${baseStyles} ${className}`}
        {...props}
      >
        {ExpandingCircle}
        {InnerContent}
      </a>
    );
  }

  return (
    <button
      ref={btnRef}
      type={type}
      onClick={onClick}
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${baseStyles} ${className}`}
      {...props}
    >
      {ExpandingCircle}
      {InnerContent}
    </button>
  );
}
