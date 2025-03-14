import Contact from "@/components/Contact";
import Exprience from "@/components/Exprience";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import Skills2 from "@/components/Skills2";

export default function Home() {
  return (
    <div className="xl:h-screen lg:h-screen flex">
      <div className="container mx-auto px-4 xl:px-16 py-8">
        {/* Main grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
          {/* Left Column */}
          <div className="flex flex-col gap-8 xl:gap-5">
            <Intro />
            <Exprience />
            <Skills2 />
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            <Project />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
