"use client";

import Avatar from "@/components/Avatar";
import DoodleCard from "@/components/DoodleCard";
import ProjectCard from "@/components/ProjectCard";

import Image from "next/image";
import { Button } from "../components/ui/button";

import { FaGhost, FaEnvelope } from "react-icons/fa";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

export default function Home() {
  return (
    <div className="w-full h-full gap-6 flex flex-row">
      <div className="w-1/2 h-full gap-6 flex flex-col">
        <div className="page-window">
          <div className="page-window-bar">Hello || Annyeong</div>
          <div className="page-window-content p-5">
            <div>
              I am a{" "}
              <span className="font-bold underline">digital craftsman</span>{" "}
              eager to create and design digital solutions that address
              real-world problems. As a creator with a penchant for the
              technical, I am optimistic that my unique talents will benefit
              others. I am committed to continuing my productive and pragmatic
              activities, which, while they may seem modest, are a significant
              part of what I do.
            </div>
            <div className="flex flex-row mt-4 gap-x-2">
              <Button className="gap-x-2">
                about me
                <FaGhost size={16} />
              </Button>
              <Button className="gap-x-2">
                contact me
                <FaEnvelope size={16} />
              </Button>
            </div>
          </div>
          <div className="absolute text-gray-300 text-bold text-7xl right-0 bottom-0">
            HELLO
          </div>
        </div>
        <div className="w-fill h-full gap-6 flex flex-row">
          <div className="page-window">
            <div className="page-window-bar">Doodles</div>
            <div className="page-window-content">
              <DoodleCard />
            </div>
          </div>
          <div className="page-window">
            <div className="page-window-bar">Recent Projects</div>
            <div className="page-window-content">
              <ProjectCard />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full flex">
        <div className="page-window">
          <div className="page-window-bar">!BOT.(NOTBOT.)</div>
          <div className="page-window-content">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
}
