import { useEffect, useState } from "react";
import HotelListCard from "../components/HotelListCard";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import FilterComponent from "../components/FilterComponent";

const HotelList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [rooms, setRooms] = useState();

  const [premium, setPremium] = useState(false)
  const [single, setSingle] = useState(false)
  const [double, setDouble] = useState(false)
  const [ac, setAc] = useState(false)
  const [nonAc, setNonAc] = useState(false)


  const changePremium = () => {
    setPremium(pre => !pre)
  };

  const changeSingle = () => {
    setSingle(pre => !pre)
  }

  const changeDouble = () => {
    setDouble(pre => !pre)
  }

  const changeAc = () => {
    setAc(pre => !pre)
  }

  const changeNonAc = () => {
    setNonAc(pre => !pre)
  }

  const { location, checkinDate, checkoutDate } = useParams();
  let url = `${BASE_URL}/rooms/all-rooms/?`

  if (location) {
    url += `location=${location}`
  }

  if (premium) url += `&category=premium`
  if (single) url += `&bed_type=single`
  if (double) url += `&bed_type=double`
  if (ac) url += `&room_type=ac`
  if (nonAc) url += `&room_type=non-ac`

  useEffect(() => {
    getAllRooms();
  }, [premium, single, double, ac, nonAc]);

  const getAllRooms = async () => {
    console.log(url)
    try {
      setIsLoading(true);
      const res = await axios.get(url);
      setRooms(res.data.rooms);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsLoading(false);
    }
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div className="mt-10 flex justify-around">
      <FilterComponent premium={premium} single={single} double={double} ac={ac} nonAc={nonAc} changeSingle={changeSingle} changePremium={changePremium} changeDouble={changeDouble} changeAc={changeAc} changeNonAc={changeNonAc} />
      <div className="flex flex-col gap-6">
        {rooms.map((room) => (
          <HotelListCard key={room.id} room={room} checkinDate={checkinDate} checkoutDate={checkoutDate} />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
