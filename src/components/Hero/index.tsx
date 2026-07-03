import ChevronDown from '~/assets/chevron-down.svg?react'
import houseImage from '~/assets/house.jpg'
import config from './config'
import decorImage from '~/assets/decor-1.svg'

export const Hero = () => {
  return (
    <>
      <div className="col-3 row-2 place-self-end w-[180px]">
        <img src={decorImage} alt="" />
      </div>

      <section className="col-main grid grid-cols-2 grid-rows-[1.4fr_1fr] gap-y-10 self-start">
        <div className="col-1 self-end">
          <h2 className="text-[68px] leading-tight font-semibold">
            Perfect way to buy and sell a home
          </h2>
          <p className="text-lg text-neutral-300">
            Diam vitae, nec mattis lectus quam pretium amet facilisis. Urna,
            massa aliqua dui pellentesque. Ac, gravida in eget non amet eget
            purus non.
          </p>
        </div>

        <div className="col-2 row-span-full">
          <img src={houseImage} alt="" className="w-full" />
        </div>

        <form className="col-[1/3] row-2 grid grid-cols-subgrid self-start">
          <div className="grid grid-cols-3 bg-white">
            {config.inputs.map((input, i) => (
              <div
                key={i}
                className="grid border-r border-neutral-300 p-8 last:border-0"
              >
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
          <div className="grid justify-self-start bg-white p-1 pl-0">
            <button className="button px-10 text-2xl">Search</button>
          </div>
        </form>
      </section>
    </>
  )
}
