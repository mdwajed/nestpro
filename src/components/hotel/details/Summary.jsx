import React from "react";
import HotelSummaryInfo from "../HotelSummaryInfo";

const Summary = () => {
  return (
    <section class="py-4 mt-[100px] ">
      <div class="flex container">
        <HotelSummaryInfo />
        {/* <div class="flex-1 container">
        <h2 class="font-bold text-2xl">Effotel By Sayaji Jaipur</h2>
        <p>📍 Kolkata</p>
        <div class="flex gap-2 items-center my-4">
          <div class="bg-primary w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold">
            5.3
          </div>
          <span class="font-medium">Very Good</span>
          <span>232 Reviews</span>
        </div>
      </div>
      <div class="flex flex-col gap-2 items-end justify-center">
        <h2 class="text-2xl font-bold text-right">$124/night</h2>
        <p class=" text-right">Per Night for 4 Rooms</p>
        <button class="btn-primary ">Book Now</button>
      </div> */}
      </div>
    </section>
  );
};

export default Summary;
