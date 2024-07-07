import Image from "next/image";
import AnalyticsCard from "../AnalyticsCard";
import { Button } from "@nextui-org/react";
import Chart from "react-apexcharts";
import ApexChart from "../charts/AreaChart";

const Analytics = () => {
  return (
    <div className="relative flex flex-col items-center  justify-center  bg-bgSplitLight py-5 dark:bg-bgSplit dark:text-white ">
      <div className=" z-10 w-[80%] rounded-xl border-0 bg-[#f2f2f2] p-3 shadow-2xl dark:border-gray-900 dark:bg-black">
        <div className=" grid w-full gap-4 md:grid-cols-3">
          <AnalyticsCard />
          <AnalyticsCard />
          <AnalyticsCard />
        </div>
        <div className=" mt-4 grid w-full gap-4 md:grid-cols-5">
          <div className="rounded-xl border-2 bg-white p-3 dark:border-gray-900 dark:bg-[#1a1a1a]">
            <p>Total Balance</p>
            <p className="text-4xl font-medium">$320.240</p>
            <Button className="mt-2 w-full rounded-md bg-black font-medium text-white dark:bg-white dark:text-black">
              Transfer
            </Button>
            <hr className="my-4 dark:border-gray-700" />
            <p>Total Balance</p>
            <p className="text-4xl font-medium">$400.240</p>
            <hr className="my-4 dark:border-gray-700" />
            <p>Total Balance</p>
            <p className="text-4xl font-medium">$550.240</p>
          </div>
          <div className="col-span-4 hidden rounded-xl border-2 bg-white dark:border-gray-900 dark:dark:bg-[#1a1a1a]  md:block">
            <ApexChart />
          </div>
        </div>
      </div>
      <div
        className="z-20 mt-5 flex items-center justify-center  gap-2 rounded-full border-[1px]  border-white bg-white bg-opacity-20 p-2 
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
      <div className="absolute top-[35rem] z-0 h-[350px]  w-[350px] bg-bgRadial md:top-[15rem] md:h-[500px] md:w-[500px]"></div>
    </div>
  );
};

export default Analytics;
