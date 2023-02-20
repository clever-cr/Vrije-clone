import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
const Information = () => {
  const data = [
    {
      title: "Ukraine",
      description: "Information and support",
    },
    {
      title: "Vu & Corona",
    },
  ];
  return (
    <div className="px-134 sm:px-0">
      <div className="bg-white  ">
        <div className="flex   gap-5 px-[132px] py-[60px] sm:flex-col sm:px-5">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="shadow-lg w-[484px] sm:w-full h-[179px] flex flex-col px-[30px] py-[25px] justify-between "
              >
                <div className="flex flex-col gap-5">
                  <p
                    className={`text-2xl leading-9 text-[#008053] font-light ${
                      index == 1 ? "text-[#3b2171]" : ""
                    }`}
                  >
                    {item.title}
                  </p>
                  <p className="text-lg leading-[30px] text-[#333333] font-light">
                    {item.description}
                  </p>
                </div>
                <div className="flex justify-end">
                  <AiOutlineArrowRight />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Information;
