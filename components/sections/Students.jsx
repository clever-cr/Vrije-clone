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
      title: "Education",
      arrow: <AiOutlineArrowRight />,
      program1: "Bachelor's programmes",
      program2: " Master's programmes",
      program3: "  Honours programme",
      program4: "  Education for professionals",
      program5: "Study guide",
    },
  ];
  return (
    <div className="px-134 relative z-10 -mt-11">
      <div className="bg-white  pb-[60px] ">
        <div className="flex justify-between pl-32 pr-[98px] pt-[34px]">
          {data.map((item, index) => {
            return (
              <div key={index} className="flex items-center gap-[15px]">
                {/* <div> {item.icon}</div> */}
                <SlGraduation className="text-blue w-10 h-10" />
                <h1 className="text-lg text-[#333333] font-medium leading-5">
                  {item.text}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="flex px-[132px] gap-5 pt-justify-between pt-[74px]">
          {info.map((item, index) => {
            return (
              <div
                key={index}
                className="shadow-xl   w-[484px] px-[30px] p-[30px]  "
              >
                <div className="flex items-center justify-between pb-[30px]">
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
        <div className="pt-[30px]">
          <div className="bg-white px-[132px] py-[60px]">
            <div className="bg-blue flex px-[60px] justify-between py-[45px]">
              <p className="text-2xl leading-9 text-white font-medium">
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
  );
};

export default Students;
