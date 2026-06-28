import React from 'react';

/**
 * Custom interactive Button component supporting dark gradient and light white styles.
 * Mimics the premium double-box SVG aesthetic with accessibility and micro-interactions.
 * Styled with Tailwind CSS.
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
  clicked,
  onClick,
  ...props
}, ref) => {
  const isLight = variant === 'light' || variant === 'white';
  const [localClicked, setLocalClicked] = React.useState(false);
  const isClicked = clicked !== undefined ? clicked : localClicked;
  const hasBg = className.split(' ').some(c => c.startsWith('bg-'));

  const handleClick = (e) => {
    setLocalClicked(true);
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      ref={ref}
      type={type}
      onClick={handleClick}
      className={`
        pse-button group inline-flex items-stretch h-[60px] border-none p-0 cursor-pointer 
        font-sans font-bold text-sm tracking-wider uppercase box-border vertical-align-middle 
        transition-transform duration-200 active:scale-[0.97] focus-visible:outline-none 
        focus-visible:ring-3 focus-visible:ring-purple-500/60 disabled:opacity-60 disabled:cursor-not-allowed 
        disabled:transform-none rounded ${hasBg ? '' : 'bg-transparent'}
        ${className}
      `}
      {...props}
    >
      <span
        className={`
          flex items-center justify-center w-[60px] h-[60px] rounded-l box-border 
          transition-all duration-300 ease-out relative overflow-hidden shrink-0
          ${
            isLight
              ? 'bg-white text-[#2A1459] hover:bg-[#f4f3ec] hover:text-[#1e0b40]'
              : 'bg-gradient-to-r from-[#3F186A] to-[#000E38] text-white hover:from-[#4d2080] hover:to-[#001654]'
          }
        `}
      >
        <svg
          className={`
            block transition-transform duration-300 ease-out origin-center
            ${isClicked ? 'rotate-45 translate-x-0 translate-y-0' : 'group-hover:translate-x-[3px] group-hover:-translate-y-[3px]'}
          `}
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
      <span
        className={`
          flex items-center justify-center px-8 h-[60px] rounded-r border-2 border-l-0 border-solid 
          box-border transition-all duration-300 ease-out whitespace-nowrap grow
          ${
            isLight
              ? isClicked
                ? 'bg-white border-white text-[#2A1459]'
                : 'border-white text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]'
              : isClicked
                ? 'bg-[#000E38] border-[#000E38] text-white'
                : 'border-[#000E38] text-[#030E3B] hover:bg-[#000e38]/[0.04] hover:text-[#000E38] hover:border-[#000E38]'
          }
        `}
      >
        {text || children}
      </span>
    </button>
  );
});

Button.displayName = 'Button';
export default Button;
