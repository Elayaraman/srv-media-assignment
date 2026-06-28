const stats = [
  { src: '/images/stats/01.svg', alt: 'Trusted by 1 Million+ Parents' },
  { src: '/images/stats/02.svg', alt: '22+ Years of Legacy' },
  { src: '/images/stats/03.svg', alt: '500+ Participating Schools' },
  { src: '/images/stats/04.svg', alt: '17 Cities Across the Globe' },
]

export const StatsSection = () => {
  return (
    <section className=" overflow-hidden bg-white py-0 md:py-12">
      <div className="mx-auto flex w-full max-w-[1600px] justify-center px-6 pt-4 md:pt-10 md:px-10">
        <div className="grid w-full max-w-[1240px] grid-cols-2 gap-x-4 gap-y-4 md:gap-x-[45px] md:gap-y-10 lg:grid-cols-4">
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
