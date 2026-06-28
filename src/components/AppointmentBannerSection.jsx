import { Button } from './Button'

export const AppointmentBookingSection = () => {
  return (
    <section id="appointment-booking" className="w-full bg-white">
      <div className="relative mx-auto min-h-[725px] w-full max-w-[1920px] overflow-hidden bg-[#E7D4FF] max-lg:min-h-[620px]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(231,212,255,0.98)_0%,rgba(231,212,255,0.98)_46%,rgba(231,212,255,0.92)_54%,rgba(231,212,255,0.58)_66%,rgba(231,212,255,0.18)_80%,rgba(231,212,255,0)_100%)]" />

        <div className="absolute inset-y-0 right-0 w-[52%] max-lg:w-[56%]">
          <img
            src="/images/appointmenmt_bg.png"
            alt="Parents and school representatives speaking at the exhibition"
            className="h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
        </div>

        <div className="relative z-10 flex min-h-[725px] items-center px-6 py-12 sm:px-10 lg:min-h-[725px] lg:px-[96px] lg:py-0 max-lg:min-h-[620px]">
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
      </div>
    </section>
  )
}

export default AppointmentBookingSection
