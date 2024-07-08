import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { DiGithubAlt } from "react-icons/di";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { Subscribe } from "../Subscribe";

const Footer = () => {
  return (
    <div className="relative bottom-0 left-0 right-0 grid gap-3 bg-[#e0e0e0] bg-gradient-to-r px-10 py-7  dark:bg-black dark:text-white  sm:grid-cols-1 md:grid-cols-3 md:px-28 lg:grid-cols-5">
      <div className="absolute bottom-0 h-[2px] w-full bg-gray-300 dark:bg-gray-800  "></div>

      <div className="flex flex-col justify-start gap-4 md:col-span-2">
        <div className="flex items-center  gap-2">
          <Image
            width={25}
            height={25}
            className="my-2"
            src="/logo.svg"
            alt="logo"
          />
          <p className="text-xl font-semibold text-black dark:text-white ">FinBiz</p>
        </div>

        <p className="">Data analysis software is a type of software tool used for data analysis and reporting.</p>
        <div className="flex gap-2 dark:text-black">
          <div className="rounded-full bg-white p-[5px]">
            <FaFacebookF />
          </div>
          <div className="rounded-full bg-white p-[5px]">
            <DiGithubAlt />
          </div>
          <div className="rounded-full bg-white p-[5px]">
            <FaXTwitter />
          </div>
          <div className="rounded-full bg-white p-[5px]">
            <LuInstagram />
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-4">
        <h1 className="text-xl font-bold">Company</h1>
        <div>
          <p className="cursor-pointer transition-all duration-300 hover:text-blue-800">Service</p>
          <p className="cursor-pointer transition-all duration-300 hover:text-blue-800">Resources</p>
          <p className="cursor-pointer transition-all duration-300 hover:text-blue-800">About Us</p>
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-4">
        <h1 className="text-xl font-bold">Help</h1>
        <div>
          <p className="cursor-pointer transition-all duration-300 hover:text-blue-800">Customer Support</p>
          <p className="cursor-pointer transition-all duration-300 hover:text-blue-800">Terms & Conditions</p>
          <p className="cursor-pointer transition-all duration-300 hover:text-blue-800">Privacy Policy</p>
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-4">
        <h1 className="text-xl font-bold">Subscribe to Newsletter</h1>
        <Subscribe />
      </div>
    </div>
  );
};

export default Footer;
