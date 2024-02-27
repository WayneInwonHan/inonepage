import React from "react";

import Image from "next/image";

import Link from "next/link";

const RecentProjectCard = () => {
  return (
    <div className="relative w-full h-full flex flex-col p-4">
      <div className="w-full h-full border-[1px] border-black rounded-sm relative">
        <div className="absolute w-full h-full">
          <Image src="" width={500} height={500} alt="Picture of the author" />
        </div>
        <div className="absolute bottom-0 left-0 p-[10px]">
          <div className="flex flex-row gap-1">
            <div className="rounded-full text-white bg-black px-2 py-1 text-[.7rem]">
              React
            </div>
            <div className="rounded-full text-white bg-black px-2 py-1 text-[.7rem]">
              Next.js
            </div>
            <div className="rounded-full text-white bg-black px-2 py-1 text-[.7rem]">
              MySQL
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-[1.2rem] text-white font-bold drop-shadow-[0_1px_1px_rgba(0,0,0,1)]">
              512KOREAN
            </div>
            <div className="text-[.8rem] text-white drop-shadow-[0_1px_1px_rgba(0,0,0,1)]">
              Austin-based Community Web Service
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-2">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  );
};

export default RecentProjectCard;
