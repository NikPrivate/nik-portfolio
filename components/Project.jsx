import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { projects } from "@/app/data";
import { MdOpenInNew } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import Link from "next/link";

const Project = () => {
  return (
    <div className="lg:mt-0 xl:mt-0 mt-[50px] px-4 md:px-6 lg:px-0">
      <h1 className="font-sans font-bold text-xl mb-3 text-center lg:text-left dark:text-white">
        Projects
      </h1>
      <ScrollArea className="max-h-[400px] md:max-h-[500px] lg:max-h-[600px] border border-slate-700 shadow-2xl bg-gray-300 dark:bg-gray-800 overflow-y-auto rounded-md">
        <div className="p-2 border-b">
          {projects.map((list, index) => (
            <div
              key={index}
              className="mt-1 mb-2 border shadow p-4 border-slate-800 bg-white dark:bg-gray-700 dark:border-gray-600 space-y-2 rounded-lg"
            >
              <h1 className="font-sans font-bold text-lg dark:text-white">
                {list.main}
              </h1>
              <h2 className="font-sans text-gray-700 dark:text-gray-300">
                {list.description}
              </h2>
              <div className="flex flex-wrap gap-2">
                {list.subtitle.map((item, index) => (
                  <h3
                    key={index}
                    className="font-sans font-semibold border rounded-lg px-3 py-1 text-sm bg-slate-100 dark:bg-gray-600 dark:text-white"
                  >
                    {item}
                  </h3>
                ))}
              </div>
              <div className="flex justify-end gap-2 text-xl">
                {list.weblink && (
                  <Link
                    href={list.weblink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CiGlobe className="hover:opacity-80 hover:scale-110 transition-transform duration-200 dark:text-white" />
                  </Link>
                )}
                {list.link && (
                  <Link
                    href={list.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdOpenInNew className="hover:opacity-80 hover:scale-110 transition-transform duration-200 dark:text-white" />
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
