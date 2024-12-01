import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <div className="flex justify-end gap-4 pr-10 pt-10">
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
            className="cursor-pointer"
          />
        </Link>

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
            className="cursor-pointer"
          />
        </Link>
      </div>

      <div
        className="
    
      xl:px-[150px] py-[40px] px-[20px]"
      >
        <div className="lg:grid lg:grid-rows-3 grid-flow-col gap-4">
          <div className="row-span-1 col-span-1">
            <Intro />
          </div>
          <div className="row-span-1 col-span-1">
            <Skills />
          </div>
          <div className="col-span-3 row-span-2">
            <Project />
          </div>
        </div>
        <div className="xl:mt-[-70px] lg:mt-[-70px] mt-10">
          <Contact />
        </div>
      </div>
    </div>
  );
}
