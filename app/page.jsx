import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex items-center justify-center mt-3 xl:mt-10 lg:mt-10 md:mt-10 px-5 2xl:mt-[100px]">
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
