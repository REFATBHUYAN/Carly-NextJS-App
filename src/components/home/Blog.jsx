import React from "react";
import Container from "../Container";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="pt-32">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center  gap-4">
          <Image
            src="/Group 7.svg"
            className="pt-2"
            alt="icon"
            height={16}
            width={16}
          ></Image>
          <h3 className="text-red-600 text-base font-bold ml-2 mt-2">
            Our Blog
          </h3>
        </div>
        <h1 className="text-black text-5xl font-bold text-center my-3">
          Latest news
        </h1>
        <p className=" text-base font-normal leading-7 text-center">
          Allow us to guide you through the innovative stress free
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-32">
          <div className="w-full rounded-md border border-zinc-300 relative">
            <Image
              src="/Group 29.svg"
              className=" absolute top-0 right-5"
              alt="icon"
              height={84}
              width={100}
            ></Image>
            <Image
              src="/Ellipse 118.svg"
              className=" absolute left-4 top-44"
              alt="icon"
              height={60}
              width={60}
            ></Image>
            <Image
              src="/Rectangle 64.png"
              className="w-full"
              alt="icon"
              height={384}
              width={284}
            ></Image>
            <div className="w-14 absolute top-1 right-10 text-center text-white text-base font-bold leading-7">
              15 Nov 2021
            </div>
            <div className="p-4">
              <h1 className="w-80 text-black text-xl font-bold leading-9">
                10 Reasons People Fail Their
              </h1>
              <p className="w-80 my-4 text-zinc-700 text-base font-normal leading-7">
                Apparently we had reached a great height in the atmosphere, for
                the sky was dead black
              </p>
              <div>
                <button className="hover:text-red-600 text-base font-normal leading-7 underline">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="w-full rounded-md border border-zinc-300 relative">
            <Image
              src="/Group 29.svg"
              className=" absolute top-0 right-5"
              alt="icon"
              height={84}
              width={100}
            ></Image>
            <Image
              src="/Ellipse 121.svg"
              className=" absolute left-4 top-44"
              alt="icon"
              height={60}
              width={60}
            ></Image>
            <Image
              src="/Rectangle 70.png"
              className="w-full"
              alt="icon"
              height={384}
              width={284}
            ></Image>
            <div className="w-14 absolute top-1 right-10 text-center text-white text-base font-bold leading-7">
              15 Nov 2021
            </div>
            <div className="p-4">
              <h1 className="w-80 text-black text-xl font-bold leading-9">
                10 Reasons People Fail Their
              </h1>
              <p className="w-80 my-4 text-zinc-700 text-base font-normal leading-7">
                Apparently we had reached a great height in the atmosphere, for
                the sky was dead black
              </p>
              <div>
                <button className="hover:text-red-600 text-base font-normal leading-7 underline">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="w-full rounded-md border border-zinc-300 relative">
            <Image
              src="/Group 29.svg"
              className=" absolute top-0 right-5"
              alt="icon"
              height={84}
              width={100}
            ></Image>
            <Image
              src="/Ellipse 120.svg"
              className=" absolute left-4 top-44"
              alt="icon"
              height={60}
              width={60}
            ></Image>
            <Image
              src="/Rectangle 68.png"
              className="w-full"
              alt="icon"
              height={384}
              width={284}
            ></Image>
            <div className="w-14 absolute top-1 right-10 text-center text-white text-base font-bold leading-7">
              15 Nov 2021
            </div>
            <div className="p-4">
              <h1 className="w-80 text-black text-xl font-bold leading-9">
                10 Reasons People Fail Their
              </h1>
              <p className="w-80 my-4 text-zinc-700 text-base font-normal leading-7">
                Apparently we had reached a great height in the atmosphere, for
                the sky was dead black
              </p>
              <div>
                <button className="hover:text-red-600 text-base font-normal leading-7 underline">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
