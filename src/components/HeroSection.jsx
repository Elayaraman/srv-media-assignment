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
  // Image scroller pause
  const goToSlide = (index) => {
    stopSlider();
    setActiveSlide(index);
    startSlider();
  };

  const nextSlide = () => goToSlide((activeSlide + 1) % locationSlides.length);
  const prevSlide = () => goToSlide((activeSlide - 1 + locationSlides.length) % locationSlides.length);

  return (
    <section
      id="hero"
      className="hero-section"
      aria-label="Premier Schools Exhibition hero"
    >
      {/* Deep gradient background */}
      <div className="hero-section__bg" aria-hidden="true">
        <div className="hero-section__glow" />
      </div>

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

          {/* Location / Date Slider */}
          <div
            className="hero-location-slider"
            role="region"
            aria-label="Event locations and dates"
            aria-roledescription="carousel"
            onMouseEnter={stopSlider}
            onMouseLeave={startSlider}
          >
            <div className="hero-location-slider__track">
              {locationSlides.map((slide, index) => (
                <div
                  key={slide.venue}
                  className={`hero-location-slide ${index === activeSlide ? 'hero-location-slide--active' : ''}`}
                  role="tabpanel"
                  aria-hidden={index !== activeSlide}
                  id={`hero-slide-${index}`}
                >
                  <div className="hero-location-slide__pill">
                    <div className="hero-location-slide__pill-left">
                      <span className="hero-location-slide__venue">{slide.venue}</span>
                      <span className="hero-location-slide__area">{slide.area}</span>
                    </div>
                    <div className="hero-location-slide__pill-divider" />
                    <div className="hero-location-slide__pill-right">
                      <span className="hero-location-slide__date">{slide.date}</span>
                      <span className="hero-location-slide__time">{slide.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slide navigation dots */}
            <div className="hero-location-slider__dots" role="tablist" aria-label="Location slides">
              {locationSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === activeSlide}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-controls={`hero-slide-${i}`}
                  className={`hero-location-slider__dot ${i === activeSlide ? 'hero-location-slider__dot--active' : ''}`}
                  onClick={() => goToSlide(i)}
                />
              ))}
            </div>

            {/* Arrow controls for accessibility */}
            <div className="hero-location-slider__arrows">
              <button
                type="button"
                aria-label="Previous location"
                className="hero-location-slider__arrow"
                onClick={prevSlide}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next location"
                className="hero-location-slider__arrow"
                onClick={nextSlide}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
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
        <div className="hero-section__right">
          <form
            id="register-form"
            className="hero-enquiry-form"
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
                inputMode="numeric"
                maxLength={10}
              />
            </div>

            <div className="hero-enquiry-form__field">
              <select
                id="grade"
                name="grade"
                defaultValue=""
                className="hero-enquiry-form__input hero-enquiry-form__select"
              >
                <option value="" disabled>Which grade are you looking for?</option>
                {gradeOptions.map((grade) => (
                  <option key={grade} value={grade}>{grade}</option>
                ))}
              </select>
            </div>

            <Button variant="light" className="hero-enquiry-form__submit bg-[#2A1459]" type="button">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
