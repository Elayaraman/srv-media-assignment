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

