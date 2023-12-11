import { useEffect, useState } from "react";
import HotelListCard from "../components/HotelListCard";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/authContext";

function MyBooking({ userId }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [rooms, setRooms] = useState();

  const { user } = useAuth();

  useEffect(() => {
    getAllRooms();
  }, []);

  let url = `${BASE_URL}/booking/my-booking/${user.id}`
  const getAllRooms = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(url);
      setRooms(res.data.data.bookedRoom);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsLoading(false);
    }
  };
  console.log(rooms)

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div>
      <div className="mt-10 flex justify-center">
        {rooms ? <div className="flex flex-col gap-6">
          {rooms.map((room) => (
            <HotelListCard key={room.id} room={room.Room} />
          ))}
        </div>
          :
          <div className="text-center">
            No Booking found
          </div>}
      </div>
    </div>
  )
}

export default MyBooking