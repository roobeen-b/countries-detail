import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { ChangeEvent } from "react";

const Input = ({ onInputChange }: TInputProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };

  return (
    <div className="h-10 md:w-80 rounded-md bg-white dark:bg-dark-blue text-xs dark:text-dark-gray px-4 flex items-center gap-4 shadow-md">
      <div>
        <MagnifyingGlassIcon className="w-4 h-4" />
      </div>
      <label htmlFor="search" className="sr-only" />
      <input
        type="text"
        id="search"
        onChange={handleInputChange}
        className="bg-white dark:bg-dark-blue h-full outline-none w-full placeholder-dark-gray dark:placeholder-white text-dark-gray dark:text-white"
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default Input;
