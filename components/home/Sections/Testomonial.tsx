import React from "react";
import TestomonialSlider from "../TestmonialSlider";
import Highligt from "@/components/home/Highligt";
import { FaArrowRight } from "react-icons/fa";

const Testomonial = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-[#F2F2F2] py-8 dark:bg-black md:px-16">
      <Highligt
        mainText="Testimonials"
        quote={true}
      >
        <FaArrowRight className="text-[#a3dc2f]" />
      </Highligt>
      <div className="flex w-[90%] flex-col gap-5 md:w-[100%]">
        <h1 className=" my-4 text-center text-5xl font-semibold text-primaryDark dark:text-white ">
          What are people saying
        </h1>
        <p className="text-center text-customGray">
          &quot;Thank you for your trust in Crypt Land! We are grateful for your feedback and are committed to providing
          the best [products/services offered]. Read what our clients have to say about their experience with us.
        </p>
        <TestomonialSlider />
      </div>
    </div>
  );
};

export default Testomonial;
