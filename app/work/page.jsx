"use client";
import Link from "next/link";
import { Button } from "../../components/ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: ["react js", "abc"],
    name: "Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "next js",
    name: "Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "fullstack",
    name: "Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "fullstack",
    name: "Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "fullstack",
    name: "Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <div className="w-full h-full gap-6 flex flex-row">
      <div className="w-1/3 h-full flex flex-col">
        <div className="page-window">
          <div className="page-window-bar">
            <div></div>
            <div className="page-window-bar-buttons">
              <div className="page-window-bar-button"></div>
              <div className="page-window-bar-button"></div>
            </div>
          </div>
          <div className="page-window-content p-5">
            <div className="max-w-[400px] h-full mx-auto xl:mx-0 text-center xl:text-left flex flex-col justify-center items-center xl:items-start">
              <h1 className="section-title mb-4">Recent Works</h1>
              <p className="subtitle mb-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <Link href="/projects">
                <Button className="jelly-btn">All projects</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/3 h-full flex flex-col">
        <div className="page-window">
          <div className="page-window-bar">
            <div></div>
            <div className="page-window-bar-buttons">
              <div className="page-window-bar-button"></div>
              <div className="page-window-bar-button"></div>
            </div>
          </div>
          <div className="page-window-content p-5 justify-center align-center bg-gradient-to-r from-[#2D004B] to-black">
            <div className="flex justify-center">
              <div className="noise-effect"></div>
              <div className="flex items-center xl:max-w-[700px] xl:absolute h-full right-2 top-0 z-10">
                <Swiper
                  className="h-[500px]"
                  slidesPerView={1}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                    },
                  }}
                  spaceBetween={10}
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                >
                  {/* show only the first 4 projects for the slides */}
                  {projectData.slice(0, 4).map((project, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <ProjectCard project={project} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
