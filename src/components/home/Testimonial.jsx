import React from "react";
import Container from "../Container";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="bg-[#FFF8F8] py-28">
      <Container>
        <div>
          <div className="flex flex-col md:flex-row items-center justify-center  gap-4">
            <Image
              src="/Group 7.svg"
              className="pt-2"
              alt="icon"
              height={16}
              width={16}
            ></Image>
            <h3 className="text-red-600 text-base font-bold ml-2 mt-2">
              Our Testimonial
            </h3>
          </div>
          <h1 className="text-black text-5xl font-bold text-center my-3">
            What clients say
          </h1>
          <p className=" text-base font-normal leading-7 text-center">
            Allow us to guide you through the innovative stress free
          </p>
          <div className="flex gap-16 my-36">
            <div className="relative w-[560px] h-[320px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="628"
                height="378"
                viewBox="0 0 628 378"
                fill="none"
                className="absolute"
              >
                <g filter="url(#filter0_d_0_5160)">
                  <path
                    d="M26.5 141.016C26.5 134.614 31.065 129.123 37.3589 127.953L577.786 27.5217C585.957 26.0033 593.5 32.274 593.5 40.5845V329.454C593.5 336.792 587.552 342.741 580.214 342.741H39.7864C32.4485 342.741 26.5 336.792 26.5 329.454V141.016Z"
                    stroke="#FE5355"
                    shape-rendering="crispEdges"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_0_5160"
                    x="0"
                    y="0.793945"
                    width="628"
                    height="376.447"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="4" dy="4" />
                    <feGaussianBlur stdDeviation="15" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_0_5160"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_0_5160"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div className="flex flex-col items-center mx-auto">
                <div className="ml-52 z-10 relative">
                  <Image
                    src="/Ellipse 25.svg"
                    className="w-36 h-36 rounded-full  bg-red-100 "
                    alt="icon"
                    height={75}
                    width={75}
                  ></Image>
                  <Image
                    src="/”.svg"
                    className="p-2 rounded-full  bg-rose-500 absolute bottom-0 right-0"
                    alt="icon"
                    height={40}
                    width={40}
                  ></Image>
                </div>
                <h1 className=" text-center text-black text-xl font-semibold">
                  Richard H. Vo
                </h1>
                <p className="w-80 my-4 text-center text-zinc-700 text-base font-normal">
                  “There are many variations of lorem ipsum available, but the
                  have suffered alteration in some form by humour.”
                </p>
                <div className="flex gap-1">
                  <Image
                    src="/Star 1.svg"
                    className="w-4 h-4"
                    alt="icon"
                    height={75}
                    width={75}
                  ></Image>
                  <Image
                    src="/Star 1.svg"
                    className="w-4 h-4"
                    alt="icon"
                    height={75}
                    width={75}
                  ></Image>
                  <Image
                    src="/Star 1.svg"
                    className="w-4 h-4"
                    alt="icon"
                    height={75}
                    width={75}
                  ></Image>
                  <Image
                    src="/Star 1.svg"
                    className="w-4 h-4"
                    alt="icon"
                    height={75}
                    width={75}
                  ></Image>
                  <Image
                    src="/Star 1.svg"
                    className="w-4 h-4"
                    alt="icon"
                    height={75}
                    width={75}
                  ></Image>
                </div>
              </div>
            </div>
            <div className="relative w-[560px] h-[320px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="628"
                height="378"
                viewBox="0 0 628 378"
                fill="none"
                className="absolute"
              >
                <g filter="url(#filter0_d_0_5160)">
                  <path
                    d="M26.5 141.016C26.5 134.614 31.065 129.123 37.3589 127.953L577.786 27.5217C585.957 26.0033 593.5 32.274 593.5 40.5845V329.454C593.5 336.792 587.552 342.741 580.214 342.741H39.7864C32.4485 342.741 26.5 336.792 26.5 329.454V141.016Z"
                    stroke="#FE5355"
                    shape-rendering="crispEdges"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_0_5160"
                    x="0"
                    y="0.793945"
                    width="628"
                    height="376.447"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="4" dy="4" />
                    <feGaussianBlur stdDeviation="15" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_0_5160"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_0_5160"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div className="flex flex-col items-center mx-auto">
                <div className="ml-52 z-10 relative">
                  <Image
                    src="/Ellipse 26.svg"
                    className="w-36 h-36 rounded-full  bg-red-100 "
                    alt="icon"
                    height={75}
                    width={75}
                  ></Image>
                  <Image
                    src="/”.svg"
                    className="p-2 rounded-full  bg-rose-500 absolute bottom-0 right-0"
                    alt="icon"
                    height={40}
                    width={40}
                  ></Image>
                </div>
                <h1 className=" text-center text-black text-xl font-semibold">
                  Deborah E. Levin
                </h1>
                <p className="w-80 my-4 text-center text-zinc-700 text-base font-normal">
                  “There are many variations of lorem ipsum available, but the
                  have suffered alteration in some form by humour.”
                </p>
                <div className="flex gap-1">
                  <Image
                    src="/Star 1.svg"
                    className="w-4 h-4"
                    alt="icon"
                    height={75}
                    width={75}
                  ></Image>
                  <Image
                    src="/Star 1.svg"
                    className="w-4 h-4"
                    alt="icon"
                    height={75}
                    width={75}
                  ></Image>
                  <Image
                    src="/Star 1.svg"
                    className="w-4 h-4"
                    alt="icon"
                    height={75}
                    width={75}
                  ></Image>
                  <Image
                    src="/Star 1.svg"
                    className="w-4 h-4"
                    alt="icon"
                    height={75}
                    width={75}
                  ></Image>
                  <Image
                    src="/Star 5.svg"
                    className="w-4 h-4"
                    alt="icon"
                    height={75}
                    width={75}
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
