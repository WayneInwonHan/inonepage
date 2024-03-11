import React from "react";
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
          <div className="page-window-content p-5">
            <div className="aurora-effect"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perspective;
