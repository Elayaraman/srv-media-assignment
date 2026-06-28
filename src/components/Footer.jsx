const contactBlocks = [
  {
    icon: '/images/location_pin.svg',
    iconAlt: '',
    title: 'Corporate Office:',
    lines: ['Suite B-5, Ballygunge Park Tower,', '67B Ballygunge Circular Road,', 'Kolkata - 700019'],
  },
  {
    icon: '/images/location_pin.svg',
    iconAlt: '',
    title: 'Ahmedabad Office:',
    lines: ['12/AA, Swastik Chambers, Near CU', 'Shah College, Ashram Road,', 'Ahmedabad - 380009'],
  },
  {
    icon: '/images/call.svg',
    iconAlt: '',
    title: 'Call us on',
    lines: ['9674805912', '9674585012'],
  },
]

const socialLinks = [
  { href: '#', icon: '/images/insta.svg', label: 'Instagram' },
  { href: '#', icon: '/images/fb.svg', label: 'Facebook' },
  { href: '#', icon: '/images/yt.svg', label: 'YouTube' },
]

export const Footer = () => {
  return (
    <footer className="w-full text-left">
      <div className="bg-[linear-gradient(180deg,#3F186A_0%,#000E38_100%)] text-white">
        <div className="mx-auto flex min-h-[274px] w-full max-w-[1920px] flex-col gap-10 px-6 py-12 md:px-12 lg:flex-row lg:items-start lg:justify-between lg:gap-8 lg:px-[112px] lg:py-[62px]">
          <a href="/" className="inline-flex w-[118px] shrink-0 transition-transform duration-300 hover:scale-[1.02]">
            <img
              src="/images/pse_logo.png"
              alt="Premier Schools Exhibition"
              className="h-auto w-full object-contain"
            />
          </a>

          <div className="grid flex-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.18fr_1.08fr_0.78fr_0.8fr] lg:gap-10">
            {contactBlocks.map((block) => (
              <section key={block.title} className="flex items-start gap-4">
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-lg bg-[#DCCBFF] shadow-[0_2px_5px_rgba(0,0,0,0.18)]">
                  <img src={block.icon} alt={block.iconAlt} className="h-[30px] w-[30px]" />
                </div>
                <div className="pt-0.5">
                  <h2 className="mb-3 font-sans text-[20px] font-bold leading-tight text-white">{block.title}</h2>
                  <address className="not-italic text-[18px] leading-[1.45] text-white/82">
                    {block.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              </section>
            ))}

            <section>
              <h2 className="mb-[18px] font-sans text-[20px] font-bold leading-tight text-white">Follow us on</h2>
              <div className="flex flex-wrap gap-[18px]">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="flex h-[52px] w-[52px] items-center justify-center rounded-lg bg-[#DCCBFF] shadow-[0_2px_5px_rgba(0,0,0,0.18)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    <img src={link.icon} alt="" className="h-[30px] w-[30px]" />
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="flex min-h-[60px] items-center justify-center bg-white px-6 py-4 text-center">
        <p className="font-sans text-[17px] font-semibold leading-normal text-[#2B2259]">
          Copyright © 2025 | All rights reserved. Premier Schools Exhibition
        </p>
      </div>
    </footer>
  )
}

export default Footer
