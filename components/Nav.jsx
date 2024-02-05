"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

// icons
import {
  FaHome,
  FaUser,
  FaCode,
  FaArchive,
  FaMagic,
  FaEnvelope,
} from "react-icons/fa";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <FaHome /> },
  { name: "about", path: "/about", icon: <FaUser /> },
  { name: "work", path: "/work", icon: <FaCode /> },
  { name: "perspective", path: "/blog", icon: <FaArchive /> },
  { name: "doodle", path: "/doodle", icon: <FaMagic /> },
  {
    name: "contact",
    path: "/contact",
    icon: <FaEnvelope />,
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-3 fixed h-max bottom-0 mt-auto xl:right-[0%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      {/* inner */}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-7 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-[#fcfbf4] text-3xl xl:text-xl xl:rounded-md border-[2px] border-black">
        {navData.map((link, index) => {
          const isActive = link.path === pathname;
          return (
            <Link href={link.path} key={index} legacyBehavior>
              <a
                className={`${
                  isActive ? "text-primary" : "text-accent"
                } relative flex items-center group hover:text-accent transition-all duration-300`}
              >
                {/* tooltip */}
                {isActive && (
                  <div className="absolute pr-12 right-0 hidden xl:flex">
                    <div className="bg-[#fcfbf4] border-2 border-black relative flex text-primary items-center p-[6px] rounded-[3px]">
                      <div className="text-[12px] leading-none font-semibold capitalize">
                        {link.name}
                      </div>
                      {/* triangle */}
                      <div className="border-solid border-black border-l-8 border-2 border-r-0 absolute -right-2"></div>
                    </div>
                  </div>
                )}
                {/* icon */}
                <div>{link.icon}</div>
              </a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
