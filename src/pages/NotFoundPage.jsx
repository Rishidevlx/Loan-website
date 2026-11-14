import React from 'react';
import { FiHome, FiArrowUpRight } from 'react-icons/fi';
import { themeConfig } from '../config/themeconfig';
import OutlineBtn from '../components/UI/btns/OutlineBtn';
import moneyImg from '../assets/Vectors/Money.png';

export default function NotFoundPage() {
  return (
    <div 
      className="min-h-[75vh] flex items-center justify-center bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center"
      style={{ fontFamily: themeConfig.typography.fontFamily }}
    >
      <div className="max-w-xl mx-auto space-y-6 sm:space-y-8">
        
        {/* Main H1 Title */}
        <h1 
          className="text-4xl sm:text-5xl lg:text-[52px] font-semibold tracking-tight"
          style={{ color: themeConfig.typography.sectionHeading.color }}
        >
          Page Not Found
        </h1>

        {/* Center Money Vector Illustration (From Assets/Vectors/Money.png) */}
        <div className="flex justify-center items-center py-2 sm:py-4">
          <img
            src={moneyImg}
            alt="Money Illustration"
            draggable={false}
            className="w-52 sm:w-64 md:w-72 h-auto object-contain select-none pointer-events-none drop-shadow-xs transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Witty Subtitle from Official Reference Image */}
        <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-lg mx-auto">
          Sorry for the inconvenience. We have not found this page, but we can definitely find your lost money.
        </p>

        {/* Action Button: Return to Home */}
        <div className="pt-2 flex justify-center items-center gap-4">
          <OutlineBtn
            href="/"
            icon={FiHome}
            endIcon={FiArrowUpRight}
            className="py-3 px-8 text-sm"
          >
            Back to Home
          </OutlineBtn>
        </div>

      </div>
    </div>
  );
}
