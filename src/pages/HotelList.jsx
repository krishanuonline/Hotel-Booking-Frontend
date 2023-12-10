import { useEffect, useState } from "react";
import HotelListCard from "../components/HotelListCard";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useParams } from "react-router-dom";

const HotelList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [rooms, setRooms] = useState();

  const { location } = useParams();

  useEffect(() => {
    getAllRooms();
  }, []);

  const getAllRooms = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${BASE_URL}/rooms/all-rooms/`);
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
      <div>filter</div>
      <div className="flex flex-col gap-4">
        {rooms.map((room) => (
          <HotelListCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
