import React from "react";
import "./Background.css";

const Background = () => {
  return (
    <div className="absolute z-[-1] p-1 inset-0 w-full h-full flex flex-wrap bg-black">
      <div className="w-1/2 h-full flex flex-col">
        <div className="h-3/6 flex flex-row">
          <div className="w-1/2 bg-initial hover:bg-red-500 m-2 rounded-lg"></div>
          <div className="w-1/2 bg-initial hover:bg-yellow-200 m-2 rounded-lg"></div>
        </div>
        <div className="w-1/1 h-1/6 bg-initial hover:bg-lime-300 m-2 rounded-lg"></div>
        <div className="w-1/1 h-2/6 bg-initial hover:bg-sky-950 m-2 rounded-lg"></div>
      </div>
      <div className="flex flex-col w-1/2 h-full">
        <div className="flex flex-row h-3/5">
          <div className="w-1/2 bg-initial hover:bg-black m-2 rounded-lg"></div>
          <div className="w-1/2 bg-initial hover:bg-blue-400 m-2 rounded-lg"></div>
        </div>
        <div className="flex flex-row h-2/5">
          <div className="w-1/2 bg-initial hover:bg-amber-500 m-2 rounded-lg"></div>
          <div className="w-1/2 bg-initial hover:bg-green-200 m-2 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Background;
