import React from "react";
import CommonContext from "@/context/CommonContext";

const Navbar = () => {
  const context = React.useContext(CommonContext);


  return (
    <div className="fixed top-0 left-0 w-full z-10 ease-in duration-300 bg-space_gray shadow-xl">
      <div className="max-w-7xl m-auto flex justify-between items-center p-4 text-white">
        <button
          className="font-bold text-4xl"
          onClick={() => {
            context?.executeScrollHome();
          }}
        >
          FP
        </button>

        <ul className="hidden sm:flex">
          <li className="p-4">
            <button
              onClick={() => {
                context?.executeScrollHome();
              }}
            >
              Home
            </button>
          </li>

          <li className="p-4">
            <button
              onClick={() => {
                context?.executeScroll();
              }}
            >
              {" "}
              About me{" "}
            </button>
          </li>

          <li className="p-4">
            <button
              onClick={() => {
                context?.executeScrollJourney();
              }}
            >
              {" "}
              Journey{" "}
            </button>
          </li>

          <li className="p-4">
            <button
              onClick={() => {
                context?.executeScrollProjects();
              }}
            >
              {" "}
              Projects{" "}
            </button>
          </li>
      
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
