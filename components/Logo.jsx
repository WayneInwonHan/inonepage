import React, { useEffect } from "react";
import Link from "next/link";
import "./Logo.css";

const Logo = () => {
  useEffect(() => {
    const eyeball = document.querySelector(".eyeball");

    const onMouseMove = (e) => {
      const { clientX } = e;
      const { innerWidth } = window;
      const centerOfWindow = innerWidth / 2;
      const distanceFromCenter = clientX - centerOfWindow;
      const movement = Math.max(
        -20,
        Math.min(20, (distanceFromCenter / (innerWidth / 2)) * 20),
      );

      eyeball.style.transform = `translate(${movement}px, -50%)`;
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="absolute logo w-full flex justify-center">
      <Link href="/">
        <div className="eye">
          <div className="eyeball"></div>
          <div className="eyelid"></div>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
