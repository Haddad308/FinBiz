"use client";

import { Avatar, AvatarGroup, Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import Image from "next/image";

const SecondBanner = () => {
  // *We need to optimize the card components in the SecondBanner component by creating card components for each card.

  const { resolvedTheme } = useTheme();

  return (
    <div className="z-30 w-[80%]">
      {/* Upperbound */}
      <div className=" grid w-full gap-4 md:grid-cols-8">
        {/* Card1 */}
        <div className="col-span-4 flex flex-col items-center justify-center gap-4 rounded-xl border-2 bg-white p-3 dark:border-gray-900 dark:bg-[#1a1a1a] md:col-span-2">
          <h1 className="text-center text-xl ">Simple analytics</h1>
          <p className="text-center text-sm text-customGray">
            Make informed decisions backed by data through our analytics tools. 
          </p>
          <Image
            src={resolvedTheme !== "dark" ? "/div.contnet (1).svg" : "div.contnet.svg"}
            width={300}
            height={300}
            alt="data report"
          />
        </div>

        {/* Card2 */}
        <div className="col-span-4 flex flex-col items-center justify-end gap-4 rounded-xl border-2 bg-white p-3 pb-0 dark:border-gray-900 dark:bg-[#1a1a1a]">
          <h1 className="text-center text-xl font-semibold ">
            Boosting Business. <br /> Today and Tomorrow.
          </h1>
          <p className="text-center text-sm text-customGray">
            Bring harmony to team expenses with budget limits and real-time monitiring. Freedom for your staff. Peace of
            mind for you.
          </p>
          <div className="flex w-full items-center justify-center rounded-xl bg-[#f4f4f4] p-5 dark:bg-primaryDark ">
            <Image
              src="/ar/graph.png"
              width={500}
              height={500}
              alt="data report"
              loading="eager"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className=" col-span-4 flex flex-col items-center justify-center gap-4 rounded-xl border-2 bg-white p-3 dark:border-gray-900 dark:bg-[#1a1a1a] md:col-span-2">
          <h1 className="text-center text-xl ">Easy collaboration</h1>
          <p className="text-center text-sm text-customGray">
            Make informed decisions backed by data through our analytics tools. 
          </p>
          <div className="flex h-[250px] w-[250px]  items-center justify-center rounded-full bg-[#f4f4f4] dark:border-[1px] dark:border-gray-700 dark:bg-transparent md:h-[120px]  md:w-[120px] lg:h-[200px]  lg:w-[200px]">
            <div className="flex h-[200px] w-[200px] items-center justify-center rounded-full bg-[#e5eadb] dark:border-[1px] dark:border-gray-700  dark:bg-primaryDark md:h-[80px]  md:w-[80px] lg:h-[150px]  lg:w-[150px]">
              <AvatarGroup>
                <Avatar src="/Avatars/avater1.jpeg" />
                <Avatar src="/Avatars/avater2.jpeg" />
                <Avatar src="/Avatars/avater3.jpeg" />
              </AvatarGroup>
            </div>
          </div>
        </div>
      </div>

      {/* Lowerbound */}
      <div className=" mt-4 grid w-full gap-4 md:grid-cols-2">
        {/* Card 1 */}
        <div className="flex  flex-col items-start justify-end gap-4 rounded-xl border-2 bg-white p-3 pb-0 dark:border-gray-900 dark:bg-[#1a1a1a]">
          <h1 className="text-start text-xl font-semibold">Real-time accounting at your fingertips.</h1>

          <p className="text-start text-sm text-customGray">
            Take the pain out of book keeping! Wave goodbye to mountains of paperwork and endless email reminders.
            There`s now a new way of accounting.
          </p>
          <div className="grid grid-cols-2 gap-5">
            <div className="mt-20 flex w-full flex-col items-start justify-center gap-5 rounded-xl border-[1px] bg-[#f4f4f4] p-5  dark:border-gray-700 dark:bg-primaryDark">
              <h1 className="text-xl font-bold dark:text-white">$3453.00</h1>
              <div className="h-[2px] w-[115%] bg-black dark:bg-white"></div>
              <Image
                src="/paragraph.svg"
                width={800}
                height={800}
                alt="data report"
              />
            </div>
            <div className=" shadow-x;  mb-10 flex w-full items-center justify-center rounded-xl border-[1px] dark:border-gray-700 ">
              <Image
                src={resolvedTheme === "dark" ? "/Frame 1618872973 (1).svg" : "Frame 1618872973.svg"}
                width={500}
                height={500}
                alt="data report"
              />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="flex flex-col gap-6 rounded-xl  border-2 bg-white p-5 
            text-black dark:border-gray-900 dark:dark:bg-[#1a1a1a] 
             "
        >
          <h1 className="text-4xl font-bold dark:text-white">
            Optimise expense <br /> Management as a team
          </h1>
          <p className="text-start text-sm text-customGray">
            Bring harmony to team expenses with budget limits and real-time monitiring. Freedom for your staff. Peace of
            mind for you.
          </p>
          <Button className="w-[50%] rounded-full  bg-primaryDark font-semibold text-white dark:bg-white dark:text-black lg:w-[30%]">
            Explore more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;
