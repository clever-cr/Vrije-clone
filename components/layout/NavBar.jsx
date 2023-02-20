import React from "react";
import { useState } from "react";
import Image from "next/image";
import { CiUser, CiSearch } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="px-134 fixed w-full z-50 sm:px-0 bg-light">
      <div className="max-w-[1258px] mx-auto">
        <div className="flex items-center- justify-between  ">
          <div className="bg-white w-full px-30 py-15 shadow-xl sm:pt-[12px]">
            <Image
              width={185}
              height={45}
              src="/images/VU-logo-nobg.svg"
              alt="logo"
            />
          </div>

          <div className="flex items-center gap-30 sm:gap-[15px] bg-dark px-30 py-26  h-full shadow-xl  sm:pt-[17px] sm:pb-[]19px">
            <p className="text-xl">EN</p>
            <CiUser className="w-8 h-6" />
            <CiSearch className="w-8 h-6" />
            {}
            <AiOutlineMenu className="w-8 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
