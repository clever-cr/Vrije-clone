import React from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
const Hero = () => {
  return (
    <div>
      <div className=" px-134 sm:px-0">
        <div className="max-w-[1258px] mx-auto">
          <div className="bg-[#FFFFFF] py-20 ">
            <h1 className="text-[45px]  text-[#333333] font-light text-left pt-30 px-[216px] sm:text-[33px] sm:leading-[40px] sm:px-5 ">
              You don’t just become something, you become someone
            </h1>
            <div className="flex justify-between  left-[264px] absolute right-[264px]  z-10 top-72 sm:top-48 sm:flex-col sm:right-0 sm:left-0 ">
              <div className="flex justify-between  bg-blue w-full px-[40px] items-center border-b  pb-0 sm:px-5">
                <input
                  placeholder="Search..."
                  className="outline-none text-white text-lg bg-blue py-30 sm:py-5"
                />
                <CiSearch className="w-8 h-6 text-white font-bold" />
              </div>
              <div className="flex items-center bg-white w-full px-5 justify-between text-blue sm:py-5">
                <p className="text-[22px] leading-[30px] font-light">
                  About the Vu
                </p>
                <AiOutlineArrowRight className="text-blue " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative ">
        <Image
          width={1536}
          height={460}
          src="/images/people.jpeg"
          alt="image"
          className="padding-0"
        />
      </div>
    </div>
  );
};

export default Hero;
