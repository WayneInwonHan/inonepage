import React from "react";

import Link from "next/link";

const MinigameWindow = () => {
  return (
    <div>
      <Link href="/minigame">
        <div className="h-full w-full">
          <div className="flex flex-col justify-center items-center gap-2 p-2">
            <div className="relative flex">
              <div className="relative flex flex-col rotate-[-15deg] translate-x-[10px] justify-center items-center text-black m-1 p-2 rounded-lg shadow-md hover:shadow border-2 border-black cursor-pointer w-[75px] h-[100px] hover:translate-y-1 transition-all duration-300 bg-white">
                <div className="absolute text-[1.25rem] font-bold top-1 left-1">
                  A
                </div>
                <div className="text-[2rem]">♠️</div>
                <div className="absolute text-[1.25rem] font-bold bottom-1 right-1">
                  A
                </div>
              </div>
              <div className="relative flex flex-col rotate-[15deg] translate-x-[-10px] justify-center items-center text-red-500 m-1 p-2 rounded-lg shadow-md hover:shadow border-2 border-black cursor-pointer w-[75px] h-[100px] hover:translate-y-1 transition-all duration-300 bg-white">
                <div className="absolute text-[1.25rem] font-bold top-1 left-1">
                  A
                </div>
                <div className="text-[2rem]">♥️</div>
                <div className="absolute text-[1.25rem] font-bold bottom-1 right-1">
                  A
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 m-auto rounded-xl">
              <div className="px-1 py-1">
                <h1 className="text-black font-bold text-[1.25rem] text-stroke text-center">
                  IN<span className="text-red-500">ONE</span>POKER
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MinigameWindow;
