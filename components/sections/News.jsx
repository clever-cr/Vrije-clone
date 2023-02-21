import React from "react";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
const News = () => {
  const data = [
    {
      image: "/images/p1.jpg",
      date: "08 Feb 2023",
      description: "Earthquakes Turkey and Syria",
    },
    {
      image: "/images/birds.png",
      date: "08 Feb 2023",
      description: "Earthquakes Turkey and Syria",
    },
  ];
  const info = [
    {
      image: "/images/stars.jpg",
      date: " 06 Feb 2023",
      description: "EU grant to improve mental well-being o",
    },
    {
      image: "/images/town.jpg",
      date: " 06 Feb 2023",
      description: "EU grant to improve mental well-being o",
    },
    {
      image: "/images/person.png",
      date: " 06 Feb 2023",
      description: "EU grant to improve mental well-being o",
    },
  ];
  return (
    <div className="px-134 sm:px-0">
      <div className="max-w-[1258px] mx-auto">
        <div className="bg-[#FAF7F5] px-[132px] pt-[60px] sm:px-5">
          <h1 className="text-[38px] leading-[56px] text-[#3b2171] font-light ">
            News
          </h1>
          <div className="flex gap-x-[80px] pt-[25px] sm:flex-col sm:gap-[35px]">
            <div className="gap-[25px] flex flex-col justify-between">
              {data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-x-[30px]  sm:w-full h-[216px] sm:h-[100px]"
                  >
                    <Image
                      src={item.image}
                      alt="image"
                      width={284}
                      height={335}
                      className={"sm:w-[134px] sm:h-[101px] object-cover"}
                    />
                    <div className="flex flex-col  justify-between">
                      <div className="gap-[10px]">
                        <p className="text-lg text-[#3b2171] leading-[30px] font-bold">
                          {item.date}
                        </p>
                        <p className="text-2xl sm:text-lg leading-[30px] font-light text-[#333333]">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex  justify-end">
                        <AiOutlineArrowRight className="w-5 h-10 text-[#333333]" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-y-[97px] sm:gap-[35px]">
              {info.map((item, index) => {
                return (
                  <div key={index} className="flex gap-x-[30px] ">
                    <Image
                      src={item.image}
                      alt="image"
                      width={113}
                      height={86}
                      className={"sm:w-[134px] sm:h-[101px]"}
                    />
                    <div className="flex flex-col  ">
                      <div>
                        <p className="text-lg text-[#3b2171] leading-[30px] font-bold">
                          {item.date}
                        </p>
                        <div className="flex items-end">
                          <p className="text-lg leading-[30px] font-light text-[#333333] ">
                            {item.description}
                          </p>
                          <AiOutlineArrowRight className="w-5 h-10 text-[#333333] pt-6 sm:w-12 sm:h-10" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center items-center gap-x-[15px] py-[60px]">
            <p className="text-lg leading-[30px] font-medium text-[#333333] ">
              News Overview
            </p>
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
