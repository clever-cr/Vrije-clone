import React from "react";
import Image from "next/image";
import {
  AiOutlineArrowRight,
  AiOutlineRight,
  AiOutlineLeft,
} from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import { RxDotFilled } from "react-icons/rx";

const Impact = () => {
  return (
    <div className="px-134 sm:px-0">
      <div className="max-w-[1258px] mx-auto">
        <div className="bg-[#FAF7F5] pb-[60px] ">
          <h2 className="text-orange text-[38px] leading-[56px] font-light px-[132px] pt-[60px] pb-[25px] sm:px-5 sm:leading-9 sm:text-[30px] sm:pt-[30px] sm:pb-[15px]">
            Impact
          </h2>
          <Image
            src="/images/cover.webp"
            alt=""
            width={1252}
            height={575}
            className="sm:relative h-[575px] object-cover sm:h-[188px]"
          />
          <div className="bg-white shadow-md w-[576px] sm:w-full h-[306px] relative -mt-56 left-[379px] flex flex-col justify-between  pt-[45px] sm:mt-0 sm:left-0 sm:pt-[55px]">
            <div className="px-[60px] sm:px-5 ">
              <h3 className="text-2xl leading-9 text-orange font-light sm:text-[22px] sm:leading-[32px]">
                Science to Impact
              </h3>
              <p className="text-lg leading-[30px] text-[#333333] pt-[15px]">
                An interview with entrepreneurial scientist Davide Iannuzzi,
                Chief Impact Officer of Vrije Universiteit Amsterdam
              </p>

              <div className="flex items-center gap-x-[15px] pt-[30px]">
                <p className="text-lg leading-[30px] text-[#333333] font-medium ">
                  Read More
                </p>
                <AiOutlineArrowRight />
              </div>
            </div>

            <div className="flex justify-end gap-[37px] items-center">
              <div className="flex text-orange gap-[18px]- items-center sm:hidden">
                <GoPrimitiveDot className="w-10 h-10" />
                <RxDotFilled className="w-[30px] h-[30px]" />
                <RxDotFilled className="w-[30px] h-[30px]" />
                <RxDotFilled className="w-[30px] h-[30px]" />
              </div>
              <div className="flex w-[120px] h-[60px] justify-center text-[#333333] bg-[#FCD3B6] px-4 py-3 gap-11 sm:absolute sm:-top-[56px] sm:right-0 sm:p-3 sm:gap-9">
                <AiOutlineLeft className="w-8  h-10  sm:w-7 sm:h-8" />
                <AiOutlineRight className="w-8  h-10 sm:w-7 sm:h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
