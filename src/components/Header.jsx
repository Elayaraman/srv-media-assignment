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
    <header className="sticky top-0 z-50 w-full h-[100px] bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1920px] mx-auto h-full flex items-center justify-between px-6 md:px-12 lg:px-[76px] relative">
        {/* Left side brand logo (absolute to allow overlapping hang-down) */}
        <div className="relative h-full w-[205px]">
          <a href="/" className="block h-full">
            <img
              src="/images/pse_logo.png"
              alt="Premier Schools Exhibition"
              className="absolute top-0 left-0 w-[205px] h-[160px] max-w-none z-20 transition-transform duration-300 hover:scale-[1.02] drop-shadow-md"
            />
          </a>
        </div>

        {/* Right side CTA action button */}
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
