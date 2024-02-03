"use client";
import React, { useState, useEffect } from "react";

import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import Socials from "./Socials";

const Header = () => {
  return (
    <header>
      <div className="absolute w-full h-52 bg-black z-100 mt-12">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="w-full flex justify-end items-center gap-x-6">
            <Socials />
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
