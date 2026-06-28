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
      <div className="mx-auto max-w-[1920px] px-6 py-[96px] sm:px-10 lg:px-[96px] lg:py-[104px]">
        <h2 className="text-center text-[48px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#2A2269]">
          Choose the School That Fits You Best
        </h2>

        <div className="mt-16 grid gap-4 justify-items-center lg:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.title}
              className="relative h-[405px] w-full max-w-[420px] overflow-hidden rounded-[24px] bg-[#120B1F] shadow-[0_10px_30px_rgba(13,10,35,0.12)]"
            >
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.18)_52%,rgba(0,0,0,0.82)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-left text-white">
                <h3 className="text-[20px] font-semibold leading-[1.25]">
                  {category.title}
                </h3>
                <p className="mt-3 text-[18px] font-normal leading-[1.45] text-white/90">
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
