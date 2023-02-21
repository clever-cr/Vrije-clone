import React from "react";
import Image from "next/image";
import {
  AiOutlineArrowRight,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
const Amsterdam = () => {
  const cards = [
    {
      image: "/images/long.webp",
      title: "The Free writer",
    },
    {
      image: "/images/long.webp",
      title: "The Free writer",
    },
    {
      image: "/images/guy.webp",
      title: "The Free writer",
    },
    {
      image: "/images/dancers.webp",
      title: "The Free writer",
    },
    {
      image: "/images/guy.webp",
      title: "The Free writer",
    },
  ];
  return (
    <div className="px-134 sm:px-0">
      <div className="max-w-[1258px] mx-auto">
        <div className="bg-white pb-[154px] sm:pb-[30px] relative">
          <h3 className="text-[38px] text-orange leading-[56px] font-light pt-[65px] px-[132px] sm:px-5 sm:text-[30px] sm:leading-9">
            We are Vu
          </h3>
          <div className="sm:min-w-[380px] sm:mx-auto sm:overflow-y-scroll scrollHidden">
            <div className="flex justify-center gap-[30px]- pt-[25px] px-[102px]- sm:px-5 overflow-hidden sm:grid-cols-[repeat(3,_400px)]  sm:gap-0">
              {cards.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`hover:shadow-2xl min-w-[329px] flex flex-col  justify-center p-[30px] sm:min-w-[406px] sm:h-[651px] ${
                      index == 2 || index == 1 ? "sm:hidden" : ""
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt="image"
                      width={296}
                      height={359}
                      className={
                        "h-[359px] w-[296px] sm:w-[376px] sm:h-[502px] object-cover"
                      }
                    />
                    <h3 className="text-orange text-2xl leading-9 font-light pt-[30px] sm:text-[22px]">
                      {item.title}
                    </h3>
                    <div className="flex flex-col justify-between pt-2.5">
                      <p className="text-lg text-[#333333] leading-[30px]">
                        Read more
                      </p>
                      <div className="flex justify-end pt-[24px]">
                        <AiOutlineArrowRight />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="right-0 absolute pt-[30px]">
            <div className="flex  text-[#333333] bg-[#FCD3B6] px-[20px] py-[16px] gap-11 sm:hidden">
              <AiOutlineLeft className="w-8  h-8" />
              <AiOutlineRight className="w-8  h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amsterdam;
