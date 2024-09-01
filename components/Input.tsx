import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { ChangeEvent } from "react";

const Input = ({ onInputChange }: TInputProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };

  return (
    <div className="h-10 md:w-80 rounded-md bg-dark-blue text-xs text-white px-4 flex items-center gap-4">
      <div>
        <MagnifyingGlassIcon className="w-4 h-4" />
      </div>
      <label htmlFor="search" className="sr-only" />
      <input
        type="text"
        id="search"
        onChange={handleInputChange}
        className="bg-dark-blue h-full outline-none w-full placeholder-white"
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default Input;
