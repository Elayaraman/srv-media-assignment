import { useRef } from 'react'

const reasons = [
  {
    icon: '/images/school_head.svg',
    title: 'Interact Directly with School Heads',
    description: 'Get answers straight from the experts',
  },
  {
    icon: '/images/curriculum.svg',
    title: 'Compare Curriculum & Pedagogy',
    description: 'Understand the differences between CBSE, ICSE, IB, Cambridge, Finnish & more',
  },
  {
    icon: '/images/offers.svg',
    title: 'Get Exclusive Fee Structures & Offers',
    description: 'Access transparent information and avail offers',
  },
  {
    icon: '/images/school_offerings.svg',
    title: 'Explore Schools Offerings',
    description: 'Preview infrastructure, co-curricular, teaching methodology and culture',
  },
  {
    icon: '/images/counseling.svg',
    title: 'On-the-Spot Counselling',
    description: 'Save time with application guidance',
  },
]

export const MustVisitSection = () => {
  const scrollerRef = useRef(null)

  const scrollCards = (direction) => {
    const scroller = scrollerRef.current

    if (!scroller) {
      return
    }

    scroller.scrollBy({
      left: direction * 433,
      behavior: 'smooth',
    })
  }

  return (
    <section className="relative isolate overflow-hidden bg-white text-white mb-12 md:mb-[72px]">
      {/* Background container */}
      <div className="absolute inset-0 -z-10 flex flex-col pointer-events-none">
        {/* Main body of background */}
        <div className="flex-1 bg-gradient-to-b from-[#3F186A] to-[#000E38]" />
        
        {/* Constrained-height curve SVG at the bottom */}
        <svg
          className="w-full h-[12vw] min-h-[60px] max-h-[236px] shrink-0"
          preserveAspectRatio="none"
          viewBox="0 0 1920 236"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M0 0H1920V34.816C1169 236.046 748.424 232.194 0 34.816V0Z" fill="#000E38" />
        </svg>
      </div>

      <div className="relative mx-auto min-h-[768px] w-full max-w-[1920px] overflow-hidden px-0 pb-[116px] pt-[92px] max-md:min-h-[718px] max-md:pb-20 max-md:pt-16">
        <h2 className="mx-auto mb-[52px] max-w-[980px] px-6 text-center font-sans text-[48px] font-bold leading-[1.12] text-white max-md:mb-10 max-md:text-[34px] max-sm:text-[28px]">
          What Makes This Exhibition a Must-Visit
        </h2>

        <div
          ref={scrollerRef}
          className="flex gap-[18px] overflow-x-auto scroll-smooth pl-[101px] pr-[101px] [scrollbar-width:none] max-md:pl-6 max-md:pr-6 [&::-webkit-scrollbar]:hidden"
        >
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="min-h-[378px] text-left w-[415px] max-w-[calc(100vw-48px)] shrink-0 snap-start rounded-[19px] border-2 border-[#755797] bg-[linear-gradient(146deg,#DDBFFF_0%,#EDDDFF_100%)] px-[30px] py-[29px] text-[#2A1459] shadow-[0_0_0_1px_rgba(7,15,61,0.45)] max-md:min-h-[320px] max-md:w-[340px] max-md:px-6"
            >
              <img src={reason.icon} alt="" className="mb-[34px] h-20 w-20 max-md:mb-7 max-md:h-16 max-md:w-16" />
              <h3 className="mb-[13px] max-w-[330px] text-[25px] font-bold leading-[1.45] tracking-[-0.02em] max-md:text-[22px]">
                {reason.title}
              </h3>
              <p className="max-w-[335px] text-[22px] font-normal leading-[1.45] text-[#2A1459]/90 max-md:text-[18px]">
                {reason.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-[44px] flex justify-center gap-8 translate-y-6 relative z-10">
          <button
            type="button"
            aria-label="Show previous reason"
            onClick={() => scrollCards(-1)}
            className="flex h-[58px] w-[58px] items-center justify-center rounded-full border-[2.25px] border-white bg-transparent text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <svg width="31" height="20" viewBox="0 0 31 20" fill="none" aria-hidden="true">
              <path d="M10.4 1.25L1.75 10L10.4 18.75" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2.5 10H29" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Show next reason"
            onClick={() => scrollCards(1)}
            className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-white text-[#2A1459] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <svg width="31" height="20" viewBox="0 0 31 20" fill="none" aria-hidden="true">
              <path d="M20.6 1.25L29.25 10L20.6 18.75" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M28.5 10H2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default MustVisitSection
