import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
const data = [
  "Privacy Statement",
  "Disclaimer",
  "Safety at VU Amsterdam",
  "Colofon",
  "Cookie Settings",
  "Web archive",
];
const Footer = () => {
  return (
    <div className="px-134 sm:px-0">
      <div className="max-w-[1258px] mx-auto">
        <div className="bg-blue px-[132px] pt-[30px] pb-[35px] flex flex-col gap-[23px] sm:px-5">
          <div className="flex gap-[15px] sm:flex-wrap sm:gap-x-[30px]">
            {data.map((item, index) => {
              return (
                <div key={index} className="flex items-center">
                  <p className="text-base leading-[27px] text-white">{item}</p>
                  <AiOutlineArrowRight className="text-white" />
                </div>
              );
            })}
          </div>
          <p className="text-base leading-[27px] text-white">
            Copyright © 2023 - Vrije Universiteit Amsterdam
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
