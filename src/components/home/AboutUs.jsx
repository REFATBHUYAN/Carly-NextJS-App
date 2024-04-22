import React from "react";
import Container from "../Container";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="relative py-32 overflow-hidden">
      <Container>
        <div className="md:flex items-center justify-center gap-10">
          <div className="w-full">
            <Image
              src="/Rectangle 7.png"
              alt="about us"
              width={588}
              height={500}
            />
            <Image
              className="-mt-32 -ml-24"
              src="/Group.svg"
              alt="icons"
              width={190}
              height={160}
            />
          </div>
          <div className="w-full space-y-5">
            <div className="flex items-center gap-4">
              <Image
                src="/Group 7.svg"
                className="pt-2"
                alt="icon"
                height={16}
                width={16}
              ></Image>
              <h3 className="text-red-600 text-base font-bold ml-4">
                About Us
              </h3>
            </div>
            <h1 className=" text-black text-5xl font-bold">
              More than 150+ special collection cars yes
            </h1>
            <p className=" text-zinc-700 text-base font-normal leading-7">
              Carly Rent a Car in Dhaka has become the top trade name in car
              rental services in Bangladesh. Zoom Rent a Car is popular in
              Bangladesh for quality service.{" "}
            </p>
            <button className="w-44 h-14  py-4 rounded-md border border-red-600 justify-center items-center gap-2.5 inline-flex hover:bg-red-600  group">
              <div className="text-red-600 text-start text-base font-bold group-hover:text-white">
                See All Cars
              </div>
            </button>
          </div>
        </div>
        
      </Container>
      <div className="absolute -right-20 top-8 w-36 h-36 bg-rose-200 rounded-full" />
    </div>
  );
};

export default AboutUs;
