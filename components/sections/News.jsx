import React from "react";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
const News = () => {
  const data = [
    {
      image: "/images/VUvlag.png",
      date: "08 Feb 2023",
      description: "Earthquakes Turkey and Syria",
    },
    {
      image: "/images/VUvlag.png",
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
      image: "/images/stars.jpg",
      date: " 06 Feb 2023",
      description: "EU grant to improve mental well-being o",
    },
    {
      image: "/images/stars.jpg",
      date: " 06 Feb 2023",
      description: "EU grant to improve mental well-being o",
    },
  ];
  return (
    <div className="px-134">
      <div className="bg-[#FAF7F5] px-[132px] pt-[60px]">
        <h1 className="text-[38px] leading-[56px] text-[#3b2171] font-light ">
          News
        </h1>
        <div className="flex gap-x-[80px] pt-[25px]">
          <div className="gap-[25px] flex flex-col justify-between">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-x-[30px] w-[284px]- h-[216px]"
                >
                  <Image
                    src={item.image}
                    alt="image"
                    width={284}
                    height={335}
                  />
                  <div className="flex flex-col  justify-between">
                    <div className="gap-[10px]">
                      <p className="text-lg text-[#3b2171] leading-[30px] font-bold">
                        {item.date}
                      </p>
                      <p className="text-2xl leading-[30px] font-light text-[#333333]">
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
          <div className="flex flex-col gap-y-[97px]">
            {info.map((item, index) => {
              return (
                <div key={index} className="flex gap-x-[30px] ">
                  <Image src={item.image} alt="image" width={113} height={86} />
                  <div className="flex flex-col  ">
                    <div>
                      <p className="text-lg text-[#3b2171] leading-[30px] font-bold">
                        {item.date}
                      </p>
                      <div className="flex items-end">
                        <p className="text-lg leading-[30px] font-light text-[#333333] ">
                          {item.description}
                        </p>
                        <AiOutlineArrowRight className="w-5 h-10 text-[#333333] pt-6" />
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
  );
};

export default News;
