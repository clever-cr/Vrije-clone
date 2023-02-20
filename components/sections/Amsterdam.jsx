import React from "react";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
const Amsterdam = () => {
  const cards = [
    {
      image: "/images/guy.webp",
      title: "The Free writer",
      read: "readmore",
    },
    {
      image: "/images/guy.webp",
      title: "The Free writer",
      read: "readmore",
    },
    {
      image: "/images/guy.webp",
      title: "The Free writer",
      read: "readmore",
    },
  ];
  return (
    <div className="px-134">
      <div className="bg-white">
        <h3 className="text-[38px] text-orange leading-[56px] font-light pt-[65px] px-[132px]">
          W e are Vu
        </h3>
        <div className="flex justify-between- gap-9">
          {cards.map((item, index) => {
            return (
              <div
                key={index}
                className="hover:shadow-2xl w-full- flex flex-col justify-center p-[30px]"
              >
                <Image src={item.image} alt="image" width={296} height={359} />
                <h3 className="text-orange text-2xl leading-9 font-light pt-[33px]">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between pt-[17px]">
                  <p className="text-lg text-[#333333] leading-[30px]">
                    {item.read}
                  </p>
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

export default Amsterdam;
