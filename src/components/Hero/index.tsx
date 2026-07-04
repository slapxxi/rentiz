import ChevronDown from '~/assets/chevron-down.svg?react'
import houseImage from '~/assets/house.jpg'
import config from './config'

export const Hero = () => {
  return (
    <section className="col-[main] grid gap-y-10 self-start md:grid-cols-2 md:grid-rows-[1.4fr_1fr]">
      <div className="col-1 md:self-end">
        <h2 className="text-fluid-7xl leading-tight font-semibold">
          Perfect way to buy and sell a home
        </h2>
        <p className="text-fluid-lg text-neutral-300">
          Diam vitae, nec mattis lectus quam pretium amet facilisis. Urna, massa
          aliqua dui pellentesque. Ac, gravida in eget non amet eget purus non.
        </p>
      </div>

      <div className="row-span-full self-center md:col-2">
        <img src={houseImage} alt="" className="w-full" />
      </div>

      <form className="grid grid-cols-subgrid self-start md:col-[1/3] md:row-2">
        <div className="grid grid-cols-3 bg-white">
          {config.inputs.map((input, i) => (
            <div
              key={i}
              className="grid grid-rows-subgrid row-span-2 border-r border-neutral-300 p-8 last:border-0"
            >
              <div className="flex items-center gap-2 font-semibold text-neutral-300 text-fluid-base">
                {input.name}
                <ChevronDown className="w-2 md:w-3 text-teal-600" />
              </div>
              <div className="text-fluid-lg font-semibold text-gray-900">
                {input.value}
              </div>
            </div>
          ))}
        </div>
        <div className="grid bg-white pl-0 md:justify-self-start md:p-1">
          <button className="button px-10 text-fluid-2xl">Search</button>
        </div>
      </form>
    </section>
  )
}
