import React from 'react';
import './Button.css';

/**
 * Custom interactive Button component supporting dark gradient and light white styles.
 * Mimics the premium double-box SVG aesthetic with accessibility and micro-interactions.
 * 
 * @param {Object} props
 * @param {'dark' | 'light' | 'gradient' | 'white'} [props.variant='dark'] - Styling variant
 * @param {string} [props.text] - The text label inside the button (falls back to children)
 * @param {React.ReactNode} [props.children] - Fallback content if text is not provided
 * @param {string} [props.className] - Additional CSS class names
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props - Standard HTML button attributes
 */
export const Button = React.forwardRef(({
  variant = 'dark',
  text,
  children,
  className = '',
  type = 'button',
  ...props
}, ref) => {
  // Normalize variants:
  // - 'dark' or 'gradient' mapped to 'dark-variant'
  // - 'light' or 'white' mapped to 'light-variant'
  const isLight = variant === 'light' || variant === 'white';
  const variantClass = isLight ? 'pse-btn-light' : 'pse-btn-dark';

  return (
    <button
      ref={ref}
      type={type}
      className={`pse-button ${variantClass} ${className}`}
      {...props}
    >
      <span className="pse-btn-icon-box">
        <svg
          className="pse-btn-arrow-svg"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M29.3008 23.6992L35.3357 23.6991L35.3357 29.7341"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.0156 35.0156L35.138 23.8932"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="pse-btn-text-box">
        {text || children}
      </span>
    </button>
  );
});

Button.displayName = 'Button';
export default Button;
