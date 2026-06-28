const participatingSchools = [
  { src: '/images/woodstock_logo.png', alt: 'Woodstock School' },
  { src: '/images/aga_khan_logo.png', alt: 'The Aga Khan Academy' },
  { src: '/images/tisb_logo.png', alt: 'TISB' },
  { src: '/images/good_shepherd_logo.png', alt: 'Good Shepherd International School' },
  { src: '/images/shrewsbury_logo.png', alt: 'Shrewsbury International School' },
  { src: '/images/mayo_logo.png', alt: 'Mayo College India' },
  { src: '/images/unison_logo.png', alt: 'Unison World School' },
  { src: '/images/mussoorie_logo.png', alt: 'Mussoorie International School' },
  { src: '/images/oakridge_logo.png', alt: 'Oakridge International School' },
]

const strip = [...participatingSchools, ...participatingSchools]

const Row = ({ reverse = false }) => (
  <div
    tabIndex={0}
    aria-label="Participating schools marquee row"
    className={`marquee-row focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A2269]/30 ${reverse ? 'marquee-row--reverse' : ''}`}
  >
    <div className="marquee-track">
      {strip.map((school, index) => (
        <article
          key={`${school.alt}-${index}`}
          className="flex h-[120px] w-[274px] shrink-0 items-center justify-center rounded-[4px] border border-[#E8E6F0] bg-white px-5"
        >
          <img
            src={school.src}
            alt={school.alt}
            className="max-h-[86px] max-w-full object-contain"
            loading="lazy"
            decoding="async"
          />
        </article>
      ))}
    </div>
  </div>
)

export const ParticipatingSchoolsSection = () => {
  return (
    <section className="w-full bg-white py-[90px]">
      <div className="mx-auto max-w-[1920px] px-6 sm:px-10 lg:px-[96px]">
        <h2 className="text-center text-[48px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#2A2269]">
          Participating Schools
        </h2>

        <div className="mt-[42px] flex flex-col gap-[42px]">
          <Row />
          <Row reverse />
        </div>
      </div>
    </section>
  )
}

export default ParticipatingSchoolsSection
