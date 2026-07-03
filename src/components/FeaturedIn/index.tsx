import config from './config'

export const FeaturedIn = () => {
  return (
    <div className="col-[main] my-10 grid gap-10">
      <h2 className="text-5xl font-semibold text-white">Featured In</h2>

      <ul className="grid grid-cols-[repeat(auto-fit,min(100%,180px))] justify-between items-center gap-8">
        {config.featuredIn.map((item, i) => (
          <li key={i} className="bg-darknavy/80 backdrop-blur-lg">
            <img src={item} alt="" className="w-full" />
          </li>
        ))}
      </ul>
    </div>
  )
}
