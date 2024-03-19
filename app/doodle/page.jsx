"use client";

import React, { useState } from "react";
import Image from "next/image";
import doodleData from "../../lib/doodleData";

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
          <div className="page-window-content p-5 justify-center align-center bg-gradient-to-r from-[#2D004B] to-black">
            <div className="w-full h-full flex justify-center items-center">
              <div className="noise-effect"></div>
              <div className="w-full h-full p-5 items-center">
                <div className="grid grid-cols-4 gap-2">
                  {doodleData.map((doodle, index) => (
                    <div
                      key={index}
                      className="relative w-full h-[200px] max-w-[300px] border-2 border-black rounded-sm cursor-pointer group overflow-hidden"
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
                      <h2 className="absolute bottom-0 left-0 w-full text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[2]">
                        {doodle.title}
                      </h2>
                    </div>
                  ))}
                </div>
                {selectedImg !== null && (
                  <div className="fixed w-full h-full inset-0 bg-black bg-opacity-50 z-50 flex flex-col justify-center items-center">
                    <div className="flex flex-row">
                      <button className="bg-white" onClick={handlePrev}>
                        Prev
                      </button>
                      <Image
                        src={doodleData[selectedImg].image}
                        alt="Selected Doodle"
                        width={500}
                        height={500}
                        priority
                      />
                      <button className="bg-white" onClick={handleNext}>
                        Next
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <button className="bg-white" onClick={handleCloseModal}>
                        Close
                      </button>
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
