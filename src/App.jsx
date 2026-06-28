import { AppointmentBookingSection } from './components/AppointmentBannerSection'
import { ChooseSchoolSection } from './components/ChooseSchoolSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ParticipatingSchoolsSection } from './components/ParticipatingSchoolsSection'
import { MustVisitSection } from './components/MustVisitSection'
import { StatsSection } from './components/StatsSection'

function App() {
  return (
    <>
      {/* Skip-to-content link for keyboard/screen-reader users (WCAG 2.2 AA) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-[#2A2269] focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>
      <Header />
      <HeroSection />
      <StatsSection />
      <ParticipatingSchoolsSection />
      <ChooseSchoolSection />
      <AppointmentBookingSection />
      <MustVisitSection />
      <Footer />
    </>
  )
}

export default App

