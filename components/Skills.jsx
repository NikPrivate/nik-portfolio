import React from "react";
import { skills } from "@/app/data";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="font-sans">
      <h1 className="font-bold text-lg xl:mt-8 lg:mt-8 xl:mb-4 lg:mb-4">
        Skills & Technologies
      </h1>
      <div className="flex grid grid-cols-4 gap-2.5">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex gap-1.5 items-center">
              <Image
                src={skill.image}
                alt={skill.title}
                width={25}
                height={25}
              />
              <h1 className="xl:text-sm lg:text-sm text-xs font-medium">
                {skill.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
