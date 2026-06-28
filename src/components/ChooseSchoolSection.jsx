const categories = [
  {
    image: '/images/choose_school_1.png',
    title: 'Pre-Schools & Early Learning Centres',
    description: 'Nurturing foundational skills for toddlers and pre-primary children.',
  },
  {
    image: '/images/choose_school_2.png',
    title: 'K–12 CBSE Day Schools',
    description: 'Reputed schools offering complete schooling from Kindergarten to Grade 12.',
  },
  {
    image: '/images/choose_school_3.png',
    title: 'Heritage to New-Age Schools',
    description: 'Time-tested schools to innovative pedagogy, tech enabled, future-ready schools',
  },
  {
    image: '/images/choose_school_4.png',
    title: 'International Curriculum Schools',
    description: 'Offering IB, Cambridge, Finnish and other global curricula with a global learning environment.',
  },
]

export const ChooseSchoolSection = () => {
  return (
    <section id="choose-school" className="w-full bg-white">
      <div className="mx-auto max-w-[1920px] px-6 py-8 pb-24">
        <h2 className="text-center text-[32px] leading-[1.2] md:text-[48px] font-semibold text-[#2A2269] px-4 md:px-0">
          Choose the School That Fits You Best
        </h2>

        {/* Mobile: Horizontal scroll slider | Desktop: Wrapped grid */}
        <div className="mt-8 md:mt-12 flex overflow-x-auto md:overflow-x-visible flex-nowrap md:flex-wrap md:justify-center gap-4 snap-x snap-mandatory pb-8 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
          {categories.map((category) => (
            <article
              key={category.title}
              className="relative h-[320px] md:h-[380px] w-[85vw] max-w-[300px] md:w-full md:max-w-[380px] shrink-0 snap-center overflow-hidden rounded-[24px] shadow-[0_10px_30px_rgba(13,10,35,0.12)] bg-cover bg-center"
              style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.18) 52%, rgba(0,0,0,0.82) 100%), url(${category.image})` }}
            >
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-left text-white">
                <h3 className="text-[18px] md:text-[20px] font-semibold leading-[1.25]">
                  {category.title}
                </h3>
                <p className="mt-2 md:mt-3 text-[15px] md:text-[18px] font-normal leading-[1.45] text-white/90">
                  {category.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChooseSchoolSection
