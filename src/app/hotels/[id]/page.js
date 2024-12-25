import Gallery from "@/components/hotel/details/Gallery";
import Overview from "@/components/hotel/details/Overview";
import Summary from "@/components/hotel/details/Summary";
import React from "react";

const page = () => {
  return (
    <div>
      <Summary />
      <Gallery />
      <Overview />
    </div>
  );
};

export default page;
