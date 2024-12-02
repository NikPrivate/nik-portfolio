import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import ThemeSwitch from "@/components/ThemeSwitch";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex justify-end gap-4 pr-10 pt-10">
        <div className="mt-[-2.5px]">
          <ThemeSwitch />
        </div>

        {/* GitHub Icon */}
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
      </div>

      <div className="flex items-center justify-center pt-10 px-5 2xl:mt-[100px]">
        <div className="grid grid-cols-1 lg:grid-rows-2 lg:grid-cols-2 lg:grid-flow-col gap-4">
          <div className="col-span-1">
            <Intro className="mb-0" />
          </div>
          <div className="col-span-1 row-span-1 mt-0 lg:mt-[-90px] xl:mt-[-120px]">
            <Skills />
          </div>
          <div className="lg:col-span-2 lg:row-span-2 col-span-1 row-span-1">
            <Project />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[70px] mb-4">
        <Contact />
      </div>
    </div>
  );
}
