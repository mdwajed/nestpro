import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase">
        <Image
          src="/1.png"
          width={400}
          height={400}
          className="h-[400px] w-full"
          alt=""
        />

        <div className="grid grid-cols-2 grid-rows-2 h-[400px] ">
          <Image
            src="/2.png"
            alt=""
            width={200}
            height={200}
            className="h-[200px] w-full"
          />
          <Image
            src="/3.png"
            alt=""
            width={200}
            height={200}
            className="h-[200px] w-full"
          />
          <Image
            src="/4.png"
            alt=""
            width={200}
            height={200}
            className="h-[200px] w-full"
          />
          <Image
            src="/5.png"
            alt=""
            width={200}
            height={200}
            className="h-[200px] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
