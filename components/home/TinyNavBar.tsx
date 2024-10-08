import { Button } from "@nextui-org/react";
import Link from "next/link";
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
      <Link
        href={"/login"}
        className="col-span-2 cursor-pointer rounded-full bg-white px-4 py-2 font-semibold text-black md:col-span-1"
      >
        Login
      </Link>
    </div>
  );
};

export default TinyNavBar;
