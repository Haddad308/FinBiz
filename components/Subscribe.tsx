import { Button, Input } from "@nextui-org/react";
import React from "react";

export const Subscribe = () => {
  return (
    <div className="relative mt-5 w-[280px] rounded-2xl bg-white">
      <Input
        type="Keyword"
        placeholder="Enter your email adress"
        className="md: border-0 dark:text-white"
        variant="flat"
      />
      <Button className="absolute right-0 top-0  bg-[#a3dc2f] font-semibold text-white dark:text-black">Join</Button>
    </div>
  );
};
