import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { projects } from "@/app/data";
import { LuGlobe } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";

const Project = () => {
  return (
    <div className="lg:mt-0 xl:mt-0 px-4 md:px-6 lg:px-0">
      <div className="mb-3 border p-3 justify-center flex dark:border-gray-600 dark:bg-gray-800 rounded shadow-md">
        <h1 className="font-sans font-bold text-xl text-center lg:text-left dark:text-white font-roboto">
          PROJECTS
        </h1>
      </div>
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
              <div className="flex items-center justify-end gap-2 text-xl">
                {list.weblink && (
                  <Link
                    href={list.weblink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LuGlobe className="xl:text-3xl text-2xl hover:opacity-80 hover:scale-110 transition-transform duration-200 dark:text-white" />
                  </Link>
                )}
                {list.link && (
                  <Link
                    href={list.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub className="xl:text-3xl text-2xl hover:opacity-80 hover:scale-110 transition-transform duration-200 dark:text-white" />
                  </Link>
                )}
              </div>
              <ScrollBar orientation="horizontal" />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Project;
