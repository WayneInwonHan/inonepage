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
        backgroundPosition: `${50 + (x / bounds.width) * 150}% ${
          50 + (y / bounds.height) * 150
        }%`,
        filter: `opacity(${Math.abs(x / bounds.width)}) brightness(0.75)`,
      });

      container.style.transform = `perspective(250px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
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
        className={`relative w-[450px] h-[450px] rounded-full overflow-hidden transition-transform duration-500 ease-linear`}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200 to-purple-500 z-10 mix-blend-color-dodge transition-all duration-100 ease-linear"
          style={overlayStyle}
        />
        <div className="noise-effect"></div>

        <Image
          src={isFlipped ? backImgSrc : imgSrc}
          objectFit="cover"
          priority
          layout="responsive"
          alt=""
          width={450}
          height={450}
        />
      </div>
      <button
        onClick={handleFlip}
        className="absolute bottom-0 left-0 text-white font-bold text-[5rem] transition duration-300 overflow-hidden"
        style={{ whiteSpace: "nowrap" }}
      >
        <div
          className="animate-marquee whitespace-nowrap"
          style={{
            display: "inline-block",
            animation: "marquee 30s linear infinite",
          }}
        >
          Click here<span className="text-pink-300 px-4">•</span>Click here
          <span className="text-pink-300 px-4">•</span>Click here
        </div>
      </button>
    </div>
  );
};

export default AboutImage;
