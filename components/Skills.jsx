import React from "react";
import { skills } from "@/app/data";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="font-sans">
      <h1 className="font-bold text-lg xl:mt-8 lg:mt-8 xl:mb-4 lg:mb-4 mt-8 mb-4 xl:text-left lg:text-left text-center">
        Skills & Technologies
      </h1>
      <div className="flex xl:justify-left lg:justify-left justify-center grid grid-cols-4 gap-2.5">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex gap-1.5 items-center xl:pl-0 lg:pl-0 pl-0.5">
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
