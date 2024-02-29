import React, { useState, useEffect } from "react";

import Link from "next/link";

const RecentProjectCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      title: "Slide 1",
      description: "Description for slide 1",
      tags: ["React", "Next.js", "MySQL"],
      imageUrl: "/path/to/image1.jpg", // Update with your image path
    },
    {
      title: "Slide 2",
      description: "Description for slide 2",
      tags: ["Node.js", "Express", "MongoDB"],
      imageUrl: "/path/to/image2.jpg", // Update with your image path
    },
    {
      title: "Slide 3",
      description: "Description for slide 3",
      tags: ["Vue.js", "Nuxt.js", "Firebase"],
      imageUrl: "/path/to/image3.jpg", // Update with your image path
    },
    {
      title: "Slide 4",
      description: "Description for slide 4",
      tags: ["Angular", "NestJS", "PostgreSQL"],
      imageUrl: "/path/to/image4.jpg", // Update with your image path
    },
    {
      title: "Slide 5",
      description: "Description for slide 5",
      tags: ["Django", "Python", "SQLite"],
      imageUrl: "/path/to/image5.jpg", // Update with your image path
    },
  ];
  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 4000); // Rotate slides every 4 seconds
    return () => clearInterval(interval);
  }, [totalSlides]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-full flex flex-col pl-2 pt-2 pr-2 pb-6">
      <div className="w-full h-full border-[1px] border-black rounded-sm relative">
        <Link href="/work">
          <div
            className="overflow-hidden"
            style={{ width: "100%", height: "100%" }}
          >
            <div
              className="relative flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                height: "100%",
                width: `${totalSlides * 100}%`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full h-full relative"
                  style={{
                    backgroundImage: `url(${slide.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="projectCardSlide absolute bottom-0 left-0 p-[10px]">
                    <div className="flex flex-row gap-1">
                      {slide.tags.map((tag, tagIndex) => (
                        <div
                          key={tagIndex}
                          className="rounded-full text-white bg-black px-2 py-0.5 text-[.65rem]"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col">
                      <div className="text-[1.2rem] text-white font-bold drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">
                        {slide.title}
                      </div>
                      <div className="text-[.8rem] text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">
                        {slide.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="projectCardDots flex flex-row justify-center mt-[7.5px] gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <div
                key={index}
                className={`projectCardDot rounded-full w-[12.5px] h-[12.5px] ${
                  currentIndex === index ? "bg-black" : "bg-white"
                } border-[2px] border-black cursor-pointer`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RecentProjectCard;
