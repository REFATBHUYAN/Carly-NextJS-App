"use client"
import React from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const nav = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Cars",
    href: "#",
  },
  {
    title: "Booking",
    href: "/#",
  },
  {
    title: "Contact Us",
    href: "/#",
  },
];

const Navbar = () => {
  const pathname = usePathname();
    
  const navLinks = (
    <>
      {nav.map((n, i) => (
        <li className={`${pathname === n.href ? 'text-red-600 font-bold' : 'hover:text-red-600 font-medium flex flex-col text-center justify-center'}`} key={i}>
          <Link href={n.href}>{n.title}</Link>
          <div className={`${pathname === n.href ? 'w-4 h-px border-2 mx-auto border-red-600' : ''}`}></div>
        </li>
      ))}
    </>
  );
  return (
    <div className='bg-[#FFF8F8] py-5'>
      <Container>
        <div className="navbar bg-transparent">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <ul className="gap-5 px-1 hidden md:flex">
              {navLinks}
            </ul>
            <Link href={"/"} className=" normal-case text-xl block md:hidden">
              <Image src="/Symbol_1_.svg" alt="title" height={40} width={80} />
              <span className="font-bold italic">CARLY</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <Link href={"/"} className=" normal-case text-xl">
              <Image src="/Symbol_1_.svg" alt="title" height={40} width={80} />
              <span className="font-bold italic">CARLY</span>
            </Link>
          </div>
          <div className="navbar-end">
            <Link href={"/"} className="">
              <Image
                className="rounded-full"
                src="/Ellipse 1.svg"
                alt="title"
                height={40}
                width={40}
              />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
