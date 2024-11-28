import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden h-screen">
      <div className="flex justify-end gap-4 p-4">
        <p>Github</p>
        <p>LinkedIn</p>
      </div>
      <div className="min-h-screen p-[110px] flex gap-[200px] justify-center">
        <div>
          <h1>Hi, I'm Nik Ahmad Izzat</h1>
          <p>A final year student from Malaysia</p>
          <p>passionate about technology and innovative</p>
          <p className="mt-2">Fullstack</p>
        </div>
        <div className="space-y-5">
          <h1>Skills and technologies</h1>
          <div className="grid grid-cols-5 gap-y-4 gap-x-8">
            <p>Javascript</p>
            <p>Typescript</p>
            <p>React</p>
            <p>Next</p>
            <p>Flask</p>
            <p>Node</p>
            <p>REST API</p>
            <p>MySQL</p>
            <p>MongoDB</p>
            <p>Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
