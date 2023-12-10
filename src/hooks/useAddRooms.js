import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";

export default function useAddRoom(formData) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    addRoom();
  }, []);

  const addRoom = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/rooms/add-room`, formData);
      if (res.data.status !== true) throw new Error(res.data.message);
      setIsSubmitted(true);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return { isLoading, error, isSubmitted };
}
