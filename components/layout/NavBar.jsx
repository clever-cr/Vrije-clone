import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { CiUser, CiSearch } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleOpenMenu = () => setMenuIsOpen(!menuIsOpen);
  useEffect(() => {
    document.body.style.overflow = menuIsOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "scroll");
  }, [menuIsOpen]);
  return (
    <div className="px-134 fixed w-full z-50 sm:px-0 bg-light- top-0">
      <div className="max-w-[1258px] mx-auto">
        <div className="flex justify-between shadow-medium h-[75px] sm:h-[60px] items-center">
          <Link
            href={"/"}
            className="bg-white w-full px-30 py-15 sm:pt-[12px] sm:px-5 sm:py-2.5 inline-block h-full"
          >
            <Image
              width={185}
              height={45}
              src="/images/VU-logo-nobg.svg"
              alt="logo"
              className="sm:w-[164px] h-[40px]"
            />
          </Link>

          <div className="flex items-center gap-6 sm:gap-[15px] bg-dark px-30 pb-[24px] pt-[23px] h-full sm:px-5  sm:pt-[17px] w-[234px]-">
            <p className="text-[23.94px] font-light text-darkgray">EN</p>
            <CiUser className="w-6 h-10" />
            <CiSearch className="w-6 h-10" />

            <AiOutlineMenu onClick={handleOpenMenu} className="w-6 h-10" />
          </div>
        </div>
        {menuIsOpen ? (
          <section className="fixed inset-0 z-50 grid h-screen mx-auto bg-white max-w-7xl">
            <div className="overflow-y-scroll">
              <div
                onClick={handleOpenMenu}
                className="bg-[#F2EFED] ml-auto p-5 cursor-pointer absolute top-0 right-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                  width="30px"
                  height="30px"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="#000000"
                >
                  <line x1="16" y1="16" x2="48" y2="48" />
                  <line x1="48" y1="16" x2="16" y2="48" />
                </svg>
              </div>
              <div className="">
                <div className="flex flex-col justify-between space-y-10 cursor-pointer pt-52 px-36 sm:px-5">
                  {[
                    "Study at VU Amsterdam",
                    "Research",
                    "About VU Amsterdam",
                    "VU press office",
                    "Alumni",
                    "Student",
                    "Employee",
                  ].map((e, i) => {
                    return (
                      <Link key={i} href={"/page1"}>
                        <div className="flex justify-between max-w-sm">
                          <p className="text-[24px] leading-[30px] whitespace-nowrap font-semibold">
                            {" "}
                            {e}
                          </p>
                          {i === 0 || i === 1 ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-plus"
                            >
                              <line x1="12" y1="5" x2="12" y2="19" />
                              <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                          ) : (
                            <svg
                              className="ml-36"
                              Name="fill-[#000000]"
                              xmlns="http://www.w3.org/2000/svg"
                              width="30px"
                              height="30px"
                              viewBox="0 0 24 24"
                              fill="#000000"
                            >
                              <path
                                d="M20 12L4 12M20 12L14 18M20 12L14 6"
                                stroke="#000000"
                                stroke-width="1.1"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
};

export default NavBar;
