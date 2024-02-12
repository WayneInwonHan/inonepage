import React, { useState } from "react";
import styles from "./DoodleCard.css"; // Make sure the path matches your file structure

const DoodleCard = () => {
  const [currdeg, setCurrdeg] = useState(0);

  const rotate = (direction) => {
    setCurrdeg(currdeg + (direction === "next" ? -60 : 60));
  };

  return (
    <div>
      <div className={styles.container}>
        <div
          className={styles.carousel}
          style={{ transform: `rotateY(${currdeg}deg)` }}
        >
          <div className={`${styles.item} ${styles.a}`}>A</div>
          <div className={`${styles.item} ${styles.b}`}>B</div>
          <div className={`${styles.item} ${styles.c}`}>C</div>
          <div className={`${styles.item} ${styles.d}`}>D</div>
          <div className={`${styles.item} ${styles.e}`}>E</div>
          <div className={`${styles.item} ${styles.f}`}>F</div>
        </div>
      </div>
      <div className={styles.next} onClick={() => rotate("next")}>
        Next
      </div>
      <div className={styles.prev} onClick={() => rotate("prev")}>
        Prev
      </div>
    </div>
  );
};

export default DoodleCard;
