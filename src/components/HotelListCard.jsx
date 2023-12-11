import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookModal from "./BookModal";

function HotelListCard({ room, checkinDate, checkoutDate }) {
  const {
    id,
    hotel_name,
    category,
    description,
    bed_type,
    image,
    location,
    price,
    room_type,
  } = room;

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handelModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="flex gap-2 border-2 items-center w-[60rem] relative">
      <div className="absolute top-0 left-0 bg-[#FF8A00] px-3 text-white">
        {category === "premium" && "Premium"}
      </div>
      <img
        src="/img/Banglore.png"
        alt="hotel image"
        className="object-cover h-[15rem] w-[15rem]"
      />
      <div className="w-1/2 flex flex-col gap-2">
        <h1 className="text-3xl font-bold">{hotel_name}</h1>
        <p className="text-lg">{description}</p>
        <div className="flex gap-2 items-center">
          <div className="p-2 text-center bg-[#D49B58] text-white uppercase">
            {room_type}
          </div>
          <div className="p-2 text-center bg-[#D49B58] text-white uppercase">
            {bed_type}
          </div>
          <div className="p-2 text-center bg-[#D49B58] text-white uppercase">
            {location}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="font-bold text-blue-500 text-3xl">₹{price}</div>
        <button className="bg-[#31A12E] text-white px-4 py-2 text-2xl font-bold"
          onClick={() => setIsModalOpen(true)}>
          Book Now
        </button>
      </div>
      {isModalOpen && <BookModal checkinDate={checkinDate} checkoutDate={checkoutDate} price={price} roomId={id} onHandleModal={handelModal} />}
    </div >
  );
}

export default HotelListCard;
