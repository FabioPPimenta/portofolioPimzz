import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  ///py-2 w-full  h-16 bg-gray-800 flex justify-between items-stretch overflow-y-visible
  ///fixed top-0 left-0 w-full z-10 ease-in duration-300 bg-white
  return (
    <div className="fixed top-0 left-0 w-full z-10 ease-in duration-300 bg-white">
      <div className="max-w-7xl m-auto flex justify-between items-center p-4 text-black">
        <Link href={"/"}>
          <h1 className="font-bold text-4xl">FP</h1>
        </Link>

        <ul className="hidden sm:flex">
          <li className="p-4">
            <Link href="/"> Home </Link>
          </li>
          <li className="p-4">
            <Link href="/#about"> About Me </Link>
          </li>
          <li className="p-4">
            <Link href="/toys"> Cool Components </Link>
          </li>
          <li className="p-4">
            <Link href="/contacts"> Contacts </Link>
          </li>
        </ul>
        {/* Mobile  Button*/}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20}></AiOutlineClose>
          ) : (
            <AiOutlineMenu size={20}></AiOutlineMenu>
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center duration-300"
          }
        >
          <ul className="text-white">
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/"> Home </Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/#about"> About Me </Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/toys"> Cool Components </Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contacts"> Contacts </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
