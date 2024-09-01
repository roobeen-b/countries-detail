import { MoonIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="px-4 md:px-16 lg:px-24 h-20 flex items-center justify-between bg-dark-blue">
      <div className="text-md font-semibold">
        <Link href={"/"}>Where in the world?</Link>
      </div>
      <div className="text-xs flex gap-2 items-center">
        <MoonIcon className="w-3 h-3" /> Dark Mode
      </div>
    </div>
  );
};

export default Navbar;
