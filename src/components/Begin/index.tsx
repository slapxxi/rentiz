import decor3Image from '~/assets/decor-3.svg'
import decor4Image from '~/assets/decor-4.svg'

export const Begin = () => {
  return (
    <div className="z-10 col-[wide] my-10 grid grid-cols-subgrid gap-10">
      <div className="relative col-[main] grid min-h-[50vh] items-center gap-8 md:grid-cols-2 md:gap-0">
        <img
          src={decor3Image}
          alt=""
          className="absolute -z-1 translate-x-full -translate-y-full self-start justify-self-end"
        />
        <img
          src={decor4Image}
          alt=""
          className="absolute -z-1 -translate-x-3/4 translate-y-1/4 self-end mask-l-from-0"
        />

        <h2 className="max-w-130 pr-8 text-fluid-7xl font-semibold">
          Let’s Simply Begin with Rentiz.
        </h2>

        <div className="grid gap-6 max-w-prose">
          <p className="text-fluid-lg text-neutral-300">
            Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi augue
            justo. Nibh laoreet volutpat quis velit. Blandit aliquam donec sed
            morbi congue eget lorem viverra porta id lobortis.
          </p>
          <button className="button justify-self-start px-10 py-5 text-fluid-2xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}
