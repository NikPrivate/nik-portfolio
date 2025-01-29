"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
      setIsAnimating(false);
    }, 300); // Delay theme change by 300ms for smooth animation
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative transition-transform duration-300 focus:outline-none dark:border-gray-600 dark:bg-gray-800"
    >
      <Sun
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 ${
          theme === "dark"
            ? "opacity-0 scale-0 rotate-90"
            : "opacity-100 scale-100 rotate-0 text-black"
        }`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 ${
          theme === "dark"
            ? "opacity-100 scale-100 rotate-0 text-white"
            : "opacity-0 scale-0 rotate-90"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeSwitch;
