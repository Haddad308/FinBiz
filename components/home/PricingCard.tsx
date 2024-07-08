import React from "react";
import Feature from "./Sections/Feature";
import { Popular } from "./Popular";

type cardProps = {
  type: string;
  price: number;
  isPopular: boolean;
  features: any[];
};

export const PricingCard = ({ type, price, isPopular, features }: cardProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center rounded-xl border-2 bg-lightGray p-10 shadow-md dark:border-0 dark:bg-[#161616] dark:text-white">
      {isPopular && <Popular />}
      <h1 className={`mb-10 text-3xl ${type === "Pro" ? "text-[#a3dc2f]" : ""}`}>{type}</h1>
      <p className="mb-10 text-center ">Get a professional website designed according to your needs.</p>
      <div className="flex items-end  gap-1">
        <h1 className="text-4xl font-semibold">${price}</h1>
        <p className="text-lg ">/month</p>
      </div>
      <div className=" mt-6 h-[1px] w-full bg-gray-800" />
      <div className="mt-5 grid  self-start md:grid-cols-1">
        {features.map((feature, index) => (
          <Feature
            key={index}
            featureName={feature}
          />
        ))}
      </div>
      {type === "Basic" && (
        <button className="mt-10 w-full rounded-full border-[1px] border-b-0 border-black bg-white px-5 py-2 text-black dark:bg-[#1f1f1f] dark:text-white">
          Get Started
        </button>
      )}
      {type === "Pro" && (
        <button className="mt-10 w-full rounded-full border-[1px] border-b-0 border-black bg-black px-5 py-2 text-white dark:bg-white dark:text-black">
          Get Started
        </button>
      )}
      {type === "Enterprise" && (
        <button className="mt-10 w-full rounded-full border-[1px] border-b-0 border-black bg-[#a3dc2f] px-5 py-2 text-black dark:text-white">
          Contact Us
        </button>
      )}
    </div>
  );
};
