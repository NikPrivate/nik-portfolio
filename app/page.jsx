import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
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
        className="lg:px-[100px]
      
      l:px-[150px] py-[50px] px-[20px]"
      >
        <div className="sm:grid sm:grid-cols-1 lg:flex lg:grid lg:grid-cols-2">
          <div>
            <Intro />
          </div>
          <div>
            <Project />
          </div>
        </div>
        <div className="flex justify-start">
          <Skills />
        </div>
      </div>
      <div className="mt-auto mb-[110px]">
        <Contact />
      </div>
    </div>
  );
}
