"use client";

import { useEffect } from "react";
import { initGame } from "./minigame.js";

import Link from "next/link";
import { FaHouse, FaArrowRotateRight } from "react-icons/fa6";

export default function MiniGame() {
  useEffect(() => {
    initGame(); // Initialize the game after the component mounts
  }, []);
  return (
    <div className="relative flex justify-center content-center w-full h-full bg-white">
      <div
        id="score"
        className="absolute w-full text-center mt-5 z-5 text-black font-bold text-[50px]"
      ></div>
      <canvas id="game" width="500" height="500"></canvas>
      <div
        id="introduction"
        className="absolute text-center text-black border-2 border-black py-2 px-4 rounded-md"
      >
        Hold down the mouse to stretch out a stick
      </div>
      <div id="perfect" className="absolute text-black">
        DOUBLE SCORE
      </div>
      <button className="absolute top-[20px] left-[50px] border-2 border-black p-7 z-10">
        <Link href="/">
          <FaHouse size="2rem" className="text-black" />
        </Link>
      </button>
      <button
        id="restart"
        className="absolute top-[20px] left-[150px] border-2 border-black p-7 z-10"
      >
        <FaArrowRotateRight size="2rem" className="text-black" />
      </button>
    </div>
  );
}
