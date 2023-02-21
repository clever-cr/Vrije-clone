import React from "react";
import {
  AiOutlineArrowRight,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

import { ImLinkedin2 } from "react-icons/im";
import { GrFacebookOption } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";
const Card = ({ title, descriptions = [], hasIcons, titleStyle }) => {
  return (
    <div>
      <p
        className={`pb-[15px] text-[38px] leading-[56px] font-light sm:text-[30px] sm:leading-9 ${titleStyle}`}
      >
        {title}
      </p>
      <div className="w-[316px] sm:w-full shadow-medium sm:shadow-none px-[20px] py-[20px] flex flex-col gap-[5px] sm:px-0 sm:py-5 ">
        {descriptions.map((description, index) => {
          return (
            <div key={index} className="flex items-center justify-between">
              <p className="text-lg leading-[30px] text-darkgray">
                {description}
              </p>
              <AiOutlineArrowRight />
            </div>
          );
        })}
        {hasIcons && (
          <div className="flex items-center justify-between- gap-[16px] pt-[90px] sm:pt-[50px] ">
            <AiOutlineInstagram className=" bg-blue text-white w-10 h-10" />
            <ImLinkedin2 className=" bg-blue text-white w-10 h-10" />
            <GrFacebookOption className=" bg-blue text-white w-10 h-10" />
            <AiOutlineTwitter className=" bg-blue text-white w-10 h-10" />
            <FaYoutube className=" bg-blue text-white w-10 h-10" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
