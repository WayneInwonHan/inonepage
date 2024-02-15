import React, { useState } from "react";
import styles from "./DoodleCard.css"; // Make sure the path matches your file structure

const DoodleCard = () => {
  const [currdeg, setCurrdeg] = useState(0);

  const rotate = (direction) => {
    setCurrdeg(currdeg + (direction === "next" ? -60 : 60));
  };

  return (
    <div className="relative w-full h-full">
      <div className="">
        <div className="" style={{ transform: `rotateY(${currdeg}deg)` }}>
          <div className="a">A</div>
          <div className="b">B</div>
          <div className="c">C</div>
          <div className="d">D</div>
          <div className="e">E</div>
          <div className="f">F</div>
        </div>
      </div>
      <div className="" onClick={() => rotate("next")}>
        Next
      </div>
      <div className="" onClick={() => rotate("prev")}>
        Prev
      </div>
    </div>
  );
};

export default DoodleCard;
