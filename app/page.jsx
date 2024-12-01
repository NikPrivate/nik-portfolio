import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
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
            className="cursor-pointer hover:opacity-80 hover:scale-110 transition-transform duration-200"
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
            className="cursor-pointer hover:opacity-80 hover:scale-110 transition-transform duration-200"
          />
        </Link>
      </div>

      <div className="flex items-center justify-center pt-10 px-10 2xl:mt-[100px]">
        <div className="lg:grid lg:grid-rows-2 grid-flow-col gap-4">
          <div className="row-span-1 col-span-1">
            <Intro />
          </div>
          <div className="row-span-1 col-span-1">
            <Skills />
          </div>
          <div className="col-span-2 row-span-2">
            <Project />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[100px] mb-4">
        <Contact />
      </div>
    </div>
  );
}
