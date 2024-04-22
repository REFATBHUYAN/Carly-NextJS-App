import React from "react";
import Container from "../Container";
import Image from "next/image";

const CustomerStisfactions = () => {
  return (
    <div className="-mt-44 z-50 relative w-full">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          <div className="w-full md:w-96 h-96 bg-white rounded-md shadow flex flex-col justify-center items-center">
            <Image
              className="w-14 h-14 p-2 bg-violet-100 rounded-md"
              src="/Used.svg"
              alt="used icon"
              height={24}
              width={24}
            ></Image>
            <h2 className="text-black text-2xl font-bold mt-11 mb-6">
              Customer Satisfaction
            </h2>
            <p className="w-72 text-center text-zinc-700 text-base font-normal leading-7">
              Carly Rent a Car in Dhaka has become the top trade name in car
              rental services in Bangladesh.
            </p>
          </div>
          <div className="w-full md:w-96 h-96 bg-white rounded-md shadow flex flex-col justify-center items-center">
            <Image
              className="w-14 h-14 p-2 bg-orange-300 rounded-md"
              src="/Speed.svg"
              alt="used icon"
              height={24}
              width={24}
            ></Image>
            <h2 className="text-black text-2xl font-bold mt-11 mb-6">
            Faster Bookings
            </h2>
            <p className="w-72 text-center text-zinc-700 text-base font-normal leading-7">
            Carly Rent a Car in Dhaka has become the top trade name in car rental services in Bangladesh
            </p>
          </div>
          <div className="w-full md:w-96 h-96 bg-white rounded-md shadow flex flex-col justify-center items-center">
            <Image
              className="w-14 h-14 p-2 bg-rose-100 rounded-md"
              src="/map-marker.svg"
              alt="used icon"
              height={24}
              width={24}
            ></Image>
            <h2 className="text-black text-2xl font-bold mt-11 mb-6">
            Any Pickup Location
            </h2>
            <p className="w-72 text-center text-zinc-700 text-base font-normal leading-7">
            Carly Rent a Car in Dhaka has become the top trade name in car rental services in Bangladesh
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CustomerStisfactions;
