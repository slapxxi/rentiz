import ChevronLeft from '~/assets/chevron-left.svg?react'
import ChevronRight from '~/assets/chevron-right.svg?react'
import patternImage from '~/assets/geo-pattern.png'
import BedIcon from '~/assets/bed.svg?react'
import BathIcon from '~/assets/bath.svg?react'
import AreaIcon from '~/assets/area.svg?react'
import config from './config'

export const Properties = () => {
  return (
    <div
      className={`col-[wide] grid grid-cols-subgrid my-10 gap-y-12 bg-[url(${patternImage})]`}
    >
      <div className="col-[main]">
        <h2 className="text-5xl font-semibold">Popular Residence</h2>
      </div>

      <div className="col-[wide] grid grid-cols-[1fr_minmax(auto,1680px)_1fr] gap-4">
        <div className="col-2 grid grid-cols-[auto_1fr_auto] items-center gap-12.5">
          <button className="border border-white rounded-full size-20 inline-grid place-items-center">
            <ChevronLeft className="w-8" />
          </button>

          <ul className="grid grid-cols-3 gap-8">
            {config.items.map((item, i) => (
              <li key={i} className="grid gap-2">
                <img
                  src={item.img}
                  alt=""
                  className="w-full aspect-square object-cover"
                />
                <h3 className="font-semibold text-white text-2xl">
                  {item.name}
                </h3>
                <h4 className="text-neutral-300 text-lg">{item.address}</h4>
                <div className="flex gap-4 justify-between">
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

          <button className="border border-white rounded-full size-20 inline-grid place-items-center">
            <ChevronRight className="w-8" />
          </button>
        </div>
      </div>
    </div>
  )
}
