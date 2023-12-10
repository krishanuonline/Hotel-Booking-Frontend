import Serach from "./Serach";

function Banner() {
  return (
    <section className="h-[20rem] bg-[#272CA5] px-8 py-5">
      <div className="text-white mt-28">
        <h1 className="font-bold text-5xl">
          Premium Hotels at Reasonable Price
        </h1>
        <p className="text-3xl mt-4">Book your next Destination</p>
      </div>
      <Serach />

      <div className="mt-5 flex justify-center">
        <div className="max-w-xs mr-5 bg-[url('/img/Banglore.png')] bg-cover bg-no-repeat w-80">
          <a href="#">Kolkata</a>
        </div>
        <div className="max-w-xs mr-5 bg-[url('/img/Banglore.png')] bg-cover bg-no-repeat w-80">
          <a href="#"></a>
        </div>
        <div className="max-w-xs ">
          <a href="#">
            <img className="rounded-t-md" src="/img/Banglore.png" alt="image" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
