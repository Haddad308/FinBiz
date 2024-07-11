"use client";

import React from "react";
import AnalyticsCard from "./AnalyticsCard";
import { Button } from "@nextui-org/react";
import ApexChart from "../charts/AreaChart";
import Image from "next/image";
import { useTheme } from "next-themes";

const MainBanner = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="  z-10 w-[80%] rounded-xl border-0 bg-[#f2f2f2] p-3 shadow-2xl dark:border-gray-900 dark:bg-black">
      <div className=" grid w-full gap-4 md:grid-cols-3">
        <AnalyticsCard
          value={400.605}
          ValueType="profit"
        />
        <AnalyticsCard
          value={200.0}
          ValueType="revenue"
        />
        <AnalyticsCard
          value={350.24}
          ValueType="sold"
        />
      </div>

      <div className=" mt-4 grid w-full gap-4 md:grid-cols-5">
        <div className="rounded-xl border-2 bg-white p-3 dark:border-gray-900 dark:bg-[#1a1a1a]">
          <p>Total Balance</p>
          <p className=" text-4xl  md:text-xl lg:text-3xl">$320.240</p>
          <Button className="mt-2 w-full rounded-md bg-black font-medium text-white dark:bg-white dark:text-black">
            Transfer
          </Button>
          <hr className="my-4 dark:border-gray-700" />
          <p>Total Balance</p>
          <p className=" text-4xl md:text-xl lg:text-3xl ">$400.240</p>
          <hr className="my-4 dark:border-gray-700" />
          <p>Total Balance</p>
          <p className=" text-4xl md:text-xl lg:text-3xl ">$550.240</p>
        </div>
        <div className="col-span-4 hidden rounded-xl border-2  bg-white text-black dark:border-gray-900  dark:dark:bg-[#1a1a1a] md:block">
          <Image
            src={resolvedTheme !== "dark" ? "/ar/s0vrw3ylf.svg" : "/ar/s0vrw3ylf.svg"}
            width={900}
            height={800}
            alt="sdfsdfsdfs"
          />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
