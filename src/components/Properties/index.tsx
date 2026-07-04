import AreaIcon from '~/assets/area.svg?react'
import BathIcon from '~/assets/bath.svg?react'
import BedIcon from '~/assets/bed.svg?react'
import ChevronLeft from '~/assets/chevron-left.svg?react'
import ChevronRight from '~/assets/chevron-right.svg?react'
import config from './config'

export const Properties = () => {
  return (
    <div className="geo-section col-[wide] my-10 grid grid-cols-subgrid gap-y-12">
      <div className="col-[main]">
        <h2 className="text-fluid-5xl font-semibold">Popular Residence</h2>
      </div>

      <div className="col-[main] grid gap-4 md:col-[wide] md:grid-cols-[1fr_minmax(auto,1680px)_1fr]">
        <div className="grid gap-12.5 md:col-2 md:row-span-4 md:grid-cols-[auto_1fr_auto] md:grid-rows-subgrid">
          <button className="hidden size-20 place-items-center self-center rounded-full border border-white md:inline-grid">
            <ChevronLeft className="h-5" />
          </button>

          <ul className="grid gap-8 md:row-span-4 md:grid-cols-3 md:grid-rows-subgrid">
            {config.items.map((item, i) => (
              <li
                key={i}
                className="grid gap-2 md:row-span-4 md:grid-rows-subgrid"
              >
                <img
                  src={item.img}
                  alt=""
                  className="aspect-square w-full object-cover"
                />
                <h3 className="text-fluid-2xl font-semibold text-white">
                  {item.name}
                </h3>
                <h4 className="text-fluid-lg text-neutral-300">
                  {item.address}
                </h4>
                <div className="flex gap-4 text-fluid-base">
                  <div className="flex items-center gap-1">
                    <BedIcon className="text-teal-600" />
                    {item.beds} Beds
                  </div>
                  <div className="flex items-center gap-1">
                    <BathIcon className="text-teal-600" />
                    {item.baths} Baths
                  </div>
                  <div className="flex items-center gap-1">
                    <AreaIcon className="text-teal-600" />
                    {item.area} sqft.
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <button className="hidden size-20 place-items-center self-center rounded-full border border-white md:inline-grid">
            <ChevronRight className="h-5" />
          </button>
        </div>
      </div>

      <button className="button col-[main] md:justify-self-center text-fluid-2xl px-10 py-5">
        View All Properties
      </button>
    </div>
  )
}
