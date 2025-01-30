import React from "react";

const Exprience = () => {
  return (
    <div className="space-y-6">
      {/* Experience Items */}
      <div className="border dark:border-gray-600 dark:bg-gray-800 shadow-lg rounded-xl px-6 bg-white">
        {/* Experience 1 */}
        <div className="group hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors p-4 rounded-lg">
          <div className="xl:flex block xl:justify-between text-center xl:text-start items-start">
            <div className="space-y-1.5">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 font-inter">
                Full Stack Developer
              </h2>
              <p className="text-gray-600 font-medium dark:text-gray-400 font-medium text-sm">
                Universiti Sains Islam Malaysia
              </p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
              January 2025 - Current
            </span>
          </div>
        </div>

        {/* Divider */}
        <hr className="dark:border-gray-700" />

        {/* Experience 2 */}
        <div className="group hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors p-4 rounded-lg">
          <div className="xl:flex block xl:justify-between text-center xl:text-start items-start">
            <div className="space-y-1.5">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 font-inter">
                Junior System Analyst Internship
              </h2>
              <p className="text-gray-600 font-medium dark:text-gray-400 font-medium text-sm">
                Universiti Sains Islam Malaysia
              </p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
              August 2024 - January 2025
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Exprience;
