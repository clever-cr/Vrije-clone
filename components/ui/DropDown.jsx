import React from "react";
import { BsChevronDown } from "react-icons/bs";
const DropDown = ({ text }) => {
  return (
    <div className="flex items-center justify-between bg-white px-5 py-[15px] gap-[34px] shadow-md w-[232px] sm:py-2">
      <p className="text-lg leading-[30px]- text-[#333333] font-medium">
        {text}
      </p>
      <BsChevronDown />
    </div>
  );
};

export default DropDown;
