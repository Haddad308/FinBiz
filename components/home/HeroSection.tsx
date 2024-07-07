import React from "react";
import Highligt from "../Highligt";
import { SearchBar } from "../SearchBar";
import { Avatar, AvatarGroup } from "@nextui-org/react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-lightGray py-5 dark:bg-darkGray md:px-16">
      <Highligt
        buttonText="New"
        mainText="Introducing AI Automation"
      />
      <h1
        className=" my-4
       text-center text-5xl font-semibold text-primaryDark dark:text-white "
      >
        The Finance Solutions <br className="hidden md:block" /> For Your Business
      </h1>
      <p className=" text-center text-customGray">
        Empower your finance team. The onestop plateform for all financial management{" "}
        <br className="hidden px-2 md:block" /> of small and medium-sized business.
      </p>
      <SearchBar />
      <div className="mt-7 flex flex-col gap-3">
        <AvatarGroup isBordered>
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
          {/* <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" /> */}
        </AvatarGroup>
        <p className="text-customGray">1,200+ reviews (4.9 of 5)</p>
      </div>
    </div>
  );
};

export default HeroSection;
