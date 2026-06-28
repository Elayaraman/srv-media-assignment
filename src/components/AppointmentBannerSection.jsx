import { Button } from './Button'

export const AppointmentBookingSection = () => {
  return (
    <section id="appointment-booking" className="w-full bg-white">
      <div className="mx-auto flex min-h-[725px] w-full max-w-[1920px] flex-col lg:flex-row overflow-hidden bg-[#E7D4FF] max-lg:min-h-[620px]">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-1 items-center px-6 py-12 sm:px-10 lg:px-[96px] lg:py-0 relative z-10">
          <div className="max-w-[640px] text-left text-[#24105C]">
            <p className="mb-6 text-[32px] italic leading-none text-[#7E45E7] max-sm:text-[24px]">
              Exciting Opportunities for Parents!
            </p>

            <h2 className="max-w-[640px] text-[64px] font-normal leading-[0.95] tracking-[-0.05em] text-[#24105C] max-sm:text-[42px]">
              <span className="block">Pre-schedule Your</span>
              <span className="block">School Appointments</span>
            </h2>

            <p className="mt-7 text-[32px] italic leading-none text-[#7E45E7] max-sm:text-[24px]">
              To Avoid Rush
            </p>

            <Button variant="dark" className="mt-14 max-sm:mt-10">
              Pre-Schedule Now
            </Button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="relative flex w-full lg:w-[52%] max-lg:flex-1">
          {/* Fading transition between text and image */}
          <div className="absolute top-0 left-0 h-32 w-full bg-gradient-to-b from-[#E7D4FF] to-transparent lg:bottom-0 lg:h-full lg:w-[250px] lg:bg-gradient-to-r pointer-events-none" />
          
          <img
            src="/images/appointmenmt_bg.png"
            alt="Parents and school representatives speaking at the exhibition"
            className="h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}

export default AppointmentBookingSection
