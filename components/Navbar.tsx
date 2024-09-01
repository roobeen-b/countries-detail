"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

const Navbar = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className="px-4 md:px-16 lg:px-24 h-20 flex items-center justify-between bg-white dark:bg-dark-blue text-very-dark-blue-lm dark:text-white">
      <div className="text-md font-semibold">
        <Link href={"/"}>Where in the world?</Link>
      </div>
      {colorTheme === "light" ? (
        <button
          className="text-xs flex gap-2 items-center"
          onClick={() => setTheme(colorTheme)}
        >
          <SunIcon className="w-3 h-3" /> Light Mode
        </button>
      ) : (
        <button
          className="text-xs flex gap-2 items-center"
          onClick={() => setTheme(colorTheme)}
        >
          <MoonIcon className="w-3 h-3" /> Dark Mode
        </button>
      )}
    </div>
  );
};

export default Navbar;
