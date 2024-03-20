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
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("tab1");

  // Function to change the active tab
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
            <div className="flex border-b">
              <button
                className={`py-2 px-4 text-sm font-medium ${
                  activeTab === "tab1"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500"
                }`}
                onClick={() => handleTabChange("tab1")}
              >
                Tab 1
              </button>
              <button
                className={`py-2 px-4 text-sm font-medium ${
                  activeTab === "tab2"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500"
                }`}
                onClick={() => handleTabChange("tab2")}
              >
                Tab 2
              </button>
            </div>

            {/* Tab Content */}
            <div>
              {activeTab === "tab1" && (
                <div className="p-4">
                  <div>subtitle</div>
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
                    className="h-[350px]"
                  >
                    {devScreenData.map((devScreen, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <div>
                            <div className="shine-eff"></div>
                            <div>
                              <h2>{devScreen.title}</h2>
                            </div>
                            <Image
                              src={devScreen.image}
                              alt={devScreen.title}
                              layout="fill"
                              objectFit="cover"
                              className="transition-all duration-500"
                            />
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              )}
              {activeTab === "tab2" && (
                <div className="p-4">
                  <div>subtitle</div>
                  <div className="border-t-[1px] border-black">
                    {mySceneData.map((myScene, index) => {
                      return (
                        <div className="border-b-[1px] border-black">
                          <Link href={myScene.url}>
                            <div>
                              <h1>{myScene.title}</h1>
                              <h3>{myScene.subtitle}</h3>
                            </div>
                            <div>
                              <h2>{myScene.date}</h2>
                            </div>
                          </Link>
                          <div>
                            <Image
                              src={myScene.image}
                              alt={myScene.title}
                              layout="fill"
                              objectFit="cover"
                              className="transition-all duration-500"
                            />
                          </div>
                        </div>
                      );
                    })}
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
