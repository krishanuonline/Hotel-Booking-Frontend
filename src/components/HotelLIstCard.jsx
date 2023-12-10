import React from "react";

function HotelListCard({ hotel }) {
  return (
    <div className="flex gap-2 border-2 items-center w-[60rem] relative">
      <div className="absolute top-0 left-0 bg-[#FF8A00] px-3 text-white">
        Premium
      </div>
      <img
        src="/img/Banglore.png"
        alt="hotel image"
        className="object-cover h-[15rem] w-[15rem]"
      />
      <div className="w-1/2 flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Hotel Sun shine</h1>
        <p className="text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
          voluptatem repellat eligendi officiis? Voluptatum ratione cum
          similique repellendus harum deserunt sed error, totam consequuntur eos
          dolorum fuga fugiat perspiciatis saepe.
        </p>
        <div className="flex gap-2">
          <div className="p-2 w-20 text-center bg-[#D49B58] text-white">AC</div>
          <div className="p-2 w-20 text-center bg-[#D49B58] text-white">
            4 Bed
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="font-bold text-blue-500 text-3xl">$230</div>
        <button className="bg-[#31A12E] text-white px-4 py-2 text-2xl font-bold">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default HotelListCard;
