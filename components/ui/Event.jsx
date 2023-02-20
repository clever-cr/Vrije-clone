import React from "react";

const Event = ({ intro, description, style }) => {
  return (
    <div>
      <div className="">
        <div className={` px-[132px] py-[60px] ${style}`}>
          <div className="bg-blue flex px-[60px] justify-between py-[45px]">
            <p className="text-2xl leading-9 text-white font-medium">{intro}</p>
            <button className="text-2xl leading-[30px] text-[#333333] font-medium bg-white px-[30px] py-[15px]">
              {description}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
