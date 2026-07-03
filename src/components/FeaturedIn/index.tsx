import config from './config'

export const FeaturedIn = () => {
  return (
    <div className="col-[main] my-10 grid gap-10">
      <h2 className="text-5xl font-semibold text-white">Featured In</h2>

      <ul className="flex items-center justify-between gap-4">
        {config.featuredIn.map((item, i) => (
          <li key={i} className="bg-darknavy/80 backdrop-blur-lg">
            <img src={item} alt="" />
          </li>
        ))}
      </ul>
    </div>
  )
}
