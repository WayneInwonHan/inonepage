"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

const AboutImage = ({ imgSrc, backImgSrc }) => {
  const containerRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);

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
      const bounds = container.getBoundingClientRect();
      const x = e.clientX - bounds.left - bounds.width / 2;
      const y = e.clientY - bounds.top - bounds.height / 2;

      // Scale down the effect so it's less intense and more balanced
      const scale = 20; // Adjust this value to control the effect intensity
      const rotateY = (x / bounds.width) * scale;
      const rotateX = -(y / bounds.height) * scale;

      setOverlayStyle({
        ...defaultOverlayStyle,
        backgroundPosition: `${50 + (x / bounds.width) * 50}% ${
          50 + (y / bounds.height) * 50
        }%`,
        filter: `opacity(${Math.abs(x / bounds.width)}) brightness(0.5)`,
      });

      container.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseOut = () => {
      setOverlayStyle(defaultOverlayStyle);
      container.style.transform =
        "perspective(500px) rotateY(0deg) rotateX(0deg)";
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
        className={`relative w-[450px] h-[450px] rounded-3xl overflow-hidden transition-transform duration-700 ease-linear ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200 to-purple-500 z-10 mix-blend-color-dodge bg-[linear-gradient(45deg,
    transparent 40%,
    rgba(255, 219, 112, 0.8) 45%,
    rgba(132, 50, 255 ,0.6) 50%,
    transparent 54%)] transition-all duration-100 ease-linear"
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
