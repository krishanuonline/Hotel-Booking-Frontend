import { useNavigate } from "react-router-dom";

function Serach() {
  const navigate = useNavigate();
  return (
    <div className="flex gap-2 mt-14 justify-center text-center">
      <select name="" id="" className="px-24 py-3 border-2 border-[#3E3E3E]">
        <option value="">Kolkata</option>
        <option value="">Delhi</option>
        <option value="">Banglore</option>
      </select>
      <input
        type="date"
        name="start-date"
        className="px-20 py-3 border-2 border-[#3E3E3E]"
      />
      <input
        type="date"
        name="end-date"
        className="px-20 py-3 border-2 border-[#3E3E3E]"
      />
      <button
        onClick={() => navigate(`/hotel-list/kolkata`)}
        className="text-white bg-[#5C62F0] border-2 border-[#3E3E3E] px-5 py-3 font-bold"
      >
        Search
      </button>
    </div>
  );
}

export default Serach;
