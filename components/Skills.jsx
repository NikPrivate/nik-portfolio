import React from "react";
import { skills } from "@/app/data";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="font-sans">
      <h1 className="font-bold text-lg xl:mb-4 lg:mb-4 mb-4 xl:text-left lg:text-left text-center xl:mt-0 lg:mt-0 mt-[100px]">
        Skills & Technologies
      </h1>

      <div className="flex xl:justify-left lg:justify-left justify-center xl:grid xl:grid-cols-4 grid grid-cols-3 xl:gap-2.5 gap-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex gap-1.5 items-center xl:pl-0 lg:pl-0 pl-[1px]">
              <Image
                src={skill.image}
                alt={skill.title}
                width={25}
                height={25}
              />
              <h1 className="xl:text-sm lg:text-sm text-sm font-medium">
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
