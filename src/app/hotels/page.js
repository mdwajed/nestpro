import HotelList from "@/components/hotel/HotelList";
import Filter from "@/components/share/Filter";
import Search from "@/components/share/Search";
import React from "react";

const HotelListPage = () => {
  return (
    <div>
      <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]">
        <div class="container items-center py-12 ">
          <Search fromList={true} />
        </div>
      </section>
      <section className="py-12">
        <div className="container grid grid-cols-12">
          <Filter />
          <HotelList />
        </div>
      </section>
    </div>
  );
};

export default HotelListPage;
