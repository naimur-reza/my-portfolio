"use client";

import React from "react";
import CountUp from "react-countup";
import { styles } from "@/app/styles/styles";
import PhotoGallery from "../PhotoGallery";

const Services = () => {
  return (
    <>
      <div id="services" className="mt-20">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>

        <div className="mt-10 flex justify-between lg:flex-row  flex-col-reverse items-center lg:items-start ">
          <div className="mt-10 lg:mt-0 ">
            <div className="flex gap-7 items-center flex-wrap ">
              <div>
                <span className="blue-text-gradient cursor-help font-bold lg:text-[44px] text-[30px]">
                  <CountUp enableScrollSpy={true} end={20} />
                </span>
                <br />
                <span className="text-gray-400 font-semibold lg:text-normal text-sm">
                  years old
                </span>
              </div>
              <div>
                <span className="blue-text-gradient  cursor-help font-bold lg:text-[44px] text-[30px]">
                  <CountUp enableScrollSpy={true} end={2} />+
                </span>
                <br />
                <span className="text-gray-400 font-semibold lg:text-normal text-sm">
                  Years web dev{" "}
                </span>
              </div>
              <div>
                <span className="blue-text-gradient cursor-help font-bold lg:text-[44px]  text-[30px]">
                  <CountUp enableScrollSpy={true} end={1932} />
                </span>
                <br />
                <span className="text-gray-400 font-semibold lg:text-normal text-sm">
                  Total Commits
                </span>
              </div>
            </div>

            <div className="text-white">
              <p>
                I&#39;m a skilled software developer with experience in{" "}
                <span className="font-bold">React</span> and
                <span className="font-bold"> JavaScript</span>, and expertise in
                frameworks like <span className="font-bold">Next.Js</span>,{" "}
                <span className="font-bold">Node.Js </span> and{" "}
                <span className="font-bold">Express.Js</span> I&#39;m a quick
                learner and collaborate closely with clients to create
                efficient, scalable, and user-friendly solutions that solve
                real-world problems. Let&#39;s work together to bring your ideas
                to life!
              </p>
              <p>
                I’ve spent most of my life deeply interested in technology and
                food, continuously building things with both. As a teenager, I
                was a classic computer nerd, spending most of my times messing
                with the computer. And of course, playing games. Most of that is
                still true today.
              </p>
            </div>
          </div>
          <PhotoGallery />
        </div>
      </div>
    </>
  );
};

export default Services;
