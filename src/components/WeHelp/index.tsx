import pic4Image from '~/assets/pic-4.jpg'
import pic5Image from '~/assets/pic-5.jpg'

export const WeHelp = () => {
  return (
    <div className="col-[wide] my-10 grid grid-cols-subgrid gap-10 bg-darknavy-900 py-40">
      <div className="col-[main] grid grid-cols-2 gap-10">
        <div className="grid grid-cols-2 gap-4">
          <img src={pic4Image} alt="" className="h-full object-cover" />
          <img src={pic5Image} alt="" className="h-full object-cover" />
        </div>

        <div className="grid gap-6 self-center">
          <h2 className="text-5xl font-semibold text-white">
            We help people find homes
          </h2>
          <p className="text-lg text-neutral-300">
            Mauris orci donec blandit maecenas. Orci lorem purus porttitor massa
            consectetur. Neque, vestibulum sed varius magna et at. Eu,
            adipiscing morbi augue justo. Nibh laoreet volutpat quis velit.
            Blandit aliquam donec sed morbi congue eget lorem viverra porta id
            lobortis.
          </p>
          <button className="button justify-self-start px-10 py-5 text-2xl">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  )
}
