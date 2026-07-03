import Logo from '~/assets/rentiz-logo.svg?react'
import config from './config'

export const Header = () => {
  return (
    <header className="col-[main] flex items-center my-10 gap-4">
      <a href="#">
        <Logo className="w-30" />
      </a>

      <nav className="ml-auto">
        <ul className="flex gap-5 items-center">
          {config.nav.map((item, i) => (
            <li key={i}>
              <a
                href="#"
                className="font-medium border-b border-transparent 
        hover:border-teal-500 text-neutral-300 hover:text-white"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex gap-2">
        <button className="button button-outline">Login</button>
        <button className="button">Sign Up</button>
      </div>
    </header>
  )
}
