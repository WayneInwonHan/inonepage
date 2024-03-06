"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

const AboutImage = ({ imgSrc, backImgSrc }) => {
  const containerRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);

  // Define default styles for the overlay to be visible initially
  const defaultOverlayStyle = {
    filter: "opacity(0)",
    backgroundPosition: "100%",
  };
  const [overlayStyle, setOverlayStyle] = useState(defaultOverlayStyle);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (e) => {
      const { offsetX: x, offsetY: y } = e;
      const rotateY = (-1 / 5) * x + 20;
      const rotateX = (4 / 30) * y - 20;

      setOverlayStyle({
        ...defaultOverlayStyle,
        backgroundPosition: `${x / 5 + y / 5}%`,
        filter: `opacity(${x / 400}) brightness(0.5)`,
      });

      container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseOut = () => {
      setOverlayStyle(defaultOverlayStyle);
      container.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg)";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseout", handleMouseOut);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div
        ref={containerRef}
        className={`relative w-[400px] h-[400px] rounded-3xl overflow-hidden transition-transform duration-700 ease-linear ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200 to-purple-500 z-10 mix-blend-color-dodge bg-100% transition-all duration-100 ease-linear"
          style={overlayStyle}
        />
        <Image
          src={isFlipped ? backImgSrc : imgSrc}
          layout="fill"
          objectFit="cover"
          priority
          alt=""
          className={`${isFlipped ? "rotate-y-180" : ""}`}
        />
      </div>
      <button
        onClick={handleFlip}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
      >
        Flip Image
      </button>
    </div>
  );
};

export default AboutImage;
