"use client";

import useDarkMode from "@/hooks/useDarkMode";
import React from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

const DarkModeToggle: React.FC = () => {
  const [dark, toggleDarkMode] = useDarkMode();

  return (
    <>
      {!dark ? (
        <FaMoon
          className="cursor-pointer"
          size={35}
          onClick={toggleDarkMode}
        />
      ) : (
        <MdSunny
          className="cursor-pointer text-customGray"
          size={35}
          onClick={toggleDarkMode}
        />
      )}
    </>
  );
};

export default DarkModeToggle;
