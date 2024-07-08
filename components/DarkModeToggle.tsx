"use client";

import { useTheme } from "next-themes";
import { set } from "nprogress";
import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

const DarkModeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {theme === "dark" ? (
        <FaMoon
          className="cursor-pointer"
          size={35}
          onClick={toggleTheme}
        />
      ) : (
        <MdSunny
          className="cursor-pointer text-customGray"
          size={35}
          onClick={toggleTheme}
        />
      )}
    </>
  );
};

export default DarkModeToggle;
