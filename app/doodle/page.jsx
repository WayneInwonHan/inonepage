import React from "react";

const Doodle = () => {
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
            <div className="flex justify-center items-center">
              <div className="noise-effect"></div>
              <div className="">
                <div className="grid grid-cols-4">
                  <div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doodle;
