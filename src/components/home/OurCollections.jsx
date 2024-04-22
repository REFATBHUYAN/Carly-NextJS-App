import React from "react";
import Container from "../Container";
import Image from "next/image";
import CollectionTab from "./CollectionTab";

const OurCollections = () => {
  return (
    <div className="my-28">
      <Container>
        <div className="">
          <div className="flex items-center justify-center  gap-4">
            <Image
              src="/Group 7.svg"
              className="pt-2"
              alt="icon"
              height={16}
              width={16}
            ></Image>
            <h3 className="text-red-600 text-base font-bold ml-2 mt-2">
              Our Collection
            </h3>
          </div>
          <h1 className="text-black text-5xl font-bold text-center my-3">
            Our collection cars
          </h1>
          <p className=" text-base font-normal leading-7 text-center">
            Allow us to guide you through the innovative stress free
          </p>
          <CollectionTab></CollectionTab>
          <div className="text-center">
            <button className="w-48 h-14 px-10 py-4 rounded-md border border-red-600  gap-2.5 inline-flex hover:bg-red-600 hover:text-white group">
              <span className="text-red-600 text-base font-bold group-hover:text-white">
              See All Cars
              </span>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurCollections;
