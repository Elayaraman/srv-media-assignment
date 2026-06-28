import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { AppointmentBookingSection } from './components/AppointmentBannerSection'
import { Button } from './components/Button'
import { ChooseSchoolSection } from './components/ChooseSchoolSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { MustVisitSection } from './components/MustVisitSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <section className="flex flex-col gap-6 justify-center items-center grow py-12 px-8 max-w-full md:py-8 md:px-5 md:gap-[18px]">
        <div className="relative">
          <img src={heroImg} className="relative z-0 mx-auto w-[170px]" width="170" height="179" alt="" />
          <img
            src={reactLogo}
            className="absolute z-10 left-0 right-0 mx-auto top-[34px] h-[28px]"
            style={{ transform: 'perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg) scale(1.4)' }}
            alt="React logo"
          />
          <img
            src={viteLogo}
            className="absolute z-0 left-0 right-0 mx-auto top-[107px] h-[26px] w-auto"
            style={{ transform: 'perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg) scale(0.8)' }}
            alt="Vite logo"
          />
        </div>
        <div>
          <h1 className="font-heading font-medium text-4xl md:text-[56px] tracking-[-1.68px] my-5 md:my-8 text-[var(--text-h)]">Get started</h1>
          <p className="m-0 text-[var(--text)]">
            Edit <code className="font-mono text-[15px] leading-[135%] px-2 py-1 bg-[var(--code-bg)] rounded text-[var(--text-h)]">src/App.jsx</code> and save to test <code className="font-mono text-[15px] leading-[135%] px-2 py-1 bg-[var(--code-bg)] rounded text-[var(--text-h)]">HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="font-mono text-base px-2.5 py-1 rounded text-[var(--accent)] bg-[var(--accent-bg)] border-2 border-transparent transition-colors duration-300 mb-6 hover:border-[var(--accent-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        <div className="flex gap-5 justify-center my-10 flex-wrap p-5 bg-black/5 dark:bg-white/5 rounded-lg">
          <Button variant="dark">Register Now</Button>
          <Button variant="light" className="bg-[#2A1459]">Submit</Button>
        </div>
      </section>

      <ChooseSchoolSection />
      <AppointmentBookingSection />
      <MustVisitSection />
      <Footer />
    </>
  )
}

export default App
