import decorImage from '~/assets/decor-1.svg'
import { FeaturedIn, Header, Hero } from '~/components'

const App = () => {
  return (
    <div className="z-10 wrapper bg-darknavy text-white">
      <div className="-z-1 absolute col-[3/4] row-[2/3] translate-y-1/2 self-end justify-self-end">
        <img src={decorImage} alt="" className="min-w-45" />
      </div>

      <Header />
      <Hero />
      <FeaturedIn />
    </div>
  )
}

export default App
