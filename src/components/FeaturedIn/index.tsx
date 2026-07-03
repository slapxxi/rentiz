import config from './config'

export const FeaturedIn = () => {
  return (
    <div className="col-[main] grid gap-10 my-10">
      <h2 className="text-white text-5xl font-semibold">Featured In</h2>

      <ul className="flex gap-4 justify-between">
        {config.featuredIn.map((item, i) => (
          <li key={i}>
            <img src={item} alt="" />
          </li>
        ))}
      </ul>
    </div>
  )
}
