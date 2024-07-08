"use client";

import React, { use, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { Avatar } from "@nextui-org/react";
import { FaStar } from "react-icons/fa";

const TestomonialSlider = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const settings = {
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    swipe: true,
    arrows: false
  };

  const images = [
    {
      name: "Samantha",
      rating: 5,
      text: "Msaaq has transformed my business, equipping me with the tools to create products, web pages, and captivating offers with ease."
    },
    {
      name: "Emily",
      rating: 5,
      text: "Msaaq has transformed my business, equipping me with the tools to create products, web pages, and captivating offers with ease."
    },
    {
      name: "Shaunie",
      rating: 5,
      text: "Msaaq has transformed my business, equipping me with the tools to create products, web pages, and captivating offers with ease."
    }
  ];

  return (
    <Slider
      {...settings}
      className=""
    >
      {images.map(({ name, rating, text }, index) => (
        <div
          key={index}
          className=" px-3"
        >
          <div className="rounded-xl border-2   bg-white p-5 dark:border-0 dark:bg-primaryDark dark:text-white ">
            <p className="mb-5">{text}</p>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar
                  isBordered
                  src={"https://i.pravatar.cc/150?u=a042581f4e29026024d"}
                  size="md"
                />
                <div>
                  <h1 className="">{name}</h1>
                  <div className="flex ">
                    {Array.from({ length: rating }).map((_, index) => (
                      <FaStar
                        key={index}
                        color="#FFCD6B"
                        width={5}
                      />
                    ))}
                    {Array.from({ length: 5 - rating }).map((_, index) => (
                      <FaStar
                        key={index}
                        color="#F2F2F2"
                        width={5}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <Image
                src={"/quotes-grey.svg"}
                alt="testomonial"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestomonialSlider;
