import React from 'react';
import { Button } from './Button';

/**
 * Navigation Header matching Figma specs:
 * 1. Default White Header (Header-01): flows with document scroll, 100px white background, 160px overlapping logo.
 * 2. Sticky Dark Header (Header-02): always present under the white header (lower z-index); sticks to top once the white header scrolls away.
 */
export const Header = () => {

  return (
    <>
      {/* 1. Default White Header (Flows with document scroll) */}
      <header className="relative z-50 w-full h-[100px] bg-white border-b border-gray-100 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="max-w-[1920px] mx-auto h-full flex items-center justify-between px-6 md:px-12 lg:px-[119px] relative">

          {/* Logo White Background Shield (Y=100px to Y=140px, X=98px to X=255px) */}
          <div
            className="absolute left-[98px] top-[100px] w-[157px] h-[40px] bg-white rounded-b-[6px] shadow-[0_4px_6px_rgba(0,0,0,0.08)] z-10 hidden md:block"
          />

          {/* Figma Brand Logo Image (X=76px, Y=3px, size 201px x 157px) */}
          <a
            href="/"
            className="absolute left-[76px] top-[3px] w-[201px] h-[157px] z-20 block hidden md:block transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src="/images/pse_logo.png"
              alt="Premier Schools Exhibition"
              className="w-[201px] h-[157px] max-w-none"
            />
          </a>

          {/* Responsive Mobile Logo (scales down for viewports < 768px) */}
          <a href="/" className="block md:hidden z-20 w-[120px] h-[94px]">
            <img
              src="/images/pse_logo.png"
              alt="Premier Schools Exhibition"
              className="w-full h-full object-contain"
            />
          </a>

          {/* Right side CTA Action Button (Centered vertically in the 100px header) */}
          <div className="ml-auto z-10">
            <Button variant="dark" >
              Register Now
            </Button>
          </div>

        </div>
      </header>

      {/* 2. Sticky Dark Header (always under white header; sticks to top after white header scrolls away) */}
      <header
        className="sticky top-0 -mt-[100px] w-full h-[100px] bg-gradient-to-r from-[#3F186A] to-[#000E38] border-b border-[#3F269C]/40 shadow-lg z-40"
      >
        <div className="max-w-[1920px] mx-auto h-full flex items-center justify-between px-6 md:px-12 lg:px-[119px] relative">

          {/* Logo Frame (centered vertically in the dark header: X=124px, Y=7px, size 104px x 85px) */}
          <a
            href="/"
            className="absolute left-6 md:left-[124px] top-[7px] w-[104px] h-[85px] z-20 block transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src="/images/pse_logo.png"
              alt="Premier Schools Exhibition"
              className="w-[104px] h-[85px] object-contain max-w-none"
            />
          </a>

          {/* Right side Register CTA */}
          <div className="ml-auto z-10">
            <button
              type="button"
              className="inline-flex items-center justify-between w-[224px] h-[62px] bg-white rounded-lg pl-8 pr-5 cursor-pointer border-none transition-opacity duration-200 hover:opacity-90 active:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <span className="font-sans font-bold text-sm tracking-[0.12em] uppercase text-[#194C9C] whitespace-nowrap">
                Register Now
              </span>
              <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M17.598 1.6013L24 8L17.598 14.3987" stroke="#194C9C" strokeWidth="2" strokeLinecap="round" />
                <path d="M0 8H23.586" stroke="#194C9C" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
