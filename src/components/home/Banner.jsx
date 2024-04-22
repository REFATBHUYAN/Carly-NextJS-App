import React from "react";
import Container from "../Container";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-[#FFF8F8] pb-36">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center ">
          <div>
            <h1 className="mb-7">
              <span className="text-black text-7xl font-extrabold">
                Find a{" "}
              </span>
              <span className="text-red-600 text-7xl font-extrabold">Car</span>
            </h1>
            <div className="flex gap-1 items-start justify-center">
              <Image
                className="pt-1"
                src="/Group 6.svg"
                alt="icon"
                width={16}
                height={16}
              />
              <p className=" text-zinc-700 text-base font-normal font-['Poppins'] ">
                Allow us to guide you through the innovative stress free
                approach in finding your dream car.
              </p>
            </div>
            <div className="md:flex gap-10 items-center mt-12 hidden">
              <div className="w-48 h-14 px-6 py-4 bg-red-600 rounded-md justify-start items-start gap-2.5 inline-flex">
                <button className="text-white text-base font-bold mx-auto">
                  Booking Now
                </button>
              </div>
              <div>
                <button className="text-red-600 text-base font-bold underline underline-offset-2 decoration-2">
                  See All Cars
                </button>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/red-car-2022-09-16-09-15-30-utc(3) 1.png"
              alt="car"
              width={900}
              height={500}
            />
            <div className="flex gap-10 items-center mt-12 md:hidden">
              <div className="w-48 h-14 px-6 py-4 bg-red-600 rounded-md justify-start items-start gap-2.5 inline-flex">
                <button className="text-white text-base font-bold">
                  Booking Now
                </button>
              </div>
              <div>
                <button className="text-red-600 text-base font-bold underline underline-offset-2 decoration-2">
                  See All Cars
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
