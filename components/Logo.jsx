import React from "react";

import Link from "next/link";
import "./Logo.css";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="absolute logo w-full flex justify-center">
      <Link href="/">
        {" "}
        <div className="eye">
          <div className="eyeball"></div>
          <div className="eyelid"></div>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
