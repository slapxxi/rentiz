import ChevronDown from '~/assets/chevron-down.svg?react'
import houseImage from '~/assets/house.jpg'
import config from './config'

export const Hero = () => {
  return (
    <section className="col-main grid grid-cols-[minmax(0,1fr)_min-content_minmax(0,1fr)] grid-rows-[auto_min-content] gap-10 self-start">
      <div className="col-1 self-end">
        <h2 className="text-[68px] font-semibold leading-tight">
          Perfect way to buy and sell a home
        </h2>
        <p className="text-lg text-neutral-300">
          Diam vitae, nec mattis lectus quam pretium amet facilisis. Urna, massa
          aliqua dui pellentesque. Ac, gravida in eget non amet eget purus non.
        </p>
      </div>

      <div className="col-[2/span_2] row-span-full">
        <img src={houseImage} alt="" className="w-full" />
      </div>

      <form className="col-[1/3] row-2 grid grid-cols-subgrid bg-white">
        <div className="grid grid-cols-3">
          {config.inputs.map((input, i) => (
            <div key={i} className="grid self-center">
              <div className="flex items-center gap-2 font-semibold text-neutral-300">
                {input.name}
                <ChevronDown className="w-3 text-teal-600" />
              </div>
              <div className="text-lg font-semibold text-gray-900">
                {input.value}
              </div>
            </div>
          ))}
        </div>
        <div className="grid p-1">
          <button className="button col-2 px-8">Search</button>
        </div>
      </form>
    </section>
  )
}
