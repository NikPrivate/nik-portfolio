import Contact from "@/components/Contact";
import Exprience from "@/components/Exprience";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import Skills2 from "@/components/Skills2";

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto">
      <div className="container mx-auto px-4 xl:px-[400px] py-4 h-full">
        {/* Main grid container */}
        <div className="grid grid-cols-1 gap-4 h-full">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            <Intro />
            <Exprience />
            <Skills2 />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            <Project />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
