"use client";

import Avatar from "@/components/Avatar";
import AvatarBackground from "@/components/AvatarBackground";
import AvatarText from "@/components/AvatarText";
import DoodleCard from "@/components/DoodleCard";
import ProjectCard from "@/components/ProjectCard";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/ui/button";

import { FaGhost, FaEnvelope } from "react-icons/fa";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import RecentProjectCard from "@/components/RecentProjectCard";
import LatestPostCard from "@/components/LatestPostCard";

import VoxelAvatarLoader from "../components/AvatarLoader";
import dynamic from "next/dynamic";

const VoxelAvatar = dynamic(() => import("../components/Avatar"), {
  ssr: false,
  loading: () => <VoxelAvatarLoader />,
});

export default function Home() {
  return (
    <div className="w-full h-full gap-6 flex flex-row">
      <div className="w-1/2 h-full gap-6 flex flex-col">
        <div className="page-window">
          <div className="page-window-bar">
            <div>Hello || Annyeong</div>
            <div className="page-window-bar-buttons">
              <div className="page-window-bar-button"></div>
              <div className="page-window-bar-button"></div>
            </div>
          </div>
          <div className="page-window-content p-5">
            <div>
              I am a{" "}
              <span className="font-bold underline">
                digital craftsman / full-stack developer
              </span>{" "}
              eager to create and design digital solutions that address
              real-world problems. As a creator with a penchant for the
              technical, I am optimistic that my unique talents will benefit
              others. I am committed to continuing my productive and pragmatic
              activities, which, while they may seem modest, are a significant
              part of what I do.
            </div>
            <div className="flex flex-row mt-4 gap-x-2">
              <Button className="gap-x-2 jelly-btn">
                about me
                <FaGhost size={16} />
              </Button>
              <Button className="gap-x-2 jelly-btn">
                contact me
                <FaEnvelope size={16} />
              </Button>
            </div>
          </div>
          <div className="absolute text-gray-200 text-bold text-6xl right-0 bottom-0">
            HELLO
          </div>
        </div>
        <div className="w-fill h-full gap-6 flex flex-row">
          <div className="w-1/2 h-full gap-6 flex flex-col">
            <div className="page-window h-3/4">
              <div className="page-window-bar">
                <div>Doodles</div>
                <div className="page-window-bar-buttons">
                  <div className="page-window-bar-button"></div>
                  <div className="page-window-bar-button"></div>
                </div>
              </div>
              <div className="page-window-content">
                <DoodleCard />
              </div>
            </div>
            <div className="page-window h-1/4">
              <div className="page-window-bar">
                <div>Latest Post</div>
                <div className="page-window-bar-buttons">
                  <div className="page-window-bar-button"></div>
                  <div className="page-window-bar-button"></div>
                </div>
              </div>
              <div className="page-window-content">
                <LatestPostCard />
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full flex">
            <div className="page-window">
              <div className="page-window-bar">
                <div>Recent Projects</div>
                <div className="page-window-bar-buttons">
                  <div className="page-window-bar-button"></div>
                  <div className="page-window-bar-button"></div>
                </div>
              </div>
              <div className="page-window-content">
                <RecentProjectCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full flex relative">
        <div className="page-window">
          <div className="page-window-bar">
            <div>!BOT.(NOTBOT.)</div>
            <div className="page-window-bar-buttons">
              <div className="page-window-bar-button"></div>
              <div className="page-window-bar-button"></div>
            </div>
          </div>
          <div className="page-window-content h-full w-full relative overflow-hidden">
            <AvatarBackground className="absolute" />
            <VoxelAvatar />
            <AvatarText className="absolute" />
          </div>
        </div>
        <div className="page-window absolute bottom-12 right-12 w-[165px] h-[165px] z-10">
          <div className="page-window-bar">
            <div>Mini Game</div>
            <div className="page-window-bar-buttons">
              <div className="page-window-bar-button"></div>
              <div className="page-window-bar-button"></div>
            </div>
          </div>
          <div className="page-window-content">
            <Link href="/minigame">
              <div className="h-full w-full"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
