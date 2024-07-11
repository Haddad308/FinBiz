import { Button, Input } from "@nextui-org/react";
import React from "react";

export const SearchBar = () => {
  return (
    <div className="relative mt-5 ">
      <Input
        radius={"full"}
        type="Keyword"
        placeholder="Enter your email adress"
        className="w-[300px] border-0 dark:text-white md:w-96"
        variant="bordered"
        color="primary"
      />
      <Button className="absolute right-0 top-0 rounded-full bg-primaryDark font-semibold text-white dark:bg-white dark:text-black">
        Book a Demo
      </Button>
    </div>
  );
};
