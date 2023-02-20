import React from "react";
import {
  AiOutlineArrowRight,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import { GrFacebookOption } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";
const Card = ({
  title,
  description,
  descr2,
  descr3,
  descr4,
  descr5,
  descr6,
  descr7,
  arrow,
  last,
  style,
}) => {
  return (
    <div>
      <p
        className={` pb-[15px] text-[38px] leading-[56px] font-light ${style}`}
      >
        {title}
      </p>
      <div className="w-[316px] sm:w-full shadow-lg px-[20px] py-[20px] flex flex-col gap-[5px] ">
        <div className="flex items-center justify-between">
          <p>{description}</p>
          <>{arrow}</>
        </div>
        <div className="flex items-center justify-between ">
          <p>{descr2}</p>
          <>{arrow}</>
        </div>
        <div className="flex items-center justify-between ">
          <p>{descr3}</p>
          <>{arrow}</>
        </div>

        {descr5 && (
          <>
            <div className="flex items-center justify-between ">
              <p>{description}</p>
              <>{arrow}</>
            </div>
            <div className="flex items-center justify-between">
              <p>{descr4}</p>
              <>{arrow}</>
            </div>
            <div className="flex items-center justify-between ">
              <p>{descr5}</p>
              <>{arrow}</>
            </div>
            <div className="flex items-center justify-between">
              <p>{descr6}</p>
              <>{arrow}</>
            </div>
            <div className="flex items-center justify-between ">
              <p>{descr7}</p>
              <>{arrow}</>
            </div>
          </>
        )}
        {last && (
          <div className="flex items-center justify-between pt-[90px]">
            <AiOutlineInstagram className="w-12 h-12 bg-blue text-white" />
            <ImLinkedin2 className="w-12 h-12 bg-blue text-white" />
            <GrFacebookOption className="w-12 h-12 bg-blue text-white" />
            <AiOutlineTwitter className="w-12 h-12 bg-blue text-white" />
            <FaYoutube className="w-12 h-12 bg-blue text-white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
