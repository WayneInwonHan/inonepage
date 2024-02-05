import { FaHeartbeat } from "react-icons/fa";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="absolute w-full bottom-0 flex justify-center">
      <div className="flex items-center text-black rounded-s text-[10px] bg-[#fcfbf4] border-2 border-black pr-2 pl-2">
        &copy; 2024 by{" "}
        <Link className="font-bold pl-1" href="/">
          Inwon Han
        </Link>
        . Handcrafted with{" "}
        <FaHeartbeat className="text-red-500 text-[12px] ml-1" />{" "}
      </div>
    </footer>
  );
};

export default Footer;
