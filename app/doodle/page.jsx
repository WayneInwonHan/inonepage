"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import doodleData from "../../lib/doodleData";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Doodle = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const handleOpenModal = (index) => {
    setSelectedImg(index);
  };

  const handleCloseModal = () => {
    setSelectedImg(null);
  };

  const handleNext = () => {
    setSelectedImg((prevIndex) => (prevIndex + 1) % doodleData.length);
  };

  const handlePrev = () => {
    setSelectedImg(
      (prevIndex) => (prevIndex - 1 + doodleData.length) % doodleData.length,
    );
  };

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (selectedImg !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalStyle;
    }

    return () => (document.body.style.overflow = originalStyle);
  }, [selectedImg]);

  return (
    <div className="w-full h-full gap-6 flex flex-col">
      <div className="w-full h-full flex flex-col">
        <div className="page-window">
          <div className="page-window-bar">
            <div></div>
            <div className="page-window-bar-buttons">
              <div className="page-window-bar-button"></div>
              <div className="page-window-bar-button"></div>
            </div>
          </div>
          <div className="page-window-content p-5 justify-center align-center bg-gradient-to-r from-[#2D004B] to-black overflow-y-scroll">
            <div className="w-full h-full flex justify-center items-center">
              <div className="noise-effect"></div>
              <div className="w-full h-full p-5 items-center">
                <div className="grid grid-cols-4 gap-2">
                  {doodleData.map((doodle, index) => (
                    <div
                      key={index}
                      className="relative w-full h-[200px] max-w-[300px] border-2 border-black rounded-sm cursor-pointer group overflow-hidden z-10"
                      onClick={() => handleOpenModal(index)}
                    >
                      <Image
                        src={doodle.image}
                        alt={doodle.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                      <h2 className="absolute bottom-0 left-0 w-full text-white text-left text-[1.5rem] pl-2 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[2]">
                        {doodle.title}
                      </h2>
                    </div>
                  ))}
                </div>
                {selectedImg !== null && (
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 z-20 flex justify-center items-center cursor-pointer"
                    onClick={handleCloseModal}
                  >
                    <div
                      className="p-5 rounded-lg flex flex-col items-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Image
                        src={doodleData[selectedImg].image}
                        alt="Selected Doodle"
                        width={500}
                        height={500}
                        priority
                      />
                      <div className="flex justify-between items-center w-full mt-4">
                        <button
                          className="bg-gray-300 hover:bg-gray-400 text-black font-bold w-[50px] h-[50px] flex justify-center items-center rounded-[100%] transition-all duration-300"
                          onClick={handlePrev}
                        >
                          <FaArrowLeft className="text-[1.25rem]" />
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold w-[50px] h-[50px] flex justify-center items-center rounded-[100%] transition-all duration-300"
                          onClick={handleCloseModal}
                        >
                          X
                        </button>
                        <button
                          className="bg-gray-300 hover:bg-gray-400 text-black font-bold w-[50px] h-[50px] flex justify-center items-center rounded-[100%] transition-all duration-300"
                          onClick={handleNext}
                        >
                          <FaArrowRight className="text-[1.25rem]" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doodle;
