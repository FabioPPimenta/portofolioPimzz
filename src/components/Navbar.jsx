import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import CommonContext from "@/context/CommonContext";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const context = React.useContext(CommonContext);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-10 ease-in duration-300 bg-white">
      <div className="max-w-7xl m-auto flex justify-between items-center p-4 text-black">
        <h1
          className="font-bold text-4xl"
          onClick={() => {
            context?.executeScrollHome();
          }}
        >
          FP
        </h1>

        <ul className="hidden sm:flex">
          <li className="p-4">
            <div
              onClick={() => {
                context?.executeScrollHome();
              }}
            >
              Home
            </div>
          </li>

          <li className="p-4">
            <div
              onClick={() => {
                context?.executeScroll();
              }}
            >
              {" "}
              About Me{" "}
            </div>
          </li>
          {/* <li className="p-4">
            <Link href="/toys"> Cool Components </Link>
          </li> */}
          {/* <li className="p-4">
            <Link href="/contacts"> Contacts </Link>
          </li> */}
        </ul>
        {/* Mobile  Button*/}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose className="text-white" size={20}></AiOutlineClose>
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
              <div
                onClick={() => {
                  context?.executeScroll();
                }}
              >
                {" "}
                About Me{" "}
              </div>
            </li>
            {/* <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/toys"> Cool Components </Link>
            </li> */}
            {/* <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contacts"> Contacts </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
