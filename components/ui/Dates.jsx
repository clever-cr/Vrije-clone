import React from "react";

const Dates = ({ title, date, description }) => {
  return (
    <div className="pt-[40px] flex flex-col gap-y-[5px]">
      <p className="text-lg leading-[30px] text-[#333333] font-light underline">
        {title}
      </p>
      <p className="text-lg leading-[30px] text-blue font-bold">{date}</p>
      <p className="text-2xl leading-[30px] text-[#333333] font-light">
        {description}
      </p>
    </div>
  );
};

export default Dates;
