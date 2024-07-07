import Image from "next/image";
import React from "react";

const AnalyticsCard = () => {
  return (
    <div className="rounded-xl border-2 bg-white p-3 dark:border-gray-900 dark:dark:bg-[#1a1a1a]">
      <div className="flex items-center justify-between gap-9">
        <p>Total Profit</p>
        <p className="text-red-500">+18.23</p>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <p className="text-4xl font-semibold">$350.240</p>
        <Image
          src={"/graph (1).svg"}
          width={40}
          height={40}
          alt="graph"
        />
      </div>
    </div>
  );
};

export default AnalyticsCard;
