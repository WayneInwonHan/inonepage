"use client";

import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import Link from "next/link";

const icons = [
  {
    path: "https://github.com/WayneInwonHan",
    name: <FaGithub size="2rem" />,
  },
  {
    path: "https://www.linkedin.com/in/wayne-inwon-han",
    name: <FaLinkedin size="2rem" />,
  },
];

const Socials = ({ iconsStyles }) => {
  return (
    <div className="flex gap-3 text-white">
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
