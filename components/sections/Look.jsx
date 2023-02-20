import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
const Look = () => {
  return (
    <div className="px-134 sm:px-0">
      <div className="bg-[#FAF7F5] px-[132px] py-[60px] sm:px-5">
        <h3 className="text-[38px] sm:text-[30px] sm:leading-9 leading-[56px] text-[#008053] font-light  pb-[25px]">
          Take a look
        </h3>
        <div className="w-[316px] sm:w-full sm:h-[160px] h-[240px] shadow-md bg-white px-[30px] pt-[30px] flex flex-col justify-between">
          <p className="text-2xl sm:text-[22px] sm:leading-[32px] leading-9 font-light text-[#008053]">
            VU Campus Tour
          </p>
          <div className="flex justify-end">
            <AiOutlineArrowRight className="text-[#333333] w-5 h-10 font-light" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Look;
