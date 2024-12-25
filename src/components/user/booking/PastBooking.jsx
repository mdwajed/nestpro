import React from "react";

const PastBooking = () => {
  return (
    <div class="space-y-4">
      <h2 class="text-xl font-bold">🕛️ Past Bookings</h2>

      <div class="bg-[#ebf6e9] p-4 rounded-md">
        <div class="flex justify-between items-center ">
          <div>
            <h3 class="text-xl font-semibold">Effotel By Sayaji Jaipur</h3>
            <div class="text-sm text-gray-600 my-4">
              <p>Check In: 12/12/2021</p>
              <p>Check Out: 14/12/2021</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-right">$124</h3>
            <p class="text-sm text-gray-600">$62 per night x 2 days</p>
          </div>
        </div>
      </div>

      <div class="bg-[#ebf6e9] p-4 rounded-md">
        <div class="flex justify-between items-center">
          <div>
            <h3 class="text-xl font-semibold">Effotel By Sayaji Jaipur</h3>
            <div class="text-sm text-gray-600 my-4">
              <p>Check In: 12/12/2021</p>
              <p>Check Out: 14/12/2021</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-right">$124</h3>
            <p class="text-sm text-gray-600">$62 per night x 2 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastBooking;
