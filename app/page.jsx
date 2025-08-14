import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function Home() {
  return (
    <div className="max-w-sm md:max-w-md lg:max-w-md xl:max-w-md mx-auto px-4 mt-10 pb-5">
      <div>
        <div className="font-bold text-2xl text-white">Nik Ahmad Izzat</div>
        <div className="text-gray-200 mt-1">
          full stack developer @{" "}
          <Link
            href="https://www.usim.edu.my/ms/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 font-bold cursor-pointer hover:scale-110 transition-transform duration-100 inline-block"
          >
            usim
          </Link>
        </div>
      </div>
      <div>
        <div className="text-gray-200 mt-5 font-bold">experience:</div>
        <div className="space-y-5 mt-2">
          <div className="ml-4 text-gray-300">
            full stack developer @{" "}
            <Link
              href="https://www.usim.edu.my/ms/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 font-bold cursor-pointer hover:scale-110 transition-transform duration-100 inline-block"
            >
              usim
            </Link>
            <span className="text-xs text-gray-400 ml-2">
              jan 2025 - current
            </span>
            <p className="ml-8 text-gray-500 text-[13px] italic text-justify">
              Developed multiple modules for the Smart Tracker System at KLIA
              Terminal 1 to monitor trolley locations in real-time, built a web
              and mobile application for Quranic translation, and enhanced the
              company website with improved functionality and design.
            </p>
            <p className="ml-8 text-gray-300 text-[13px] mt-2">
              React.js • Node.js
            </p>
          </div>

          <div className="ml-4 text-gray-300">
            junior system analyst intern @{" "}
            <Link
              href="https://www.usim.edu.my/ms/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 font-bold cursor-pointer hover:scale-110 transition-transform duration-100 inline-block"
            >
              usim
            </Link>
            <span className="text-xs text-gray-400 ml-2">
              aug 2024 - jan 2025
            </span>
            <p className="ml-8 text-gray-500 text-[13px] italic text-justify">
              Gained experience in analyzing and interpreting Software
              Requirement Specifications (SRS) and User Requirement
              Specifications (URS), developed the company website, and created
              an IoT-based system to track the health and essential information
              of goats in a farm environment.
            </p>
            <p className="ml-8 text-gray-300 text-[13px] mt-2">
              Next.js • Python
            </p>
          </div>

          <div className="ml-4 text-gray-300">
            data entry @{" "}
            <Link
              href="https://www.adecco.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 font-bold cursor-pointer hover:scale-110 transition-transform duration-100 inline-block"
            >
              adecco
            </Link>
            <span className="text-xs text-gray-400 ml-2">
              aug 2022 - oct 2022
            </span>
            <p className="ml-8 text-gray-500 text-[13px] italic text-justify">
              Managed and organized facility management data for UTW Company,
              ensuring accuracy, completeness, and proper formatting for
              internal operational use.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="text-gray-200 font-bold mt-5">projects:</div>
        <div className="mt-2 space-y-5">
          <div className="text-gray-300 ml-4">
            built{" "}
            <Link
              href="https://mayaterokah.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 font-bold cursor-pointer hover:scale-110 transition-transform duration-100 inline-block"
            >
              mayaterokah
            </Link>
            <p className="text-gray-500 text-[13px] italic ml-8">
              company website for software services company
            </p>
          </div>
          <div className="text-gray-300 ml-4">
            built{" "}
            <Link
              href="https://www.jazndresan.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 font-bold cursor-pointer hover:scale-110 transition-transform duration-100 inline-block"
            >
              jazndresan
            </Link>
            <p className="text-gray-500 text-[13px] italic ml-8">
              company website for innovative healthcare company
            </p>
          </div>
          <div className="text-gray-300 ml-4">
            built{" "}
            <span className="text-sky-500 font-bold cursor-pointer hover:scale-110 transition-transform duration-100 inline-block">
              qurani
            </span>
            <span className="ml-2 text-gray-400 text-[13px]">Ongoing</span>
            <p className="text-gray-500 text-[13px] italic ml-8">
              developed web and mobile app for qurani translation
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="text-white font-bold">Links:</div>
        <div className="mt-3 text-sm space-y-3 xl:mr-[120px] ml-4">
          <div className="grid grid-cols-2">
            <div className="text-gray-300">Github</div>
            <div>
              <Link
                href="https://github.com/NikPrivate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex items-center gap-1"
              >
                @NikPrivate
                <GoArrowUpRight className="text-white" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="text-gray-300">Linkedin</div>
            <div>
              <Link
                href="https://www.linkedin.com/in/nik-ahmad-izzat-044ba7257/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex items-center gap-1"
              >
                @nik-ahmad-izzat
                <GoArrowUpRight className="text-white" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="text-gray-300">Email</div>

            <Link
              href="mailto:nikizzat@gmail.com"
              className="text-white flex items-center gap-1"
            >
              @Nik Ahmad Izzat
              <GoArrowUpRight className="text-white" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="text-gray-400 text-sm">© Nik Ahmad Izzat 2025</div>
      </div>
    </div>
  );
}
