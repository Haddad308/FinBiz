import React from "react";
import Highligt from "@/components/Highligt";
import { IoPricetagsOutline } from "react-icons/io5";
import { PricingCard } from "../PricingCard";
import Image from "next/image";
import { Button } from "@nextui-org/react";

const Pricing = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-[#F2F2F2] py-5 dark:bg-primaryDark md:px-16">
      <Highligt
        mainText="Pricing"
        quote={true}
      >
        <IoPricetagsOutline className="text-[#a3dc2f]" />
      </Highligt>
      <div className="mb-7 flex  w-[80%] flex-col gap-5 md:w-full">
        <h1 className=" my-4 text-center text-5xl font-semibold text-primaryDark dark:text-white ">
          Find the right plan
        </h1>
        <p className="text-center text-customGray">
          &quot;Invest in your company&apos;s future with our comprehensive financial solution. Contact us for pricing
          details and see how we can help you streamline your finances and reach your business goals.
        </p>
      </div>

      <div className="grid w-[90%] gap-7 md:w-full md:grid-cols-3  md:gap-5">
        <PricingCard
          price={150}
          type="Basic"
          features={[
            "Get a fully designed Website.",
            "Webflow Development",
            "Limited Support",
            "Standart integrations"
          ]}
          isPopular={false}
          key={0}
        />
        <PricingCard
          price={300}
          type="Pro"
          features={[
            "Get a fully designed Website.",
            "Webflow Development",
            "Limited Support",
            "Standart integrations"
          ]}
          isPopular={true}
          key={1}
        />
        <PricingCard
          price={500}
          type="Enterprise"
          features={[
            "Get a fully designed Website.",
            "Webflow Development",
            "Limited Support",
            "Standart integrations"
          ]}
          isPopular={false}
          key={2}
        />
      </div>

      {/* Banner */}
      <div className=" mb-9 mt-20 grid w-[90%] items-center justify-center rounded-xl  bg-lightGray p-3 shadow-md dark:border-0 dark:bg-[#161616] dark:text-white md:grid-cols-3">
        <Image
          src="/Rectangle 388.svg"
          alt="Banner Image"
          width={500}
          height={300}
          className="md:order-3"
        />
        <div className="md:col-span-2 md:mx-20 md:ms-10 ">
          <h1 className=" mt-10 text-4xl  font-semibold md:mt-0">
            Lets Upgrade your finances experience by using FinBiz
          </h1>
          <div className="flex gap-3">
            <button className="mt-10 w-full rounded-full border-[1px] border-b-0 border-black bg-[#a3dc2f] px-5 py-2 text-black dark:text-white">
              Contact Us
            </button>
            <button className="mt-10 w-full rounded-full border-[1px] border-b-0 border-black bg-black px-5 py-2 text-white dark:bg-white dark:text-black">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
