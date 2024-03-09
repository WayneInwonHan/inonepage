import React from "react";

import AboutImage from "@/components/AboutImage";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AboutTabs from "@/components/AboutTabs";

const About = () => {
  return (
    <div className="w-full h-full gap-6 flex flex-row">
      <div className="w-1/2 h-full flex flex-col">
        <div className="page-window">
          <div className="page-window-bar">
            <div></div>
            <div className="page-window-bar-buttons">
              <div className="page-window-bar-button"></div>
              <div className="page-window-bar-button"></div>
            </div>
          </div>
          <div className="page-window-content p-5 flex justify-center align-center bg-gradient-to-r from-[#2D004B] to-black">
            <div className="flex justify-center items-center">
              <div className="noise-effect"></div>
              <AboutImage
                containerStyles="bg-about_shape_light dark:bg-about_shape_dark min-w-[450px] min-h-[450px] w-1/2 h-1/2 bg-no-repeat relative"
                imgSrc="/about/wayne_about_front.jpg"
                backImgSrc="/about/wayne_about_back.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full flex flex-col">
        <div className="page-window">
          <div className="page-window-bar">
            <div></div>
            <div className="page-window-bar-buttons">
              <div className="page-window-bar-button"></div>
              <div className="page-window-bar-button"></div>
            </div>
          </div>
          <div className="page-window-content p-5 overflow-scroll">
            <AboutTabs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
