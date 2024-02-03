"use client";
import React, { useState, useEffect } from "react";

import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
<<<<<<< HEAD
import Socials from "./Socials";
=======
>>>>>>> 9b46047 (set up initial layout)

const Header = () => {
  return (
    <header>
<<<<<<< HEAD
      <div className="absolute w-full h-52 bg-black z-100 mt-12">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="w-full flex justify-end items-center gap-x-6">
            <Socials />
=======
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
>>>>>>> 9b46047 (set up initial layout)
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
