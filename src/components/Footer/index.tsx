import Logo from '~/assets/rentiz-logo.svg?react'
import config from './config'
import TwitterIcon from '~/assets/twitter-icon.svg?react'
import InstagramIcon from '~/assets/instagram-icon.svg?react'
import YoutubeIcon from '~/assets/youtube-icon.svg?react'
import FacebookIcon from '~/assets/facebook-icon.svg?react'

export const Footer = () => {
  return (
    <footer className="z-10 col-[wide] mt-10 grid grid-cols-subgrid bg-darknavy-800">
      <div className="col-[main] grid grid-cols-2 md:grid-cols-[minmax(auto,340px)_repeat(auto-fit,minmax(140px,1fr))] gap-10 py-10">
        <div className="grid gap-8 auto-rows-min col-span-full md:col-auto">
          <Logo />
          <p className="text-lg text-neutral-300">
            Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi
            augue.
          </p>
          <div className="flex gap-4">
            <FacebookIcon className="text-lg text-darknavy-600" />
            <InstagramIcon className="text-lg text-darknavy-600" />
            <TwitterIcon className="text-lg text-darknavy-600" />
            <YoutubeIcon className="text-lg text-darknavy-600" />
          </div>
        </div>

        {config.sections.map((section, i) => (
          <div
            key={i}
            className="grid gap-6 py-4 md:justify-self-end self-start"
          >
            <h3 className="text-2xl font-semibold">{section.title}</h3>
            <ul className="grid gap-4">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-lg text-neutral-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="col-[wide] grid grid-cols-subgrid border-t border-darknavy-700 text-lg text-neutral-300">
        <div className="col-[main] flex justify-between py-4">
          <small>Copyright ©TemplatesJungle. 2022. All right reserved</small>
          <small>Design by: Designer</small>
        </div>
      </div>
    </footer>
  )
}
