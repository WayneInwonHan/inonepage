"use client";

import React from "react";
import { useState } from "react";

import mySceneData from "../../lib/mySceneData";
import devScreenData from "../../lib/devScreenData";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import "../../components/SystemCard.css";

import {
  FaRegCalendarCheck,
  FaRegFileCode,
  FaHandPaper,
  FaLevelUpAlt,
  FaDesktop,
  FaFilm,
} from "react-icons/fa";

export const systemData = [
  {
    icon: <FaRegCalendarCheck />,
    title: "YAGNI",
    description: "You Ain't Gonna Need It",
  },
  {
    icon: <FaRegFileCode />,
    title: "KISS",
    description: "Keep It Simple Stupid",
  },
  {
    icon: <FaHandPaper />,
    title: "DRY",
    description: "Don't Repeat Yourself.",
  },
];

const Perspective = () => {
  const [activeTab, setActiveTab] = useState("DevScreen");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full h-full gap-6 flex flex-col">
      <div className="w-full h-1/4 flex flex-col">
        <div className="page-window">
          <div className="page-window-bar">
            <div></div>
            <div className="page-window-bar-buttons">
              <div className="page-window-bar-button"></div>
              <div className="page-window-bar-button"></div>
            </div>
          </div>
          <div className="page-window-content p-5 justify-center align-center bg-gradient-to-r from-[#2D004B] to-black">
            <div className="flex justify-center items-center">
              <div className="noise-effect"></div>
              <div className="flex flex-row gap-4 items-center z-10">
                <div className="text-white flex flex-col items-start">
                  <h1 className="font-bold text-[1.5rem]">
                    <span className="text-[#fa8128]">Digital Craftman</span> as
                    Life
                  </h1>
                  <p className="font-normal text-[12px]">
                    My life system most likely coded following the principles
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {systemData.map((item, index) => {
                    return (
                      <div className="rounded-sm systemDataCard" key={index}>
                        <div className="relative px-4 py-2 systemDataContent">
                          <div className="absolute right-2 top-2 text-[#fa8128] transition-all duration-500  systemDataIcon">
                            {item.icon}
                          </div>
                          <div className="text-white">
                            <h2 className="text-[1.2rem] font-bold">
                              {item.title}
                            </h2>
                            <p className="text-[10px] text-white font-normal">
                              {item.description}
                            </p>
                          </div>
                          <div className="text-[1.2rem]">
                            <FaLevelUpAlt className="rotate-90 text-white transition-all duration-500 systemDataArrow" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-3/4 flex flex-col">
        <div className="page-window">
          <div className="page-window-bar">
            <div></div>
            <div className="page-window-bar-buttons">
              <div className="page-window-bar-button"></div>
              <div className="page-window-bar-button"></div>
            </div>
          </div>
          <div className="page-window-content p-5 overflow-y-scroll">
            <div className="aurora-effect"></div>
            {/* Tab Headers */}
            <div className="flex justify-center gap-2">
              <button
                className={`py-2 px-4 text-[1.25rem] font-bold gap-2 flex items-center z-10 jelly-btn transition-all duration-500 ${
                  activeTab === "DevScreen"
                    ? "bg-black text-white rounded-full transition-all duration-500"
                    : "bg-transparent rounded-none text-gray-400 hover:text-gray-500"
                }`}
                onClick={() => handleTabChange("DevScreen")}
              >
                <FaDesktop />
                <h2>DevScreen</h2>
              </button>
              <button
                className={`py-2 px-4 text-[1.25rem] font-bold gap-2 flex items-center z-10 jelly-btn transition-all duration-500 ${
                  activeTab === "MyScene"
                    ? "bg-black text-white rounded-full transition-all duration-500"
                    : "bg-transparent rounded-none text-gray-400 hover:text-gray-500"
                }`}
                onClick={() => handleTabChange("MyScene")}
              >
                <FaFilm />
                <h2>MyScene</h2>
              </button>
            </div>

            {/* Tab Content */}
            <div>
              {activeTab === "DevScreen" && (
                <div className="p-4">
                  <div className="pb-6 flex flex-row gap-2 justify-center">
                    <h3 className="text-black text-[1rem]">
                      My perfect cheat sheet and storage use
                    </h3>
                    <Link
                      href="/blogs"
                      className="text-[#000000] hover:text-[#000000] text-[1rem] underline"
                    >
                      Show All Archievs
                    </Link>
                  </div>
                  <Swiper
                    slidesPerView={1}
                    breakpoints={{
                      640: { slidesPerView: 3 },
                      1400: { slidesPerView: 4 },
                    }}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{
                      clickable: true,
                    }}
                    className="h-[300px]"
                  >
                    {devScreenData.map((devScreen, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <div className="relative border-2 w-full h-full border-black rounded-md overflow-hidden">
                            <Link href={devScreen.url}>
                              <div className="absolute w-full h-full flex flex-col justify-center items-center">
                                <h2 className="text-white text-stroke font-bold text-[1.5rem]">
                                  {devScreen.title}
                                </h2>
                                <h3 className="text-white text-stroke font-bold text-[1rem]">
                                  {devScreen.subtitle}
                                </h3>
                              </div>
                              <Image
                                src={devScreen.image}
                                alt={devScreen.title}
                                layout="fill"
                                className="absolute bottom-0 w-full h-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                              />
                            </Link>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              )}
              {activeTab === "MyScene" && (
                <div className="p-4">
                  <div className="pb-6 flex flex-row gap-2 justify-center">
                    <h3 className="text-black text-[1rem]">
                      <span className="font-bold">Portraits</span>: The day of
                      my youth
                    </h3>
                  </div>
                  <div className="border-t-[1px] text-black border-black">
                    {mySceneData.map((myScene, index) => (
                      <div
                        key={index}
                        className="relative w-full h-full border-b-[1px] border-black group"
                      >
                        <Link
                          href={myScene.url}
                          className="relative flex flex-row justify-between items-center overflow-hidden"
                        >
                          <div className="absolute w-full h-full bg-black -translate-x-[100%] group-hover:-translate-x-[0%] transition-all duration-500"></div>
                          <div className="flex flex-col group-hover:z-10 pl-4">
                            <h1 className="font-bold z-10 text-[2.25rem] leading-0 text-black group-hover:text-white transition-colors duration-500">
                              {myScene.title}
                            </h1>
                            <h2 className="text-[1.25rem] group-hover:z-10 text-black leading-0 group-hover:text-white transition-colors duration-500">
                              {myScene.subtitle}
                            </h2>
                          </div>
                          <div className="z-10 pr-4">
                            <h3 className="text-[1em] group-hover:z-10 text-black group-hover:text-white transition-colors duration-500">
                              {myScene.date}
                            </h3>
                          </div>
                        </Link>
                        <div className="absolute pointer-events-none top-[-30px] right-0 left-0 m-auto w-[200px] h-[150px] border-2 border-black rounded-sm opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-1000">
                          <Image
                            src={myScene.image}
                            alt={myScene.title}
                            width={200}
                            height={150}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Perspective;
