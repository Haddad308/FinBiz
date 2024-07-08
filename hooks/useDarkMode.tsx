import { useState, useEffect } from "react";

const useDarkMode = (): [boolean, () => void] => {
  const [dark, setDark] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDark(savedMode === "true");
    } else {
      setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      if (dark) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
      localStorage.setItem("darkMode", dark.toString());
    }
  }, [dark, isClient]);

  const toggleDarkMode = () => {
    setDark((prevDark) => !prevDark);
  };

  return [dark, toggleDarkMode];
};

export default useDarkMode;
