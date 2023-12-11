import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import RegisterHotel from "./pages/RegisterHotel";
import HotelList from "./pages/HotelList";
import { AuthProvider } from "./store/authContext";
import AddRoom from "./pages/AddRoom";
import BookingForm from "./components/BookingForm";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />

            <Route path="/register-hotel" element={<RegisterHotel />} />
            <Route path="/hotel-list/:location/:checkinDate/:checkoutDate" element={<HotelList />} />
            <Route path="/add-room" element={<AddRoom />} />

          </Route>
          <Route path="/register" element={<Register role='user' title='Register your account' />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
