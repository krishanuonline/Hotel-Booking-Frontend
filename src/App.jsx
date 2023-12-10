import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./ui/AppLayout"
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import RegisterHotel from './pages/RegisterHotel'
import HotelList from './pages/HotelList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout/>}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register-hotel" element={<RegisterHotel />} />
          <Route path="/hotel-list" element={<HotelList />} />
        </Route>

      </Routes>
    </BrowserRouter>

  )
}

export default App
