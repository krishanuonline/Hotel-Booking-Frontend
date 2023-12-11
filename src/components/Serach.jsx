import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Serach() {
  const navigate = useNavigate();
  const [location, setLocation] = useState('kolkata')
  const date = new Date(Date.now());
  const [checkinDate, setCheckinDate] = useState(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
  const [checkoutDate, setCheckoutDate] = useState(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + 1}`)

  return (
    <div className="flex gap-2 mt-14 justify-center text-center">
      <select name="" id="" className="px-24 py-3 border-2 border-[#3E3E3E]" value={location} onChange={(e) => setLocation(e.target.value)}>
        <option value="kolkata">Kolkata</option>
        <option value="delhi">Delhi</option>
        <option value="bangalore">Banglore</option>
      </select>
      <input
        type="date"
        name="start-date"
        className="px-20 py-3 border-2 border-[#3E3E3E]"
        value={checkinDate}
        onChange={(e) => setCheckinDate(e.target.value)}
      />
      <input
        type="date"
        name="end-date"
        className="px-20 py-3 border-2 border-[#3E3E3E]"
        value={checkoutDate}
        onChange={(e) => setCheckoutDate(e.target.value)}
      />
      <button
        onClick={() => navigate(`/hotel-list/${location}/${checkinDate}/${checkoutDate}`)}
        className="text-white bg-[#5C62F0] border-2 border-[#3E3E3E] px-5 py-3 font-bold"
      >
        Search
      </button>
    </div>
  );
}

export default Serach;
