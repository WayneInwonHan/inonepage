"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import Socials from "./Socials";
import PageTitle from "./PageTitle";

const Header = () => {
  const pathname = usePathname();
  let title, subtitle;

  switch (pathname) {
    case "/":
      subtitle = "INONEPAGE.";
      title = "INWON HAN";
      break;
    case "/about":
      subtitle = "A Little About Me";
      title = "EXPERIENCE";
      break;
    case "/work":
      subtitle = "Recent Works";
      title = "SHOWCASE";
      break;
    case "/blog":
      subtitle = "Multiple";
      title = "PERSPECTIVES";
      break;
    case "/doodle":
      subtitle = "Scribble Space";
      title = "DOODLES";
      break;
    default:
      subtitle = "INONEPAGE.";
      title = "INWON HAN";
  }

  const titleStyle =
    "text-[7rem] font-bold p-0 text-white leading-none text-shadow-border";
  const subtitleStyle =
    "text-[4rem] font-bold p-0 text-white leading-none ml-[3px] text-shadow-border";

  return (
    <header>
      <div className="w-full h-[135px] bg-black z-50 mt-12">
        <div className="flex h-full justify-between items-center">
          <PageTitle
            title={title}
            subtitle={subtitle}
            titleStyle={titleStyle}
            subtitleStyle={subtitleStyle}
          />
          <Logo />
          <div className="w-1/2 flex justify-end items-center gap-3 pr-10 z-50">
            <Socials />
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
