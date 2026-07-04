import pic4Image from '~/assets/pic-4.jpg'
import pic5Image from '~/assets/pic-5.jpg'

export const WeHelp = () => {
  return (
    <div className="col-[wide] my-10 grid grid-cols-subgrid gap-10 bg-darknavy-900 py-40">
      <div className="col-[main] grid gap-10 md:grid-cols-2">
        <div className="grid auto-rows-fr gap-4 md:grid-cols-2">
          <img
            src={pic4Image}
            alt=""
            className="aspect-7/11 w-full object-cover"
          />
          <img
            src={pic5Image}
            alt=""
            className="aspect-7/11 w-full object-cover"
          />
        </div>

        <div className="grid gap-6 self-center">
          <h2 className="text-fluid-5xl font-semibold text-white">
            We help people find homes
          </h2>
          <p className="text-fluid-lg text-neutral-300">
            Mauris orci donec blandit maecenas. Orci lorem purus porttitor massa
            consectetur. Neque, vestibulum sed varius magna et at. Eu,
            adipiscing morbi augue justo. Nibh laoreet volutpat quis velit.
            Blandit aliquam donec sed morbi congue eget lorem viverra porta id
            lobortis.
          </p>
          <button className="button px-10 py-5 text-fluid-2xl md:justify-self-start">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  )
}
