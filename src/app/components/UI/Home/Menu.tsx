"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets";
import navItems from "@/constants/navItems";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex  font-Michroma  justify-between container py-5">
      <div className="w-10 z-50 h-10 rounded-full overflow-hidden relative">
        <Image
          className="object-cover hover:scale-125 duration-200 transition"
          src={assets.logo}
          alt="logo"
          height={64}
          width={64}
        />
      </div>

      <div className="flex z-50 lg:hidden">
        <button
          onClick={toggleMenu}
          type="button"
          className=" text-gray-200  hover:text-gray-400 focus:outline-none  focus:text-gray-400"
          aria-label="toggle menu"
        >
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      <ul
        className={`absolute lg:relative pt-20 p-10 lg:p-0 transition-all duration-300 ease-in-out  lg:flex gap-7  space-y-4 lg:space-y-0 inset-x-0  bg-black/90 lg:bg-transparent z-10  items-center text-gray-200  ${
          isOpen ? "top-0" : "-top-96 lg:top-0"
        }`}
      >
        {navItems.map((item, idx) => (
          <li
            key={idx}
            className="hover:shadow-2xl hover:shadow-[#56ccf2] duration-400 transition-colors  hover:text-[#56ccf2] nav-items"
          >
            <Link
              className="inline-flex items-center gap-2 text-[14px] "
              href={item.href}
            >
              <item.icon size={22} /> {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
