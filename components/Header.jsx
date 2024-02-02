"use client";
import React, { useState, useEffect } from "react";

import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
