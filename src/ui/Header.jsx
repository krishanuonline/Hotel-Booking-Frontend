import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
            <section className="h-[20rem] bg-[#272CA5]">
                <header className="flex justify-between pt-5 px-8">
                    <div className="text-white font-bold">hotel-booking.in</div>
                    <nav className="flex gap-4">
                        <Link to='/register-hotel' className="px-10 py-2 bg-[#FF8A00] text-white font-semibold">Register Hotel</Link>
                        <Link to='/register' className="px-10 py-2 bg-white rounded-full font-semibold">Register</Link>
                        <Link to='/login' className="px-10 py-2 bg-white rounded-full font-semibold">Login</Link>
                    </nav>
                </header>
            </section>
        </>
    )
}