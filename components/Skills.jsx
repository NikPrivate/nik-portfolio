import React from "react";
import { skills } from "@/app/data";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="font-sans px-4 lg:px-0 mt-5">
      <div className="border p-3 dark:border-gray-600 dark:bg-gray-800 rounded shadow-md flex justify-center mb-6">
        <h1 className="text-xl text-center lg:text-left dark:text-white font-robot font-bold">
          SKILLS & TECHNOLOGIES
        </h1>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 p-2 shadow-lg rounded-md bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
          >
            <Image
              src={skill.image}
              alt={skill.title}
              width={40}
              height={40}
              className={
                ["Next.js", "Express"].includes(skill.title)
                  ? "dark:invert"
                  : ""
              }
            />
            <h1 className="text-sm font-medium text-center text-gray-800 dark:text-white">
              {skill.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
