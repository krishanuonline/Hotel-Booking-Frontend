const FilterComponent = () => {
  return (
    <div >

      {/* <className="bg-white flex flex-col pl-10 pr-20 pt-3.5 pb-12 border-[3px] border-solid border-zinc-300 items-start"> */}
      <header className="justify-center text-neutral-700 text-center text-3xl font-bold whitespace-nowrap ml-2.5">
        Filter
      </header>
      <div className="flex items-stretch gap-2.5 mt-14">
        <p
          className="justify-center text-neutral-700 text-2xl font-bold self-center grow whitespace-nowrap my-auto"
        >
          Premium
          <input type="checkbox" name="premium" id="" />
        </p>
      </div>
      <div className="flex items-stretch gap-2.5 mt-14">
        <p
          className="justify-center text-neutral-700 text-2xl font-bold self-center grow whitespace-nowrap my-auto"
        >
          2-Bed
          <input type="checkbox" name="2" id="" />
        </p>
      </div>
      <div className="flex items-stretch gap-2.5 mt-14">
        <p
          className="justify-center text-neutral-700 text-2xl font-bold self-center grow whitespace-nowrap my-auto"
        >
          4-Bed
          <input type="checkbox" name="4" id="" />
        </p>
      </div>
      <div className="flex items-stretch gap-2.5 mt-14">
        <p
          className="justify-center text-neutral-700 text-2xl font-bold self-center grow whitespace-nowrap my-auto"
        >
          AC
          <input type="checkbox" name="ac" id="" />
        </p>
      </div>
      <div className="flex items-stretch gap-2.5 mt-14">
        <p
          className="justify-center text-neutral-700 text-2xl font-bold self-center grow whitespace-nowrap my-auto"
        >
          Non-AC
          <input type="checkbox" name="non_ac" id="" />
        </p>
      </div>

      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5b6f81d018d45842753660cf6d66a4c1415b43842b8371897fac5c32d4244efe?apiKey=c4cba66cefae4e30bbaa229fca28ec46&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b6f81d018d45842753660cf6d66a4c1415b43842b8371897fac5c32d4244efe?apiKey=c4cba66cefae4e30bbaa229fca28ec46&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b6f81d018d45842753660cf6d66a4c1415b43842b8371897fac5c32d4244efe?apiKey=c4cba66cefae4e30bbaa229fca28ec46&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b6f81d018d45842753660cf6d66a4c1415b43842b8371897fac5c32d4244efe?apiKey=c4cba66cefae4e30bbaa229fca28ec46&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b6f81d018d45842753660cf6d66a4c1415b43842b8371897fac5c32d4244efe?apiKey=c4cba66cefae4e30bbaa229fca28ec46&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b6f81d018d45842753660cf6d66a4c1415b43842b8371897fac5c32d4244efe?apiKey=c4cba66cefae4e30bbaa229fca28ec46&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b6f81d018d45842753660cf6d66a4c1415b43842b8371897fac5c32d4244efe?apiKey=c4cba66cefae4e30bbaa229fca28ec46&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b6f81d018d45842753660cf6d66a4c1415b43842b8371897fac5c32d4244efe?apiKey=c4cba66cefae4e30bbaa229fca28ec46&" className="aspect-[1.04] object-contain object-center w-[29px] overflow-hidden shrink-0 max-w-full"
        alt="Non AC"
      />
      <a
        href="#"
        className="justify-center text-neutral-700 text-2xl font-bold my-auto"
      >
        Non AC
      </a>
    </div>

  )
}

export default FilterComponent


