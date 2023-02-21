import React from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
const Hero = () => {
  return (
    <div>
      <div className=" px-134 sm:px-0">
        <div className="max-w-[1258px] mx-auto">
          <div className="bg-[#FFFFFF] pt-20 pb-[64px] sm:mb-[60px]  sm:pt-[60px]">
            <h1 className="text-[45px] text-darkgray py-10 font-light text-left pt-30 px-[216px] leading-[60px] sm:text-[33px] sm:leading-[40px] sm:px-5 pb-[40px] sm:max-w-md sm:pb-[60px]">
              You don’t just become something, you become someone
            </h1>
          </div>
        </div>
      </div>
      <div className="relative max-w-[1700px] mx-auto">
        <div className="flex  shadow-medium max-w-[1008px] mx-auto left-[264px] absolute right-[264px]  z-10 top-0 -translate-y-1/2 sm:-translate-y-full sm:top-[0px] sm:flex-col sm:right-0 sm:left-0  ">
          <div className="flex justify-between relative bg-blue w-full px-[40px] items-center pb-[30px] sm:px-5 sm:pb-5   ">
            <input
              placeholder="Search..."
              className="outline-none w-full text-white sm:placeholder:text-lg placeholder:text-white text-lg placeholder:text-[22px] placeholder:leading-[34px] placeholder:font-light bg-blue pt-[34px]  sm:pt-5- border-b border-b-white"
            />
            <CiSearch className="w-8 h-6 text-white font-bold absolute right-10 top-8 sm:right-[20px]" />
          </div>
          <div className="flex items-center bg-white min-w-[412px] px-5 justify-between text-blue sm:py-5">
            <p className="text-[22px] leading-[30px] font-light">
              About Vu Amsterdam
            </p>
            <AiOutlineArrowRight className="text-blue " />
          </div>
        </div>
        <Image
          width={1536}
          height={460}
          src="/images/people.jpeg"
          alt="image"
          className="padding-0 sm:h-[180px] sm:object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
