import decorImage from '~/assets/decor-2.svg'
import QuoteIcon from '~/assets/quote.svg?react'
import ChevronLeft from '~/assets/chevron-left.svg?react'
import ChevronRight from '~/assets/chevron-right.svg?react'
import config from './config'

export const WhyUs = () => {
  return (
    <div className="col-[wide] grid grid-cols-subgrid overflow-hidden">
      <div className="relative col-[main] my-10 grid gap-15">
        <img
          src={decorImage}
          alt=""
          className="absolute -translate-x-3/4 self-center mask-l-from-0"
        />

        <h2 className="text-center text-5xl font-semibold">Why Choose Us</h2>

        <ul className="grid md:grid-cols-[repeat(3,fit-content(380px))] justify-evenly gap-10">
          {config.why.map((item, i) => (
            <li key={i} className="grid justify-items-center gap-7 text-center">
              <div className="grid aspect-square size-40 place-items-center rounded-full bg-teal-600/15">
                <img src={item.img} alt="" className="size-18" />
              </div>
              <h3 className="text-2xl">{item.title}</h3>
              <p className="text-lg text-neutral-300">{item.text}</p>
            </li>
          ))}
        </ul>

        <div className="grid min-h-[50vh] max-w-250 grid-cols-2 content-center items-center gap-10 justify-self-center">
          <QuoteIcon className="text-teal-600" />
          <p className="col-span-full text-3xl">
            Massa semper non rutrum orci facilisi sit. Lectus porta quam a
            fringilla eget viverra sem. Vulputate massa hendrerit turpis gravida
            tempor, porttitor.
          </p>
          <div>
            <div className="text-2xl font-semibold">Elena Pravo</div>
            <div className="text-lg text-neutral-300">Ceo, Upstate</div>
          </div>
          <div className="col-2 flex gap-8 justify-self-end">
            <ChevronLeft className="my-2 h-10 text-gray-500" />
            <div className="w-px bg-gray-700" />
            <ChevronRight className="my-2 h-10" />
          </div>
        </div>
      </div>
    </div>
  )
}
