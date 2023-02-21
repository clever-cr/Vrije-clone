import React from "react";

const Dates = ({ title, date, description, style }) => {
  return (
    <div className={`pt-[40px] flex flex-col gap-y-[5px] ${style}`}>
      <p className="text-lg leading-[30px] text-[#333333] font-light underline ">
        {title}
      </p>
      <p className="text-lg leading-[30px] text-blue font-bold sm:text-base">
        {date}
      </p>
      <p className="text-2xl leading-[30px] text-[#333333] font-light sm:text-lg">
        {description}
      </p>
    </div>
  );
};

export default Dates;
