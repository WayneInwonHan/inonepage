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
import projectData from "@/lib/projectData";

const Work = () => {
  return (
    <div className="w-full h-full gap-6 flex flex-row">
      <div className="w-1/3 h-full flex flex-col">
        <div className="page-window">
          <div className="page-window-bar">
            <div>Recent Works</div>
            <div className="page-window-bar-buttons">
              <div className="page-window-bar-button"></div>
              <div className="page-window-bar-button"></div>
            </div>
          </div>
          <div className="page-window-content">
            <div className="w-full h-full mx-auto xl:mx-0 text-center bg-gradient-to-r from-[#2D004B] to-black xl:text-left flex flex-col justify-center items-center xl:items-start">
              <div className="flex justify-center">
                <div className="noise-effect"></div>
                <div className="flex flex-col p-5 z-10">
                  <h1 className="text-white font-bold text-[2rem] mb-4">
                    Recent Works
                  </h1>
                  <p className="text-white mb-8 max-w-[500px]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <Link href="/works">
                    <Button className="jelly-btn bg-white text-black hover:bg-white hover:text-black">
                      All projects
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/3 h-full flex flex-col">
        <div className="page-window">
          <div className="page-window-bar">
            <div>Showcase</div>
            <div className="page-window-bar-buttons">
              <div className="page-window-bar-button"></div>
              <div className="page-window-bar-button"></div>
            </div>
          </div>
          <div className="page-window-content p-5 justify-center align-center">
            <div className="flex justify-center">
              <div className="flex justify-center items-center absolute w-5/6 h-full right-2 top-0 z-10">
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
