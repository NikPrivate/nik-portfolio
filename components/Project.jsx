import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { projects } from "@/app/data";
import { MdOpenInNew } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import Link from "next/link";

const Project = () => {
  return (
    <div className="lg:mt-0 xl:mt-0 mt-[100px]">
      <h1 className="font-sans font-bold text-xl mb-3 text-center xl:text-left">
        Projects
      </h1>
      <ScrollArea className="max-h-[300px] border-1 bg-gray-300 border-slate-700 shadow-2xl overflow-y-auto">
        <div className="p-2 border-b-2">
          {projects.map((list, index) => (
            <div
              key={index}
              className="mt-1 mb-2 border-1 shadow-xl p-2 border-slate-800 bg-white space-y-2"
            >
              <h1 className="font-sans font-bold text-lg">{list.main}</h1>
              <h2 className="font-sans text-gray-700">{list.description}</h2>
              <div className="flex space-x-2">
                {list.subtitle.map((item, index) => (
                  <h3
                    key={index}
                    className="font-sans font-semibold border-2 rounded-lg px-2 py-1 text-sm"
                  >
                    {item}
                  </h3>
                ))}
              </div>
              <div className="flex justify-end gap-2 text-xl cursor-pointer">
                {list.weblink && (
                  <Link
                    href={list.weblink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CiGlobe className="hover:opacity-80 hover:scale-110" />
                  </Link>
                )}
              </div>
              <div className="flex justify-end gap-2 text-xl cursor-pointer">
                {list.link && (
                  <Link
                    href={list.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdOpenInNew className="hover:opacity-80 hover:scale-110" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Project;
