import React from "react";
import Container from "../Container";
import Image from "next/image";
import CustomerStisfactions from "./CustomerStisfactions";

const OurServices = () => {
  return (
    <div
      className="relative bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/Rectangle 8.png')" }}
    >
      <Container>
        <div className="h-[562px] py-[120px] relative">
          <div className="flex items-center justify-center  gap-4">
            <Image
              src="/Group 7.svg"
              className="pt-2"
              alt="icon"
              height={16}
              width={16}
            ></Image>
            <h3 className="text-red-600 text-base font-bold ml-2 mt-2">
              About Us
            </h3>
          </div>
          <div className="text-white text-5xl font-bold text-center my-3">
            We have best service for the rent cars
          </div>
          <div className="text-white text-base font-normal leading-7 text-center">
            Allow us to guide you through the innovative stress free
          </div>
        </div>
      </Container>
      <Image
        src="/Group (6).svg"
        className="pt-2 absolute top-9 right-9"
        alt="icon"
        height={75}
        width={75}
      ></Image>
      {/* <CustomerStisfactions></CustomerStisfactions> */}
    </div>
  );
};

export default OurServices;
