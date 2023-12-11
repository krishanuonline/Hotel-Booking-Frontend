import Banner from "../components/Banner";
import { useAuth } from "../store/authContext";
import AdminHotelList from "./AdminHotelList";

export default function Home() {
  const { user } = useAuth();

  if (user && user.role === 'owner')
    return <AdminHotelList userId={user.id} />

  return <Banner />
}
