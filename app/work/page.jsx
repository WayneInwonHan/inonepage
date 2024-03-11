import React from "react";

const Work = () => {
  return (
    <div className="w-full h-full gap-6 flex flex-row">
      <div className="w-1/3 h-full flex flex-col">
        <div className="page-window">
          <div className="page-window-bar">
            <div></div>
            <div className="page-window-bar-buttons">
              <div className="page-window-bar-button"></div>
              <div className="page-window-bar-button"></div>
            </div>
          </div>
          <div className="page-window-content p-5"></div>
        </div>
      </div>
      <div className="w-2/3 h-full flex flex-col">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
