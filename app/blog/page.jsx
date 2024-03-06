import React from "react";

const Perspective = () => {
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
          <div className="page-window-content p-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Perspective;
