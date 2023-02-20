import React from "react";
import Image from "next/image";
import {
  AiOutlineArrowRight,
  AiOutlineRight,
  AiOutlineLeft,
} from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import { RxDotFilled } from "react-icons/rx";

const Impact = () => {
  return (
    <div className="px-134 bg-red-200">
      <h2>Impact</h2>
      <Image src="/images/cover.webp" alt="" width={1252} height={575} />
      <div className="bg-white w-[576px] h-[306px]">
        <h3>Science to Impact</h3>
        <p>
          An interview with entrepreneurial scientist Davide Iannuzzi, Chief
          Impact Officer of Vrije Universiteit Amsterdam
        </p>
        <div>
          <p>Read More</p>
          <AiOutlineArrowRight />
        </div>
        <div>
          <GoPrimitiveDot />
          <RxDotFilled />
          <RxDotFilled />
          <RxDotFilled />
          <AiOutlineLeft />
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
};

export default Impact;
