import React from "react";
import Card from "../ui/Card";
import { AiOutlineArrowRight } from "react-icons/ai";
const Features = () => {
  return (
    <div className="px-134 sm:px-0">
      <div className="bg-white">
        <div className="px-[132px] py-[60px] flex gap-5 sm:px-5 sm:flex-col">
          <Card
            title={"VU main menu"}
            style={"text-blue"}
            description={"Home"}
            descr2={"Education"}
            descr3={"Research"}
            descr4={"About VU Amsterdam"}
            descr5={"University Library"}
            descr6={"VU Press Office"}
            descr7={"Alumni"}
            arrow={<AiOutlineArrowRight />}
          />
          <Card
            style={"text-orange"}
            title={"Most searched"}
            description={"Home"}
            descr2={"Education"}
            descr3={"Research"}
            descr4={"About VU Amsterdam"}
            descr5={"University Library"}
            descr6={"VU Press Office"}
            descr7={"Alumni"}
            arrow={<AiOutlineArrowRight />}
          />
          <Card
            style={"text-[#008053]"}
            title={"Featured"}
            description={"Home"}
            descr2={"Education"}
            descr3={"Research"}
            arrow={<AiOutlineArrowRight />}
            last
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
