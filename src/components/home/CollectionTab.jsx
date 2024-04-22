"use client";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import Container from "../Container";
import Image from "next/image";

const tabTitle = [
  {
    id: 1,
    title: "Popular",
  },
  {
    id: 2,
    title: "Large Car",
  },
  {
    id: 3,
    title: "Small Car",
  },
  {
    id: 4,
    title: "Exclusive Car",
  },
];

const carData = [
  {
    id: 1,
    img: "/Rectangle 37.png",
    title: "Lamborghini Huracan",
    price: 140,
    seat: 4,
  },
  {
    id: 2,
    img: "/Rectangle 28.png",
    title: "Mercedes-Benz GLS",
    price: 120,
    seat: 4,
  },
  {
    id: 3,
    img: "/Rectangle 38.png",
    title: "BMW 7 Series",
    price: 150,
    seat: 4,
  },
  {
    id: 4,
    img: "/Rectangle 32.png",
    title: "Lamborghini Huracan",
    price: 140,
    seat: 4,
  },
  {
    id: 5,
    img: "/Rectangle 34.png",
    title: "Mercedes-Benz GLS",
    price: 140,
    seat: 4,
  },
  {
    id: 6,
    img: "/Rectangle 36.png",
    title: "BMW 7 Series",
    price: 140,
    seat: 4,
  },
];

const CollectionTab = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="my-32">
      <Container>
        <Tabs>
          <TabList
            className={"tabs grid grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto"}
          >
            {tabTitle.map((tab) => (
              <Tab
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab tab-bordered w-full ${
                  activeTab === tab.id ? "tab-active font-semibold" : ""
                }`}
              >
                {tab.title}
              </Tab>
            ))}
            {/* <Tab className="tab tab-bordered w-full">Title 3</Tab>
            <Tab className="tab tab-bordered w-full">Title 4</Tab> */}
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
              {carData.map((car) => (
                <div key={car.id} className="w-full space-y-4 bg-white rounded-md shadow p-5 text-center ">
                  <Image
                    className="w-80 h-64 rounded-md mx-auto"
                    src={car.img}
                    alt="car img"
                    width={320}
                    height={256}
                  />
                  <h1 className="text-black text-xl font-bold leading-9">
                    {car.title}
                  </h1>
                  <div className="flex justify-between">
                    <div>
                      <span className="text-red-600 text-base font-bold leading-7">
                        ${" "}
                      </span>
                      <span className="text-black text-base font-bold leading-7">
                        {car.price}{" "}
                      </span>
                      <span className="text-zinc-700 text-base font-normal leading-7">
                        / Day
                      </span>
                    </div>
                    <p className="text-zinc-700 text-base font-normal">
                      {car.seat} Seater Cars
                    </p>
                  </div>
                  <button className="w-48 h-14 px-10 py-4 rounded-md border border-red-600  gap-2.5 inline-flex hover:bg-red-600 hover:text-white group">
                    <span className="text-red-600 text-base font-bold group-hover:text-white">
                      Booking Now
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
        </Tabs>
      </Container>
    </div>
  );
};

export default CollectionTab;
