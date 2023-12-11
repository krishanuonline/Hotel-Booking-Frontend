import BookingForm from "./BookingForm";

export default function BookModal({ checkinDate, checkoutDate, price, roomId, onHandleModal }) {

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold uppercase text-stone-900">Book Room Now</h3>
              <h3 className="text-4xl cursor-pointer" onClick={onHandleModal}>&times;</h3>
            </div>

            <BookingForm checkinDate={checkinDate} checkoutDate={checkoutDate} price={price} roomId={roomId} onHandleModal={onHandleModal} />
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>

  );
}
