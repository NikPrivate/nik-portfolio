import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";

const Intro = () => {
  return (
    <div className="font-sans xl:mt-0 mt-5 text-center xl:text-left lg:text-left border p-4 rounded-lg shadow-md dark:border-gray-600 dark:bg-gray-800">
      {/* Name and Title */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-3 dark:text-white">
        Hi, I&apos;m Nik Ahmad Izzat
      </h1>

      {/* Subtitle with Malaysia Icon */}
      <div className="flex justify-center lg:justify-start xl:justify-start items-center gap-2 mb-3">
        <p className="flex justify-center flex-wrap items-center gap-x-2 text-lg text-gray-600 font-medium dark:text-gray-300">
          A Full Stack Developer from
          <span className="inline-flex justify-center items-center gap-1 whitespace-nowrap">
            Malaysia
            <Image
              src="/intro_image/malaysia.png"
              alt="Malaysia Flag"
              width={30}
              height={30}
            />
          </span>
        </p>
      </div>

      {/* Badge */}
      <div className="xl:flex lg:flex gap-4 items-center justify-center sm:justify-center md:justify-center lg:justify-start xl:justify-start">
        <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg align-top">
          <p className="font-semibold text-sm">
            Focus : Full Stack Development
          </p>
        </div>
        <div className="flex items-center justify-center xl:mt-0 lg:mt-0 mt-5 gap-5">
          <Link
            href="https://github.com/NikPrivate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/header_image/github.png"
              alt="github"
              width={30}
              height={30}
              className="cursor-pointer hover:opacity-80 hover:scale-110 transition-transform duration-200 dark:invert"
            />
          </Link>

          {/* Instagram Icon */}
          <Link
            href="https://www.instagram.com/nikzatt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/header_image/instagram.png"
              alt="instagram"
              width={30}
              height={30}
              className="cursor-pointer hover:opacity-80 hover:scale-110 transition-transform duration-200 dark:invert"
            />
          </Link>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Intro;
