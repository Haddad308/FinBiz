import React from "react";
import { BsStars } from "react-icons/bs";

export const Popular = () => {
  return (
    <div className="absolute right-3 top-3 flex items-center justify-center gap-1 rounded-full border-[2px] border-[#33C6AB] bg-primaryDark px-2 py-1 text-[#33C6AB] md:right-6 md:top-4">
      <BsStars />
      <p className="font-semibold">Popular</p>
    </div>
  );
};
