import React from "react";
import Container from "../Container";

const Date = () => {
  return (
    <div>
      <Container>
        <div className="flex items-center justify-between rounded-lg shadow py-10 px-11 -mt-24 bg-white">
          <div>
            <h1 className="text-neutral-500 text-base font-normal text-center mb-6">
              Pick Up Date
            </h1>
            <input
              className="w-48 h-14 rounded-md border border-neutral-200 p-2"
              type="date"
              name=""
              id=""
            />
          </div>
          <div>
            <h1 className="text-neutral-500 text-base font-normal text-center mb-6">
              Dropping Date
            </h1>
            <input
              className="w-48 h-14 rounded-md border border-neutral-200 p-2"
              type="date"
              name=""
              id=""
            />
          </div>
          <div>
            <h1 className="text-neutral-500 text-base font-normal text-center mb-6">
              Pick Up Location
            </h1>
            <select className="select select-ghost w-44 h-14 rounded-md border border-neutral-200">
              <option defaultValue={"Pick"}>
                Pick
              </option>
              <option>Svelte</option>
              <option>Vue</option>
              <option>React</option>
            </select>
          </div>
          <div>
            <h1 className="text-neutral-500 text-base font-normal text-center mb-6">
              Dropping Location
            </h1>
            <select className="select select-ghost w-44 h-14 rounded-md border border-neutral-200">
              <option defaultValue={"Drop"}>
                Drop
              </option>
              <option>Svelte</option>
              <option>Vue</option>
              <option>React</option>
            </select>
          </div>
          <button className="w-48 h-14 px-10 py-4 rounded-md border border-red-600 justify-start items-start gap-2.5 inline-flex hover:bg-red-600 hover:text-white group">
            <span className="text-red-600 text-base font-bold group-hover:text-white">
              Search a Car
            </span>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Date;
