import React from "react";
import Image from "next/image";
import { CiUser, CiSearch } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
const NavBar = () => {
  return (
    <div className="px-134 fixed w-full z-50">
      <div className="flex items-center- justify-between  ">
        <div className="bg-white w-full px-30 py-15 shadow-xl">
          <Image
            width={185}
            height={45}
            src="/images/VU-logo-nobg.svg"
            alt="logo"
          />
        </div>

        <div className="flex items-center gap-30 bg-dark px-30 py-26  h-full shadow-xl  ">
          <p className="text-xl">EN</p>
          <CiUser className="w-8 h-6" />
          <CiSearch className="w-8 h-6" />
          <AiOutlineMenu className="w-8 h-6" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
