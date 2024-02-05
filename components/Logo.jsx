import React from "react";
import "./Logo.css";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="absolute logo w-full flex justify-center">
      <div className="eye">
        <div className="eyeball"></div>
      </div>
    </div>
  );
};

export default Logo;
