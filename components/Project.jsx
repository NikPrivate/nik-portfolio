import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { projects } from "@/app/data";

const Project = () => {
  return (
    <div className="stick">
      <h1 className="font-sans font-semibold text-xl mb-3">Projects</h1>
      <ScrollArea className="max-h-80 rounded-md border-2 border-slate-700 shadow overflow-y-auto">
        <div className="p-2">
          {projects.map((list, index) => (
            <div key={index} className="mt-2">
              <h1 className="font-sans font-semibold">{list.main}</h1>
              <h2>{list.description}</h2>
              <h3>{list.subtitle}</h3>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Project;
