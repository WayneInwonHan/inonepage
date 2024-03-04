import React from "react";

import Link from "next/link";
import "./PostCardBar.css";

const LatestPostCard = () => {
  return (
    <div className="w-full h-full flex align-center">
      <Link href="/blog" className="w-full h-full">
        <div className="w-full h-full flex flex-row justify-between items-center">
          <div className="w-[250px] h-[20px] pl-[7.5px] overflow-hidden text-ellipsis whitespace-nowrap">
            this is the recent post title name: text overflow ellipsis
          </div>
          <div className="PostCardBar">
            <div id="PostCardBar1"></div>
            <div id="PostCardBar2"></div>
            <div id="PostCardBar3"></div>
            <div id="PostCardBar4"></div>
            <div id="PostCardBar5"></div>
            <div id="PostCardBar6"></div>
            <div id="PostCardBar7"></div>
            <div id="PostCardBar8"></div>
            <div id="PostCardBar9"></div>
            <div id="PostCardBar10"></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LatestPostCard;
