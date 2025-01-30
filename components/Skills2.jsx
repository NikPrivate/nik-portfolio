import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import Image from "next/image";

export function Skills2() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden ">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Skills
      </span>
      <OrbitingCircles iconSize={40} radius={220} reverse={2}>
        <Image
          src="/skills_image/javascript.png"
          alt="Javascript"
          width={40}
          height={40}
        />
        <Image
          src="/skills_image/typescript.png"
          alt="Javascript"
          width={40}
          height={40}
        />
        <Image
          src="/skills_image/react.png"
          alt="Javascript"
          width={40}
          height={40}
        />
        <Image
          src="/skills_image/next.png"
          alt="Javascript"
          width={40}
          height={40}
          className="dark:invert"
        />
      </OrbitingCircles>
      <OrbitingCircles iconSize={40}>
        <Image
          src="/skills_image/html.png"
          alt="Javascript"
          width={40}
          height={40}
        />
        <Image
          src="/skills_image/tailwind.png"
          alt="Javascript"
          width={40}
          height={40}
        />
        <Image
          src="/skills_image/node.png"
          alt="Javascript"
          width={40}
          height={40}
        />
        <Image
          src="/skills_image/express.png"
          alt="Javascript"
          width={40}
          height={40}
          className="dark:invert"
        />
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse={1}>
        <Image
          src="/skills_image/mongodb.png"
          alt="Javascript"
          width={40}
          height={40}
        />
        <Image
          src="/skills_image/mysql.png"
          alt="Javascript"
          width={40}
          height={40}
        />
        <Image
          src="/skills_image/ec2.png"
          alt="Javascript"
          width={40}
          height={40}
        />
        <Image
          src="/skills_image/rds.svg"
          alt="Javascript"
          width={40}
          height={40}
        />
      </OrbitingCircles>
    </div>
  );
}
