import { useEffect, useState } from "react";
import HotelListCard from "../components/HotelListCard";
import axios from "axios";
import { BASE_URL } from "../utils/constant";

function AdminHotelList({ userId }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [rooms, setRooms] = useState();

  let url = `${BASE_URL}/rooms/get-owner-rooms/${userId}`

  useEffect(() => {
    getAllRooms();
  }, []);

  const getAllRooms = async () => {
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
    <div className="mt-10 flex justify-center">
      <div className="flex flex-col gap-6">
        {rooms.map((room) => (
          <HotelListCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}

export default AdminHotelList