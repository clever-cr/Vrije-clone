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
    <div className="px-134 ">
      <div className="bg-[#FAF7F5] pb-[60px]">
        <h2 className="text-orange text-[38px] leading-[56px] font-light px-[132px] pt-[60px] pb-[25px]">
          Impact
        </h2>
        <Image src="/images/cover.webp" alt="" width={1252} height={575} />
        <div className="bg-white w-[576px] h-[306px] relative -mt-56 left-[379px] flex flex-col justify-between  pt-[45px]">
          <div className="px-[60px]">
            <h3 className="text-2xl leading-9 text-orange font-light">
              Science to Impact
            </h3>
            <p className="text-lg leading-[30px] text-[#333333]">
              An interview with entrepreneurial scientist Davide Iannuzzi, Chief
              Impact Officer of Vrije Universiteit Amsterdam
            </p>

            <div className="flex items-center gap-x-[15px] pt-[30px]">
              <p className="text-lg leading-[30px] text-[#333333] font-medium ">
                Read More
              </p>
              <AiOutlineArrowRight />
            </div>
          </div>

          <div className="flex justify-end gap-[37px] items-center">
            <div className="flex text-orange gap-[18px] items-center">
              <GoPrimitiveDot className="w-8 h-10" />
              <RxDotFilled />
              <RxDotFilled />
              <RxDotFilled />
            </div>
            <div className="flex justify-center text-[#333333] bg-[#FCD3B6] px-[23px] py-[18px] gap-11">
              <AiOutlineLeft className="w-8  h-10" />
              <AiOutlineRight className="w-8  h-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
