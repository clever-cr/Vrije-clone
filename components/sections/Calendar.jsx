import React from "react";
import DropDown from "../ui/DropDown";
import Dates from "../ui/Dates";
import {
  AiOutlineArrowRight,
  AiOutlineRight,
  AiOutlineLeft,
} from "react-icons/ai";
const Calendar = () => {
  return (
    <div className="px-[134px]">
      <div className="bg-white px-[132px] pt-[60px]">
        <div className="flex justify-between">
          <h2 className="text-[38px] text-blue leading-[56px] font-light">
            Calendar
          </h2>
          <div className="flex gap-5">
            <DropDown text={"All categories"} />
            <DropDown text={"Date"} />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 pb-[61px]">
          <Dates
            title={"PhD Defences"}
            date={"20 February 2023"}
            description={"PhD defence by T.J.H. Jonkers"}
          />
          <Dates
            title={"PhD Defences"}
            date={"20 February 2023"}
            description={"PhD defence by T.J.H. Jonkers"}
          />
          <Dates
            title={"PhD Defences"}
            date={"20 February 2023"}
            description={"PhD defence by T.J.H. Jonkers"}
          />
          <Dates
            title={"PhD Defences"}
            date={"20 February 2023"}
            description={"PhD defence by T.J.H. Jonkers"}
          />
        </div>
        <div className="flex justify-between items-center border-t border-blue pt-">
          <div className="flex justify-center items-center gap-x-[15px] py-[60px]-">
            <p className="text-lg leading-[30px] font-medium text-[#333333] ">
              View calendar
            </p>
            <AiOutlineArrowRight />
          </div>
          <div className="flex justify-center text-[#333333] bg-[#dff2fd] px-[20px] py-[16px] gap-11">
            <AiOutlineLeft className="w-8  h-8" />
            <AiOutlineRight className="w-8  h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
