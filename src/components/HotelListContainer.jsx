import useAllRooms from "../hooks/useAllRooms";
import HotelListCard from "./HotelListCard";

function HotelListContainer() {
  const { isLoading, error, rooms } = useAllRooms();

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  console.log(rooms);
  return (
    <div>
      {rooms.map((room) => (
        <HotelListCard key={room.id} room={room} />
      ))}
    </div>
  );
}

export default HotelListContainer;
