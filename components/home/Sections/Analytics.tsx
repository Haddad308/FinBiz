import Image from "next/image";
import AnalyticsCard from "../../AnalyticsCard";
import { Avatar, AvatarGroup, Button } from "@nextui-org/react";
import Chart from "react-apexcharts";
import ApexChart from "../../charts/AreaChart";
import RadialGrad from "../RadialGrad";
import TinyNavBar from "../TinyNavBar";
import MainBanner from "../MainBanner";
import SecondBanner from "../SecondBanner";

const Analytics = () => {
  return (
    <>
      <div className="relative flex flex-col items-center  justify-center  bg-bgSplitLight  py-5 dark:bg-bgSplit dark:text-white ">
        <MainBanner />
        <RadialGrad />
        <TinyNavBar />
      </div>

      <div className=" z-10 flex flex-col items-center justify-center bg-[#F2F2F2] p-3 py-5 dark:bg-black dark:text-white ">
        <SecondBanner />
      </div>
    </>
  );
};

export default Analytics;
