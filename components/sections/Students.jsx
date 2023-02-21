import React from "react";
import { SlGraduation } from "react-icons/sl";
import { AiOutlineArrowRight } from "react-icons/ai";
const Students = () => {
  const data = [
    {
      icon: <SlGraduation />,
      text: "31.704 students",
    },
    {
      icon: <SlGraduation />,
      text: "5.190 international students",
    },
    {
      icon: <SlGraduation />,
      text: "459 PhD defences",
    },
    {
      icon: <SlGraduation />,
      text: "9 faculties",
    },
  ];
  const info = [
    {
      title: "Education",
      arrow: <AiOutlineArrowRight />,
      program1: "Bachelor's programmes",
      program2: " Master's programmes",
      program3: "  Honours programme",
      program4: "  Education for professionals",
      program5: "Study guide",
    },
    {
      title: "Research",
      arrow: <AiOutlineArrowRight />,
      program1: "Bachelor's programmes",
      program2: " Master's programmes",
      program3: "  Honours programme",
      program4: "  Education for professionals",
      program5: "Study guide",
    },
  ];
  return (
    <div className="px-134  sm:px-0 sm:mt-0">
      <div className=" max-w-[1258px] mx-auto">
        <div className="bg-white relative z-10 -mt-11 sm:mt-0">
          <div className="flex justify-between pl-32 pr-[98px] pt-[34px] sm:px-0 ">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-[15px] sm:flex-col sm:justify-center sm:gap-2"
                >
                  <SlGraduation className="text-blue w-10 h-10 sm:w-5 sm:h-5" />
                  <h1 className="text-lg text-[#333333] font-medium leading-5 sm:text-base sm:text-center">
                    {item.text}
                  </h1>
                </div>
              );
            })}
          </div>
          <div className="flex px-[132px] gap-[35px] pt-justify-between pt-[74px] sm:flex-col sm:px-5 pb-[60px] sm:pb-[30px]">
            {info.map((item, index) => {
              return (
                <div
                  key={index}
                  className="shadow-md w-[484px] sm:w-full px-[30px] p-[30px] sm:py-[20px]"
                >
                  <div className="flex items-center justify-between pb-[30px] sm:pb-[10px]">
                    <h1 className="text-[38px] text-blue font-light">
                      {item.title}
                    </h1>
                    <AiOutlineArrowRight className="text-blue w-10 h-12" />
                  </div>
                  <div className=" space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-lg  text-[#333333] leading-[30px] ">
                        {item.program1}
                      </p>
                      <AiOutlineArrowRight />
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-lg  text-[#333333] leading-[30px] ">
                        {item.program2}
                      </p>
                      <AiOutlineArrowRight />
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-lg  text-[#333333] leading-[30px] ">
                        {item.program3}
                      </p>
                      <AiOutlineArrowRight />
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-lg  text-[#333333] leading-[30px] ">
                        {item.program4}
                      </p>
                      <AiOutlineArrowRight />
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-lg  text-[#333333] leading-[30px] ">
                        {item.program5}
                      </p>
                      <AiOutlineArrowRight />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <div className="bg-white- px-[132px] py-[60px] sm:px-5 sm:py-[30px]">
              <div className="bg-blue flex px-[60px] justify-between py-[45px] sm:flex-col sm:py-[30px] sm:px-[20px] sm:gap-[35px]">
                <p className="text-2xl leading-9 text-white font-medium sm:text-[22px] sm:leading-[33px]">
                  Do you also want to change your world?
                </p>
                <button className="text-2xl leading-[30px] text-[#333333] font-medium bg-white px-[30px] py-[15px]">
                  Visit the VU Master’s Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
