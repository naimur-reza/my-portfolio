"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLink, FaDatabase } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

const Modal = ({
  showModal,
  setShowModal,
  name,
  type,
  techIcons,
  description,
  server_link,
  client_link,
  live_link,
  image,
}: any) => {
  return (
    <>
      {showModal && (
        <div className="relative">
          <div
            style={{ opacity: 1, transform: "none" }}
            className="z-40 p-0 py-10 md:p-10 flex items-start overflow-y-scroll justify-center fixed top-0 left-0 w-full h-full bg-opacity-80 bg-stone-900 transition-opacity"
          >
            <div
              className="rounded-[4rem] overflow-hidden
          bg-gradient-to-bl from-slate-900 to-stone-900
          relative border border-white border-opacity-10 w-full md:w-11/12 min-h-[90vh] p-5 py-10 md:p-10"
            >
              {/* header */}

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[#2f80ed] font-[20px] ml-2 md:ml-0 md:mb-1 tracking-wide">
                    {type}
                  </p>

                  <h1 className="text-4xl md:text-h1 md:leading-[1] text-light font-bold ml-2 md:ml-0 mb-4 md:mb-0 text-gray-100">
                    {name}
                  </h1>
                </div>

                <button
                  className="text-white"
                  onClick={() => setShowModal(!showModal)}
                >
                  <MdOutlineCancel className="w-8  h-8 text-[#56ccf2]" />
                </button>
              </div>

              {/* links */}

              <div className="flex flex-col-reverse space-y-5 sm:space-y-0 sm:flex-row sm:space-x-3 mb-1  mt-2">
                <div className="mt-10 lg:mt-5 w-full lg:w-1/2">
                  <div className="flex items-center gap-2">
                    {client_link && (
                      <Link target="_blank" href={client_link}>
                        <button className="h-12 inline-flex text-lg items-center space-x-2 px-6 rounded-xl  undefined text-[#2f80ed] bg-slate-800 hover:bg-sky-800/45">
                          <FaGithub className="mr-2 hidden md:block" /> Client
                          side
                        </button>
                      </Link>
                    )}
                    {server_link && (
                      <Link href={server_link}>
                        <button className="h-12 inline-flex text-lg items-center space-x-2 px-6 rounded-xl  undefined text-[#2f80ed] bg-slate-800 hover:bg-sky-800/45">
                          <FaDatabase className="mr-2 hidden md:block" />
                          Server side
                        </button>
                      </Link>
                    )}
                    <Link target="_blank" href={live_link}>
                      <button className="h-12 inline-flex text-lg items-center space-x-2 px-6 rounded-xl  undefined text-[#2f80ed] bg-slate-800 hover:bg-sky-800/45">
                        <FaLink className="mr-2 hidden md:block" />
                        Live site
                      </button>
                    </Link>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-4">
                    {techIcons.map((item: any, index: number) => (
                      <Image
                        key={index}
                        src={item}
                        alt={item}
                        className="h-10"
                        height={40}
                        width={40}
                      />
                    ))}
                  </div>

                  <div className="text-lg text-gray-300 tracking-wide mt-4">
                    {description}
                  </div>
                </div>

                <div className="relative rounded-[4rem]  lg:w-1/2 h-[10rem] sm:h-[20rem] md:h-[30rem] object-contain bg-slate-800 flex items-center  ">
                  <Image
                    className="rounded-lg lg:rounded-none mb-4"
                    style={{ width: "100%", display: "inline-block" }}
                    src={image}
                    alt={name}
                    height={500}
                    width={500}
                    objectFit={"cover"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
