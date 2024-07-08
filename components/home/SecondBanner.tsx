"use client";

import useDarkMode from "@/hooks/useDarkMode";
import { Avatar, AvatarGroup, Button } from "@nextui-org/react";
import Image from "next/image";
import React, { use, useEffect } from "react";

const SecondBanner = () => {
  // *We need to optimize the card components in the SecondBanner component

  const [dark, _] = useDarkMode();

  useEffect(() => {
    console.log("check dark", dark);
  }, [dark]);

  return (
    <div className="w-[80%]">
      {/* Upperbound */}
      <div className=" grid w-full gap-4 md:grid-cols-8">
        {/* Card1 */}
        <div className="col-span-4 flex flex-col items-center justify-center gap-4 rounded-xl border-2 bg-white p-3 dark:border-gray-900 dark:bg-[#1a1a1a] md:col-span-2">
          <h1 className="text-center text-xl ">Simple analytics</h1>
          <p className="text-center text-sm text-customGray">
            Make informed decisions backed by data through our analytics tools. 
          </p>
          <Image
            src={!dark ? "/div.contnet (1).svg" : "div.contnet.svg"}
            width={300}
            height={300}
            alt="data report"
          />
        </div>

        {/* Card2 */}
        <div className="col-span-4 flex flex-col items-center justify-end gap-4 rounded-xl border-2 bg-white p-3 pb-0 dark:border-gray-900 dark:bg-[#1a1a1a]">
          <h1 className="text-center text-xl ">Boosting Business. Today and Tomorrow.</h1>
          <p className="text-center text-sm text-customGray">
            Bring harmony to team expenses with budget limits and real-time monitiring. Freedom for your staff. Peace of
            mind for you.
          </p>
          <div className="flex w-full items-center justify-center rounded-xl bg-[#f4f4f4] p-5 dark:bg-primaryDark ">
            <Image
              src="/graph.png"
              width={500}
              height={500}
              alt="data report"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className=" col-span-4 flex flex-col items-center justify-center gap-4 rounded-xl border-2 bg-white p-3 dark:border-gray-900 dark:bg-[#1a1a1a] md:col-span-2">
          <p className="text-center"> Make informed decisions backed by data through our analytics tools. </p>
          <div className="flex h-[250px] w-[250px]  items-center justify-center rounded-full bg-[#f4f4f4] md:h-[90%] md:w-[90%]">
            <div className="flex h-[200px] w-[200px] items-center justify-center rounded-full bg-[#e5eadb] md:h-[80%] md:w-[80%]">
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

      {/* Lowerbound */}
      <div className=" mt-4 grid w-full gap-4 md:grid-cols-2">
        {/* Card 1 */}
        <div className=" flex flex-col items-center justify-end gap-4 rounded-xl border-2 bg-white p-3 pb-0 dark:border-gray-900 dark:bg-[#1a1a1a]">
          <p className="text-center">
            Bring harmony to team expenses with budget limits and real-time monitiring. Freedom for your staff. Peace of
            mind for you.
          </p>
          <div className="grid grid-cols-2 gap-5">
            <div className="mt-20 flex w-full flex-col items-start justify-center gap-5 rounded-xl bg-[#f4f4f4] p-5">
              <h1 className="text-xl font-bold dark:text-black">$3453.00</h1>
              <div className="h-[2px] w-[115%] bg-black"></div>
              <Image
                src="/paragraph.svg"
                width={800}
                height={800}
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

        {/* Card 2 */}
        <div
          className="flex flex-col gap-6 rounded-xl  border-2 bg-white p-5 
            text-black dark:border-gray-900 dark:dark:bg-[#1a1a1a] 
             "
        >
          <h1 className="text-4xl font-bold ">
            Optimise expense <br /> Management as a team
          </h1>
          <p className="text-customGray">
            Bring harmony to team expenses with budget limits and real-time monitiring. Freedom for your staff. Peace of
            mind for you.
          </p>
          <Button className="w-[40%] rounded-full  bg-primaryDark font-semibold text-white dark:bg-white dark:text-black lg:w-[30%]">
            Explore more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;
