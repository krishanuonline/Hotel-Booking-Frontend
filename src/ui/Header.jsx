import { Link } from "react-router-dom";
import { useAuth } from "../store/authContext";
import { useState } from "react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, isLoading, logout } = useAuth();

  return (
    <header className="flex justify-between top-0 w-full py-5 px-8 h-16 bg-[#272CA5] items-center">
      <Link to="/" className="text-white font-bold">
        hotel-booking.in
      </Link>
      <nav className="flex gap-4 items-center">
        {!user && (
          <Link
            to="/register-hotel"
            className=" py-2 bg-[#FF8A00] text-white px-10 font-semibold"
          >
            Register Hotel
          </Link>
        )}
        {isLoading && "loading..."}
        {!isLoading && user ? (
          <div className="flex gap-3">
            <p className="text-white text-xl uppercase">{user.name}</p>
            <img
              src="/img/react.svg"
              alt=""
              className="h-6 w-6 cursor-pointer"
              onClick={() => setIsModalOpen(!isModalOpen)}
            />
            {isModalOpen && (
              <div className="right-5 mt-12 flex flex-col p-2 gap-2 bg-[#ffce96]" onClick={() => setIsModalOpen(false)}>
                {!isLoading && user.role === "user" && (
                  <Link to="/mybookings" className="uppercase font-semibold p-2 bg-[#FF8A00] text-white">My bookings</Link>
                )}
                {!isLoading && user.role === "owner" && (
                  <Link to="/add-room" className="uppercase font-semibold p-2 bg-[#FF8A00] text-white">Add Room</Link>
                )}
                <button onClick={() => logout()} className="uppercase font-semibold p-2 bg-[#FF8A00] text-white">Logout</button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link
              to="/register"
              className="py-2 bg-white rounded-full font-semibold px-10"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="px-10 py-2 bg-white rounded-full font-semibold"
            >
              Login
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
