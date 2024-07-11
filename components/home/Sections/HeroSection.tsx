import { Avatar, AvatarGroup } from "@nextui-org/react";
import React from "react";
import Highligt from "../Highligt";
import { SearchBar } from "../SearchBar";

const HeroSection: React.FC = React.memo(function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-lightGray py-5 dark:bg-darkGray md:px-16">
      <Highligt
        buttonText="New"
        mainText="Introducing AI Automation"
        isMain={true}
      />
      <h1 className="my-4 text-center text-5xl font-semibold text-primaryDark dark:text-white">
        The Finance Solutions <br className="hidden sm:block md:block" /> For Your Business
      </h1>
      <p className="text-center text-customGray">
        Empower your finance team. The one-stop platform for all financial management
        <br /> of small and medium-sized businesses.
      </p>
      <SearchBar />
      <div className="mt-7 flex flex-col items-center justify-center gap-3">
        <AvatarGroup isBordered>
          {[
            "/Avatars/avater1.jpeg",
            "/Avatars/avater2.jpeg",
            "/Avatars/avater3.jpeg",
            "/Avatars/avater4.jpeg",
            "/Avatars/avater5.jpeg"
          ].map((src, index) => (
            <Avatar
              key={index}
              src={src}
            />
          ))}
        </AvatarGroup>
        <p className="text-customGray">1,200+ reviews (4.9 of 5)</p>
      </div>
    </div>
  );
});
export default HeroSection;
