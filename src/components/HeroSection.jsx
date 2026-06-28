import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from './Button';

/**
 * Hero slide data – maps to images in /public/images/hero_slide_*.png.
 * The 12 images are distributed across 3 vertical columns (4 images each).
 * Columns 1 & 3 scroll downward; Column 2 scrolls upward (dual-axis effect).
 */
const heroColumns = [
  // Column 1 (scrolls down)
  [
    { src: '/images/hero_slide_1.png', alt: 'Students learning together' },
    { src: '/images/hero_slide_2.png', alt: 'Children in a classroom' },
    { src: '/images/hero_slide_3.png', alt: 'Kids exploring outdoors' },
    { src: '/images/hero_slide_4.png', alt: 'School children playing' },
  ],
  // Column 2 (scrolls up)
  [
    { src: '/images/hero_slide_5.png', alt: 'Young students smiling' },
    { src: '/images/hero_slide_6.png', alt: 'Kids in science lab' },
    { src: '/images/hero_slide_7.png', alt: 'Children at school event' },
    { src: '/images/hero_slide_8.png', alt: 'Students in art class' },
  ],
  // Column 3 (scrolls down)
  [
    { src: '/images/hero_slide_9.png', alt: 'School sports day' },
    { src: '/images/hero_slide_10.png', alt: 'Kids reading books' },
    { src: '/images/hero_slide_11.png', alt: 'Children graduating' },
    { src: '/images/hero_slide_12.png', alt: 'Students on field trip' },
  ],
];

/**
 * Location slide data for the horizontal text slider at the bottom of the hero.
 * Each slide shows a city/venue and date.
 */
const locationSlides = [
  {
    venue: 'Apparel House,',
    area: 'Sec 44, Gurugram',
    date: '2-3 August 2025',
    time: 'Sat-Sun | 10AM - 6PM',
  },
  {
    venue: 'Hotel Lalit,',
    area: 'Barakhamba Rd, Delhi',
    date: '9-10 August 2025',
    time: 'Sat-Sun | 10AM - 6PM',
  },
  {
    venue: 'JW Marriott,',
    area: 'Sector 35, Chandigarh',
    date: '16-17 August 2025',
    time: 'Sat-Sun | 10AM - 6PM',
  },
];

/**
 * Grade options for the enquiry form dropdown
 */
const gradeOptions = [
  'Pre-School / Nursery',
  'KG / Kindergarten',
  'Grade 1-3',
  'Grade 4-5',
  'Grade 6-8',
  'Grade 9-10',
  'Grade 11-12',
];

/* ------------------------------------------------------------------ */
/*  ImageColumn – a single auto-scrolling vertical strip of images    */
/* ------------------------------------------------------------------ */
const ImageColumn = ({ images, direction = 'down', isPaused }) => {
  // Duplicate images for seamless loop
  const strip = [...images, ...images];

  return (
    <div className="hero-image-column" aria-hidden="true">
      <div
        className={`hero-image-track ${direction === 'up' ? 'hero-image-track--up' : 'hero-image-track--down'}`}
        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
      >
        {strip.map((img, i) => (
          <div key={`${img.src}-${i}`} className="hero-image-cell">
            <img
              src={img.src}
              alt={img.alt}
              className="hero-image-cell__img"
              loading={i < 4 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  HeroSection – main export                                          */
/* ------------------------------------------------------------------ */
export const HeroSection = () => {
  // Enquiry form state
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    grade: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Image scroller pause
  const [scrollerPaused, setScrollerPaused] = useState(false);

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Reset after 3s
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ parentName: '', phone: '', grade: '' });
    }, 3000);
  };

  return (
    <section
      id="hero"
      className="hero-section"
      aria-label="Premier Schools Exhibition hero"
    >

      <div className="hero-section__container">
        {/* LEFT: Event copy & location slider */}
        <div className="hero-section__left">
          <div className="hero-section__copy">
            <h1 className="hero-section__heading">
              <span className="hero-section__heading-discover">
                Discover Gurugram's
              </span>
              <span className="hero-section__heading-top">
                Top 30+ Schools
              </span>
              <span className="hero-section__heading-sub">
                ALL IN ONE PLACE
              </span>
            </h1>
          </div>

          {/* Static Location / Date Pill */}
          <div className="mt-8 relative inline-flex items-center justify-center p-[6px] bg-[#FADDB5] rounded-full shadow-sm w-fit max-w-full">
            <div className="flex items-center px-8 py-3 rounded-full border-[1.5px] border-dashed border-[#D7AC77] w-full gap-6">
              
              <div className="flex flex-col text-left shrink-0 whitespace-nowrap">
                <span className="text-[#1B1754] font-bold text-2xl leading-tight">Apparel House,</span>
                <span className="text-[#1B1754] text-lg font-medium opacity-90">Sec 44, Gurugram</span>
              </div>
              
              <div className="w-[1.5px] h-[46px] bg-[#1B1754]/30 shrink-0" />
              
              <div className="flex flex-col text-left shrink-0 whitespace-nowrap">
                <span className="text-[#1B1754] font-bold text-2xl leading-tight">2-3 August 2025</span>
                <span className="text-[#1B1754] text-lg font-medium opacity-90">Sat-Sun | 10AM - 6PM</span>
              </div>

            </div>
          </div>
        </div>

        {/* CENTER: Dual-axis image scroller */}
        <div
          className="hero-section__scroller"
          onMouseEnter={() => setScrollerPaused(true)}
          onMouseLeave={() => setScrollerPaused(false)}
          onFocus={() => setScrollerPaused(true)}
          onBlur={() => setScrollerPaused(false)}
          aria-label="School exhibition photo gallery"
        >
          <ImageColumn images={heroColumns[0]} direction="down" isPaused={scrollerPaused} />
          <ImageColumn images={heroColumns[1]} direction="up" isPaused={scrollerPaused} />
          <ImageColumn images={heroColumns[2]} direction="down" isPaused={scrollerPaused} />
        </div>

        {/* RIGHT: Enquiry Form */}
        <div className="hero-section__right ">
          <form
            id="register-form"
            className="hero-enquiry-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <h2 className="hero-enquiry-form__title">Enquire Now</h2>

            <div className="hero-enquiry-form__field">
              <input
                type="text"
                id="parentName"
                name="parentName"
                placeholder="Parent's Name"
                className="hero-enquiry-form__input"
                autoComplete="name"
              />
            </div>

            <div className="hero-enquiry-form__field">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone number"
                className="hero-enquiry-form__input"
                autoComplete="tel"
                inputMode="numeric" q
                maxLength={10}
              />
            </div>

            <div className="hero-enquiry-form__field">
              <textarea
                id="grade"
                name="grade"
                placeholder="Which grade are you looking for?"
                className="hero-enquiry-form__input resize-none"
                rows={3}
              />
            </div>

            {formSubmitted ? (
              <div className="hero-enquiry-form__success" role="status">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" stroke="#22C55E" strokeWidth="2" />
                  <path d="M7 12.5L10.5 16L17 9" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Thank you! We'll get in touch soon.</span>
              </div>
            ) : (
              <span className='w-[150px]'>
                <Button variant="light" className="hero-enquiry-form__submit bg-[#2A1459]" type="submit">
                  Submit
                </Button>
              </span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
