import React, { useState } from "react";
import "./DoodleCard.css";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const DoodleCard = () => {
  const [currdeg, setCurrdeg] = useState(0);

  const rotate = (direction) => {
    setCurrdeg(currdeg + (direction === "next" ? -60 : 60));
  };

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="m-auto w-[150px] h-full relative perspective-1000">
        <div
          className="absolute m-auto pt-5 h-full w-full doodleCarousel"
          style={{ transform: `rotateX(-5deg) rotateY(${currdeg}deg)` }}
        >
          <div className="absolute block w-[150px] h-[100px] border-black border-2 rounded-sm doodleCard-1">
            A
          </div>
          <div className="absolute block w-[150px] h-[100px] border-black border-2 rounded-sm doodleCard-2">
            B
          </div>
          <div className="absolute block w-[150px] h-[100px] border-black border-2 rounded-sm doodleCard-3">
            C
          </div>
          <div className="absolute block w-[150px] h-[100px] border-black border-2 rounded-sm doodleCard-4">
            D
          </div>
          <div className="absolute block w-[150px] h-[100px] border-black border-2 rounded-sm doodleCard-5">
            E
          </div>
          <div className="absolute block w-[150px] h-[100px] border-black border-2 rounded-sm doodleCard-6">
            F
          </div>
        </div>
      </div>
      <div className="absolute w-full bottom-1 flex gap-1 justify-center">
        <div
          className="w-[100px] rounded-lg flex justify-center bg-black text-white cursor-pointer p-1"
          onClick={() => rotate("prev")}
        >
          <FaAngleLeft size="1.25rem" />
        </div>
        <div
          className="w-[100px] rounded-lg flex justify-center bg-black text-white cursor-pointer p-1"
          onClick={() => rotate("next")}
        >
          <FaAngleRight size="1.25rem" />
        </div>
      </div>
    </div>
  );
};

export default DoodleCard;
