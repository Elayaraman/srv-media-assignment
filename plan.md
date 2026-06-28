# React Implementation Plan - Premier Schools Exhibition (PSE) Landing Page

This document outlines the detailed architecture, component breakdown, design tokens, asset mapping, and accessibility plans to recreate the **Premier Schools Exhibition (PSE) Landing Page** in React.

In accordance with user guidelines, **no implementation code** has been written to the React boilerplate files. This serves as the blueprint for the structural and layout composition.

---

## 1. Analysis of Mockup Assets (30-06-2025 vs 12-06-2025)

We analyzed the newly provided mockup files:
* `Premier Schools Exhibition (PSE) LP (30-06-2025)-Desktop.png`
* `Premier Schools Exhibition (PSE) LP (30-06-2025)-Desktop.svg`

### Visual & Coordinate Alignment Verification
1. **Dimensions:** The SVG width is **1,920px** and the height is exactly **4,133px**. This aligns perfectly with the figma frame dimensions (`1920x4133`) from the previous version.
2. **Sections Mapping:** 
   - **Navigation Header:** Y = 0 to 100px.
   - **Hero Banner & Registration Form:** Y = 100px to 820px.
   - **Stats Credentials Row:** Y = 900px to 1100px.
   - **Participating School Logos:** Y = 1180px to 1542px.
   - **Choose the School Selector:** Y = 1622px to 2147px.
   - **Intermediate Collage Segment:** Y = 2227px to 2952px.
   - **Exhibition Must-Visit Slider:** Y = 2952px to 3719px.
   - **Footer Layout:** Y = 3799px to 4133px.
3. **Typography & Styling:** 
   - Primary Deep Blue background fill paint: `#194c9c`.
   - Accent orange-gold paint: `#ed923a`.
   - Dark theme secondary fonts and contrast overlays are preserved.

---

## 2. Project Folder Structure

The React project has been scaffolded using **Vite + React (JavaScript)**. The directory organization is as follows:

```text
srv-media-assignment/
├── public/
│   ├── favicon.svg          # Default favicon
│   ├── icons.svg            # Navigation and block SVG symbols
│   ├── images/              # Extracted logos and section graphics [SCAFFOLDED]
│   └── videos/              # Video assets (e.g., hero background) [SCAFFOLDED]
├── src/
│   ├── assets/              # Icons and SVGs
│   ├── components/          # Placeholder folder for reusable UI components [SCAFFOLDED]
│   ├── App.jsx              # Application layout assembler [NO MODIFICATION]
│   ├── App.css              # CSS styles (BEM structure) [NO MODIFICATION]
│   ├── index.css            # Global CSS variables, resets, accessibility [NO MODIFICATION]
│   └── main.jsx             # React DOM entrypoint [NO MODIFICATION]
├── index.html               # Main page layout & SEO meta tags [NO MODIFICATION]
├── package.json             # Core dependency settings
└── plan.md                  # Detailed design specification and layout roadmap [THIS FILE]
```

---

## 3. Section-by-Section Architectural Plan

Below is the layout composition plan for the React components:

### A. Navigation Header
* **Layout:** Sticky flex container.
* **Elements:**
  * Brand logo (`pse_logo.png`) on the left.
  * "Register Now" action button on the right, linking smoothly to `#register-form`.
* **Accessibility:** `role="banner"`, keyboard focus outline, link skip anchors.

### B. Hero Banner & Lead Form
* **Layout:** Relative grid layout (`1.2fr 0.8fr`) overlaying a loop video background.
* **Background Video:** `<video>` configured with `muted loop playsInline autoPlay` to bypass browser autoplay blocks, showing footage of students.
* **Image Scroller (Autoplay columns):** 
  - 3 vertical columns of thumbnail images.
  - Columns 1 and 3 translate downwards; Column 2 translates upwards.
  - Animated using CSS `@keyframes` with `animation-play-state: paused` triggered on mouse hover.
* **Text Slider (Event details):**
  - Autoplays horizontal text frames containing locations and schedules.
  - Controls include simple navigation arrow triggers and dots pagination.
* **Lead Capture Card (`LeadForm.jsx`):**
  - Positioned as a floating block on the right.
  - Inputs: Name, Email, Phone, Grade Selector (Dropdown), and Message.
  - Validation: Standard regex pattern tests on form submit. Display of custom inline error warnings.

### C. Stats Credentials
* **Layout:** 4-column responsive grid on desktop; stacks vertically on mobile.
* **Components:**
  - Card 1: `Trusted by 1 Million+ Parents` (SVG icon: family/parents)
  - Card 2: `22+ Years of Legacy` (SVG icon: shield/badge)
  - Card 3: `500+ Participating Schools` (SVG icon: graduation cap/academy)
  - Card 4: `17 Cities Across the Globe` (SVG icon: globe/map)

### D. Participating School Marquee
* **Layout:** Dual horizontal scrolling tracks.
* **Animations:**
  - Track 1 (Top): Slides left-to-right infinitely.
  - Track 2 (Bottom): Slides right-to-left infinitely.
  - Tracks pause on mouse hover or focus.
  - Built using CSS transforms (`translate3d`) with duplicated logo arrays to ensure seamless infinite loops.

### E. School Selector Cards
* **Layout:**
  - Desktop: 4 cards displayed side-by-side.
  - Mobile: Swipable viewport showing one card at a time with indicator dots.
* **Data Cards:**
  1. `Pre-Schools & Early Learning Centres`
  2. `K–12 CBSE Day Schools`
  3. `Heritage to New-Age Schools`
  4. `International Curriculum Schools`
* **Effects:** Soft background images with absolute dark blue gradient overlays. Text is layered cleanly on top. Hover transforms zoom the background image.

### F. Intermediate Collage Block
* **Layout:** 2-column flex layout.
* **Elements:**
  - Left: Overlapping, asymmetrical collage of three images (large counseling session photo, two smaller student pictures).
  - Right: Key copywriting text outlines, checklist checkmark list, and a "Book Free Entry Pass" anchor button.

### G. Exhibition Must-Visit Slider
* **Layout:** Horizontal card track.
* **Track Items:** 5 distinct highlight cards showcasing the advantages of attending.
* **Controls:** Arrow control triggers positioned at the top-right. Touch swipe gesture support implemented using React `onTouchStart` and `onTouchEnd` wrappers.

### H. Overlapping Graphic & Footer
* **Collage Overlay:** Overlapping crop image of a school girl positioned relative to the footer structure.
* **Footer Blocks:**
  - Column 1: Core PSE branding logo.
  - Column 2: Address blocks (Corporate Office & Ahmedabad Office) with SVG coordinates pins.
  - Column 3: Telephones & customer support links.
  - Column 4: Social handles (Facebook, Twitter, Instagram).
  - Bottom: Standard copyright warning.

---

## 4. Verification Plan

### Automated Checks
* **React compilation:** `npm run build` should succeed with zero errors.
* **Lint checks:** `npm run lint` should run cleanly.

### Accessibility Validation (WCAG 2.2 AA)
* **Skip-to-Content Link:** Allow quick navigation past headers.
* **Keyboard Navigation:** Confirm all interactive elements (form inputs, buttons, sliders) receive focus indicators (`:focus-visible`).
* **Reduced Motion:** Marquee scroll animations scale down or stop if `@media (prefers-reduced-motion: reduce)` is true.
