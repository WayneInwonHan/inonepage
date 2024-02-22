import React from "react";
import "./Background.css";

const Background = () => {
  return (
    <div className="absolute z-[-1] p-1 inset-0 w-full h-full flex flex-wrap bg-black">
      <div className="w-1/2 h-full flex flex-col">
        <div className="h-3/6 flex flex-row">
          <div className="w-1/2 bg-initial bg-red-500 m-2 rounded-lg bg-anime-red"></div>
          <div className="w-1/2 bg-initial bg-yellow-200 m-2 rounded-lg bg-anime-yellow"></div>
        </div>
        <div className="w-1/1 h-1/6 bg-initial bg-lime-300 m-2 rounded-lg bg-anime-lime"></div>
        <div className="w-1/1 h-2/6 bg-initial bg-sky-950 m-2 rounded-lg bg-anime-sky"></div>
      </div>
      <div className="flex flex-col w-1/2 h-full">
        <div className="flex flex-row h-3/5">
          <div className="w-1/2 bg-initial bg-pink-200 m-2 rounded-lg bg-anime-pink"></div>
          <div className="w-1/2 bg-initial bg-blue-400 m-2 rounded-lg bg-anime-blue"></div>
        </div>
        <div className="flex flex-row h-2/5">
          <div className="w-1/2 bg-initial bg-amber-500 m-2 rounded-lg bg-anime-amber"></div>
          <div className="w-1/2 bg-initial bg-green-200 m-2 rounded-lg bg-anime-green"></div>
        </div>
      </div>
    </div>
  );
};

export default Background;
