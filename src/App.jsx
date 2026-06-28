import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Button } from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="flex flex-col gap-6 justify-center items-center grow py-12 px-8 max-w-full md:py-8 md:px-5 md:gap-[18px]">
        <div className="relative">
          <img src={heroImg} className="relative z-0 mx-auto w-[170px]" width="170" height="179" alt="" />
          <img
            src={reactLogo}
            className="absolute z-10 left-0 right-0 mx-auto top-[34px] h-[28px]"
            style={{ transform: 'perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg) scale(1.4)' }}
            alt="React logo"
          />
          <img
            src={viteLogo}
            className="absolute z-0 left-0 right-0 mx-auto top-[107px] h-[26px] w-auto"
            style={{ transform: 'perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg) scale(0.8)' }}
            alt="Vite logo"
          />
        </div>
        <div>
          <h1 className="font-heading font-medium text-4xl md:text-[56px] tracking-[-1.68px] my-5 md:my-8 text-[var(--text-h)]">Get started</h1>
          <p className="m-0 text-[var(--text)]">
            Edit <code className="font-mono text-[15px] leading-[135%] px-2 py-1 bg-[var(--code-bg)] rounded text-[var(--text-h)]">src/App.jsx</code> and save to test <code className="font-mono text-[15px] leading-[135%] px-2 py-1 bg-[var(--code-bg)] rounded text-[var(--text-h)]">HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="font-mono text-base px-2.5 py-1 rounded text-[var(--accent)] bg-[var(--accent-bg)] border-2 border-transparent transition-colors duration-300 mb-6 hover:border-[var(--accent-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        <div className="flex gap-5 justify-center my-10 flex-wrap p-5 bg-black/5 dark:bg-white/5 rounded-lg">
          <Button variant="dark">Register Now</Button>
          <Button variant="light" className="bg-[#2A1459]">Submit</Button>
        </div>
      </section>

      <div className="relative w-full before:content-[''] before:absolute before:-top-[4.5px] before:left-0 before:border-[5px] before:border-transparent before:border-l-[var(--border)] after:content-[''] after:absolute after:-top-[4.5px] after:right-0 after:border-[5px] after:border-transparent after:border-r-[var(--border)]"></div>

      <section className="flex border-t border-[var(--border)] text-left md:flex-col md:text-center">
        <div className="flex-1 p-8 md:px-5 md:py-6 border-r border-[var(--border)] md:border-r-0 md:border-b">
          <svg className="mb-4 w-[22px] h-[22px] md:mx-auto text-[var(--text)]" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2 className="font-heading font-medium text-xl md:text-2xl leading-[118%] tracking-[-0.24px] mb-2 text-[var(--text-h)]">Documentation</h2>
          <p className="m-0 text-[var(--text)]">Your questions, answered</p>
          <ul className="list-none p-0 flex gap-2 mt-8 md:mt-5 md:flex-wrap md:justify-center">
            <li className="md:flex-[1_1_calc(50%-8px)]">
              <a
                href="https://vite.dev/"
                target="_blank"
                className="text-[var(--text-h)] text-base rounded-md bg-[var(--social-bg)] flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow duration-300 hover:shadow-[var(--shadow)] md:w-full md:justify-center"
              >
                <img className="h-[18px]" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li className="md:flex-[1_1_calc(50%-8px)]">
              <a
                href="https://react.dev/"
                target="_blank"
                className="text-[var(--text-h)] text-base rounded-md bg-[var(--social-bg)] flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow duration-300 hover:shadow-[var(--shadow)] md:w-full md:justify-center"
              >
                <img className="h-[18px]" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-8 md:px-5 md:py-6">
          <svg className="mb-4 w-[22px] h-[22px] md:mx-auto text-[var(--text)]" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2 className="font-heading font-medium text-xl md:text-2xl leading-[118%] tracking-[-0.24px] mb-2 text-[var(--text-h)]">Connect with us</h2>
          <p className="m-0 text-[var(--text)]">Join the Vite community</p>
          <ul className="list-none p-0 flex gap-2 mt-8 md:mt-5 md:flex-wrap md:justify-center">
            <li className="md:flex-[1_1_calc(50%-8px)]">
              <a
                href="https://github.com/vitejs/vite"
                target="_blank"
                className="text-[var(--text-h)] text-base rounded-md bg-[var(--social-bg)] flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow duration-300 hover:shadow-[var(--shadow)] md:w-full md:justify-center"
              >
                <svg className="h-[18px] w-[18px] text-[var(--text-h)] dark:invert dark:brightness-200" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li className="md:flex-[1_1_calc(50%-8px)]">
              <a
                href="https://chat.vite.dev/"
                target="_blank"
                className="text-[var(--text-h)] text-base rounded-md bg-[var(--social-bg)] flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow duration-300 hover:shadow-[var(--shadow)] md:w-full md:justify-center"
              >
                <svg className="h-[18px] w-[18px] text-[var(--text-h)] dark:invert dark:brightness-200" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li className="md:flex-[1_1_calc(50%-8px)]">
              <a
                href="https://x.com/vite_js"
                target="_blank"
                className="text-[var(--text-h)] text-base rounded-md bg-[var(--social-bg)] flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow duration-300 hover:shadow-[var(--shadow)] md:w-full md:justify-center"
              >
                <svg className="h-[18px] w-[18px] text-[var(--text-h)] dark:invert dark:brightness-200" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li className="md:flex-[1_1_calc(50%-8px)]">
              <a
                href="https://bsky.app/profile/vite.dev"
                target="_blank"
                className="text-[var(--text-h)] text-base rounded-md bg-[var(--social-bg)] flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow duration-300 hover:shadow-[var(--shadow)] md:w-full md:justify-center"
              >
                <svg className="h-[18px] w-[18px] text-[var(--text-h)] dark:invert dark:brightness-200" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="relative w-full before:content-[''] before:absolute before:-top-[4.5px] before:left-0 before:border-[5px] before:border-transparent before:border-l-[var(--border)] after:content-[''] after:absolute after:-top-[4.5px] after:right-0 after:border-[5px] after:border-transparent after:border-r-[var(--border)]"></div>
      <section className="h-[88px] border-t border-[var(--border)] md:h-12"></section>
    </>
  )
}

export default App
