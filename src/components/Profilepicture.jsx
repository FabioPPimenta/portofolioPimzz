import React from "react";
import Image from "next/image";

const Profilepicture = () => {
  return (
    <div className="relative text-white justify-start items-center w-full h-screen">
      <Image
        src="/transformed.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
      ></Image>
    </div>
  );
};

export default Profilepicture;
