import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";

export default function useAllRooms() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [rooms, setRooms] = useState();

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

  return { isLoading, error, rooms };
}
