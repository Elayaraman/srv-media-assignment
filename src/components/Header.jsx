import React from 'react';
import { Button } from './Button';

/**
 * Sticky Navigation Header matching Figma specs (Header-01):
 * - White background, Y = 0 to 100px.
 * - Overlapping logo at X = 76px, Y = 3px, size 201px x 157px.
 * - Register Now CTA button at X = 1596px, Y = 19px, size 205px x 60px.
 */
export const Header = () => {
  const handleRegisterClick = () => {
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
      registerForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full h-[100px] bg-white border-b border-gray-100 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]">
      <div className="max-w-[1920px] mx-auto h-full flex items-center justify-between px-6 md:px-12 lg:px-[119px] relative">
        
        {/* Figma Logo White Background Shield (Y=100px to Y=140px, X=98px to X=255px) */}
        <div 
          className="absolute left-[98px] top-[100px] w-[157px] h-[40px] bg-white rounded-b-[6px] shadow-[0_4px_6px_rgba(0,0,0,0.08)] z-10 hidden md:block"
          style={{ content: '""' }}
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
          <Button variant="dark" onClick={handleRegisterClick}>
            Register Now
          </Button>
        </div>

      </div>
    </header>
  );
};

export default Header;
