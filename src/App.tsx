import decorImage from '~/assets/decor-1.svg'
import { FeaturedIn, Header, Hero, Properties } from '~/components'

const App = () => {
  return (
    <div className="wrapper z-10 bg-darknavy text-white">
      <div className="absolute -z-1 col-[3/4] row-[2/3] ml-[min(50%,132px)] translate-y-1/2 self-end justify-self-start">
        <img src={decorImage} alt="" className="min-w-45" />
      </div>

      <Header />
      <Hero />
      <FeaturedIn />
      <Properties />
    </div>
  )
}

export default App
