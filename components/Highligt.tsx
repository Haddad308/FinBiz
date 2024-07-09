import { Button } from "@nextui-org/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { LiaComments } from "react-icons/lia";

type HighligtProps = {
  buttonText?: string;
  mainText: string;
  quote?: boolean;
  children?: React.ReactNode;
  isMain?: boolean;
};

const Highligt = ({ buttonText, mainText, quote, isMain, children }: HighligtProps) => {
  return (
    <div className=" mt-5 flex items-center gap-2 rounded-full border-2 border-b-0 border-[#364c09] bg-white  p-2 text-success-600 dark:bg-[#171f05]">
      {buttonText ? (
        <Button
          size="sm"
          className="rounded-full bg-[#a3dc2f]  text-xl text-white
      "
        >
          {buttonText}
        </Button>
      ) : null}
      {quote ? <LiaComments className="text-black dark:text-[#a3dc2f]" /> : null}

      <p className="font-semibold text-black dark:text-[#a3dc2f]">{mainText}</p>
      {buttonText ? children : null}
      {isMain ? <FaArrowRight className="text-black dark:text-[#a3dc2f]" /> : null}
    </div>
  );
};

export default Highligt;
