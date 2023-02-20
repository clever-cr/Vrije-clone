import React from "react";
import { BsChevronDown } from "react-icons/bs";
const DropDown = ({ text }) => {
  return (
    <div className="flex items-center justify-between bg-white px-5 py-[15px] gap-[34px] shadow-lg w-[232px]">
      <p className="text-lg leading-[30px] text-[#333333] font-medium">
        {text}
      </p>
      <BsChevronDown />
    </div>
  );
};

export default DropDown;
