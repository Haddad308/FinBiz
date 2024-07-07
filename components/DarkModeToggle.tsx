import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <>
      {!dark ? (
        <FaMoon
          className="cursor-pointer "
          size={35}
          onClick={() => darkModeHandler()}
        />
      ) : (
        <MdSunny
          className="cursor-pointer text-customGray"
          size={35}
          onClick={() => darkModeHandler()}
        />
      )}
    </>
  );
};

export default DarkModeToggle;
