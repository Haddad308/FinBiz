import React from "react";
import Highligt from "../Highligt";
import { SearchBar } from "../SearchBar";
import { Avatar, AvatarGroup } from "@nextui-org/react";

const HeroSection = () => {
  return (
    <div className="bg-lightGray dark:bg-darkGray flex flex-col items-center justify-center gap-3 py-5 md:px-16">
      <Highligt
        buttonText="New"
        mainText="Introducing AI Automation"
      />
      <h1
        className=" text-primaryDark
       my-4 text-center text-5xl font-semibold dark:text-white "
      >
        The Finance Solutions <br className="hidden md:block" /> For Your Business
      </h1>
      <p className=" text-customGray text-center">
        Empower your finance team. The onestop plateform for all financial management <br /> of small and medium-sized
        business.
      </p>
      <SearchBar />
      <div className="mt-7 flex flex-col items-center justify-center gap-3">
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
