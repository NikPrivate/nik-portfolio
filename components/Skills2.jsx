"use client";

import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Skills2() {
  const [radius, setRadius] = useState(220);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) {
        setRadius(160); // Small screens
      } else if (window.innerWidth < 1024) {
        setRadius(170); // Medium screens
      } else {
        setRadius(220); // Large screens
      }
    };

    updateRadius(); // Set initial radius
    window.addEventListener("resize", updateRadius);

    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div className="relative flex xl:h-[500px] lg:h-[500px] md:h-[500px] h-[380px] w-full flex-col items-center justify-center overflow-hidden">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Skills
      </span>

      {/* Outer Orbit */}
      <OrbitingCircles iconSize={40} radius={radius} reverse={2}>
        <Image
          src="/skills_image/javascript.png"
          alt="JavaScript"
          width={40}
          height={40}
        />
        <Image
          src="/skills_image/typescript.png"
          alt="TypeScript"
          width={40}
          height={40}
        />
        <Image
          src="/skills_image/react.png"
          alt="React"
          width={40}
          height={40}
        />
        <Image
          src="/skills_image/next.png"
          alt="Next.js"
          width={40}
          height={40}
          className="dark:invert"
        />
      </OrbitingCircles>

      {/* Middle Orbit */}
      <OrbitingCircles iconSize={40} radius={radius * 0.7}>
        <Image src="/skills_image/html.png" alt="HTML" width={40} height={40} />
        <Image
          src="/skills_image/tailwind.png"
          alt="Tailwind CSS"
          width={40}
          height={40}
        />
        <Image
          src="/skills_image/node.png"
          alt="Node.js"
          width={40}
          height={40}
        />
        <Image
          src="/skills_image/express.png"
          alt="Express.js"
          width={40}
          height={40}
          className="dark:invert"
        />
      </OrbitingCircles>

      {/* Inner Orbit */}
      <OrbitingCircles iconSize={30} radius={radius * 0.5} reverse={1}>
        <Image
          src="/skills_image/mongodb.png"
          alt="MongoDB"
          width={40}
          height={40}
        />
        <Image
          src="/skills_image/mysql.png"
          alt="MySQL"
          width={40}
          height={40}
        />
        <Image
          src="/skills_image/ec2.png"
          alt="AWS EC2"
          width={40}
          height={40}
        />
        <Image
          src="/skills_image/rds.svg"
          alt="AWS RDS"
          width={40}
          height={40}
        />
      </OrbitingCircles>
    </div>
  );
}
