import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <div className="font-sans xl:mt-0 mt-5 text-center xl:text-left border border-gray-300 p-4 rounded-lg shadow-md">
      {/* Name and Title */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
        Hi, I&apos;m Nik Ahmad Izzat
      </h1>

      {/* Subtitle with Malaysia Icon */}
      <div className="flex justify-center xl:justify-start items-center gap-2 mb-3">
        <p className="text-lg text-gray-600 font-medium">
          A final year student from Malaysia
        </p>
        <Image
          src="/intro_image/malaysia.png"
          alt="Malaysia Flag"
          width={30}
          height={30}
        />
      </div>

      {/* Badge */}
      <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg align-top">
        <p className="font-semibold text-sm">Full Stack</p>
      </div>
    </div>
  );
};

export default Intro;
