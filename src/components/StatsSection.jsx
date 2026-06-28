const stats = [
  { src: '/images/stats/01.svg', alt: 'Trusted by 1 Million+ Parents' },
  { src: '/images/stats/02.svg', alt: '22+ Years of Legacy' },
  { src: '/images/stats/03.svg', alt: '500+ Participating Schools' },
  { src: '/images/stats/04.svg', alt: '17 Cities Across the Globe' },
]

export const StatsSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      <div className="absolute inset-x-0 top-0 h-[31px] bg-[#1b1754]" aria-hidden="true" />

      <div className="mx-auto flex w-full max-w-[1600px] justify-center px-6 pt-10 md:px-10">
        <div className="grid w-full max-w-[1440px] grid-cols-2 gap-x-[45px] gap-y-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.src} className="flex justify-center">
              <img
                src={stat.src}
                alt={stat.alt}
                className="h-[165px] w-auto max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
