import Image from "next/image";
import React from "react";

type CardProps = {
  ValueType: string;
  value: number;
};

const AnalyticsCard = ({ ValueType, value }: CardProps) => {
  return (
    <div className="rounded-xl border-2 bg-white p-3 dark:border-gray-900 dark:dark:bg-[#1a1a1a]">
      <div className="flex items-center justify-between gap-9">
        <p>Total {ValueType}</p>
        <p
          className={`${
            ValueType === "profit" ? "text-success-500" : ValueType === "revenue" ? "text-red-500" : "text-blue-700"
          }  `}
        >
          +18.23
        </p>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <p className="text-4xl  md:text-2xl lg:text-4xl">${value}</p>
        <Image
          src={ValueType === "profit" ? "/graph.svg" : ValueType === "revenue" ? "/graph (1).svg" : "/graph (2).svg"}
          width={40}
          height={40}
          alt="graph"
        />
      </div>
    </div>
  );
};

export default AnalyticsCard;
