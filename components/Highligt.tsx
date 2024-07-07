import { Button } from "@nextui-org/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

type HighligtProps = {
  buttonText?: string;
  mainText: string;
};

const Highligt = ({ buttonText, mainText }: HighligtProps) => {
  return (
    <div className=" mt-5 flex items-center gap-2 rounded-full border-2 border-b-0 border-[#364c09] p-2 text-success-600 dark:bg-[#171f05]">
      {buttonText ? (
        <Button
          size="sm"
          className="rounded-full bg-[#a3dc2f]  text-xl text-white
      "
        >
          {buttonText}
        </Button>
      ) : null}
      <p className="text-[#a3dc2f]">{mainText}</p>
      <FaArrowRight className="text-[#a3dc2f]" />
    </div>
  );
};

export default Highligt;
