import Image from "next/image";
import AnalyticsCard from "../AnalyticsCard";
import { Avatar, AvatarGroup, Button } from "@nextui-org/react";
import Chart from "react-apexcharts";
import ApexChart from "../charts/AreaChart";

const Analytics = () => {
  return (
    <>
      <div className="relative flex flex-col items-center  justify-center  bg-bgSplitLight  py-5 dark:bg-bgSplit dark:text-white ">
        <div className="  z-10 w-[80%] rounded-xl border-0 bg-[#f2f2f2] p-3 shadow-2xl dark:border-gray-900 dark:bg-black">
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
            <div className="col-span-4 hidden rounded-xl border-2 bg-white text-black dark:border-gray-900  dark:dark:bg-[#1a1a1a] md:block">
              {/* <ApexChart /> */}
            </div>
          </div>
        </div>
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
        <div className="absolute top-[35rem] z-0 h-[350px]  w-[350px] bg-bgRadial md:top-[15rem] md:h-[500px] md:w-[500px]"></div>
      </div>

      <div className=" z-10 flex flex-col items-center justify-center bg-[#F2F2F2] p-3 py-5 dark:bg-black dark:text-white ">
        <div className="w-[80%]">
          <div className=" grid w-full gap-4 md:grid-cols-8">
            <div className="col-span-2  flex flex-col items-center justify-center gap-4 rounded-xl border-2 bg-white p-3 dark:border-gray-900 dark:bg-[#1a1a1a]">
              <p className="text-center">Make informed decisions backed by data through our analytics tools. </p>
              <Image
                src="/div.contnet (1).svg"
                width={300}
                height={300}
                alt="data report"
              />
            </div>

            <div className="col-span-4 flex flex-col items-center justify-end gap-4 rounded-xl border-2 bg-white p-3 pb-0 dark:border-gray-900 dark:bg-[#1a1a1a]">
              <p className="text-center">
                Bring harmony to team expenses with budget limits and real-time monitiring. Freedom for your staff.
                Peace of mind for you.
              </p>
              <div className="flex w-full items-center justify-center rounded-xl bg-[#f4f4f4] p-5 ">
                <Image
                  src="/graph.png"
                  width={500}
                  height={500}
                  alt="data report"
                />
              </div>
            </div>

            <div className="col-span-2 flex flex-col items-center justify-center gap-4 rounded-xl border-2 bg-white p-3 dark:border-gray-900 dark:bg-[#1a1a1a]">
              <p className="text-center"> Make informed decisions backed by data through our analytics tools. </p>
              <div className="flex h-[200px] w-[200px] items-center justify-center rounded-full bg-[#f4f4f4]">
                <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full bg-[#e5eadb]">
                  <AvatarGroup>
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                    {/* <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" /> */}
                  </AvatarGroup>
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-4 grid w-full gap-4 md:grid-cols-2">
            <div className=" flex flex-col items-center justify-end gap-4 rounded-xl border-2 bg-white p-3 pb-0 dark:border-gray-900 dark:bg-[#1a1a1a]">
              <p className="text-center">
                Bring harmony to team expenses with budget limits and real-time monitiring. Freedom for your staff.
                Peace of mind for you.
              </p>
              <div className="grid grid-cols-2 gap-5">
                <div className="mt-20 flex w-full flex-col items-start justify-center gap-5 rounded-xl bg-[#f4f4f4] p-5">
                  <h1 className="text-xl font-bold dark:text-black">$3453.00</h1>
                  <Image
                    src="/Line 34.svg"
                    width={500}
                    height={500}
                    alt="data report"
                  />
                  <Image
                    src="/paragraph.svg"
                    width={500}
                    height={500}
                    alt="data report"
                  />
                </div>
                <div className=" mb-10  flex w-full items-center justify-center rounded-xl bg-[#f4f4f4]  ">
                  <Image
                    src="/Frame%201618872973.svg"
                    width={500}
                    height={500}
                    alt="data report"
                  />
                </div>
              </div>
            </div>
            <div
              className="flex flex-col gap-6 rounded-xl  border-2 bg-white p-5 
            text-black dark:border-gray-900 dark:dark:bg-[#1a1a1a] 
             "
            >
              <h1 className="text-4xl font-bold ">
                Optimise expense <br /> Management as a team
              </h1>
              <p className="text-customGray">
                Bring harmony to team expenses with budget limits and real-time monitiring. Freedom for your staff.
                Peace of mind for you.
              </p>
              <Button className="w-[50%] rounded-full  bg-primaryDark font-semibold text-white dark:bg-white dark:text-black md:w-[30%]">
                Explore more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
