import { Button } from "@nextui-org/react";
import React from "react";

const TinyNavBar = () => {
  return (
    <div
      className="z-20 my-10 mt-10 flex items-center justify-center  gap-2 rounded-full border-[1px]  border-white bg-white bg-opacity-20 p-2 
      text-xs font-semibold dark:border-gray-300 md:grid-cols-5 md:gap-5 md:text-xl  md:font-normal "
    >
      <p className="text-center ">Product</p>
      <p className="text-center ">Integration</p>
      <p className="text-center ">Demo</p>
      <p className="text-center ">Pricing</p>
      <Button className=" col-span-2 cursor-pointer rounded-full bg-white font-semibold text-black md:col-span-1">
        Login
      </Button>
    </div>
  );
};

export default TinyNavBar;
