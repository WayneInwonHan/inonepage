import React from "react";

import Link from "next/link";

const RecentProjectCard = () => {
  return (
    <div className="relative flex p-4">
      <div className="w-full border-[1px] border-black rounded-sm">
        <div>Image</div>
        <div>
          contentbox
          <div>
            blobs<div>blob</div>
            <div>blob</div>
            <div>blob</div>
          </div>
          <div>
            textbox
            <div>title</div>
            <div>text</div>
          </div>
        </div>
      </div>
      <div className="absolute bg-black w-[75px] h-[75px] bottom-[-10px] left-[-10px] rounded-[50%]">
        Show more<div>arrow</div>
      </div>
    </div>
  );
};

export default RecentProjectCard;
