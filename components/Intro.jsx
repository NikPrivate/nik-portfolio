import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <div className="mb-2 font-sans">
      <h1 className="text-3xl font-bold">Hi, I'm Nik Ahmad Izzat</h1>
      <div className="flex">
        <p className="mb-3 xl:text-base text-base font-medium mt-2">
          A final year student from Malaysia
        </p>
        <Image
          src="/intro_image/malaysia.png"
          alt="malaysia"
          width={35}
          height={35}
          className=""
        />
      </div>
      <div className="border bg-black text-white border-black w-max p-2 rounded-lg xl:mb-0 mb-4">
        <p className="font-bold">Full Stack</p>
      </div>
    </div>
  );
};

export default Intro;
