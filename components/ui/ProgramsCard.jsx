import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
const ProgramsCard = ({ title, programs }) => {
  return (
    <div>
      <div className="flex items-center justify-between pb-[30px] sm:pb-[10px]">
        <h1 className="text-[38px] text-blue font-light">{item.title}</h1>
        <AiOutlineArrowRight className="text-blue w-10 h-12" />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-lg  text-[#333333] leading-[30px] ">
          {item.program2}
        </p>
        <AiOutlineArrowRight />
      </div>
    </div>
  );
};

export default ProgramsCard;
