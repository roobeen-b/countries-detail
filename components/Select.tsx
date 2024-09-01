"use client";

import { useOutsideClick } from "@/hooks/useOutsideClick";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useRef, useState } from "react";

const Select = ({ onRegionChange }: TSelectProps) => {
  const regions = [
    {
      name: "Africa",
      value: "africa",
    },
    {
      name: "Americas",
      value: "americas",
    },
    {
      name: "Asia",
      value: "asia",
    },
    {
      name: "Europe",
      value: "europe",
    },
    {
      name: "Oceania",
      value: "oceania",
    },
  ];

  const [open, setOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>("");
  const selectDropdownRef = useRef<HTMLDivElement>(null);

  const handleRegionChange = (regionValue: string) => {
    setOpen(false);
    onRegionChange(regionValue);
  };

  useOutsideClick({ ref: selectDropdownRef, handler: () => setOpen(false) });

  return (
    <div className="relative" ref={selectDropdownRef}>
      <div
        onClick={() => setOpen((prevState) => !prevState)}
        className="w-40 h-10 cursor-pointer rounded-md bg-dark-blue text-xs text-white px-4 flex items-center justify-between"
      >
        <p>{selectedValue !== "" ? selectedValue : "Filter by Region"}</p>
        <ChevronDownIcon className="h-4 w-4" />
      </div>

      {open && (
        <div>
          <ul className="absolute w-40 h-36 mt-1 py-4 bg-dark-blue text-xs text-white rounded-md shadow-md">
            {regions.map((region) => (
              <li
                className="py-1 px-4 cursor-pointer hover:bg-dark-gray"
                key={region.name}
                onClick={() => {
                  handleRegionChange(region.value);
                  setSelectedValue(region.name);
                }}
              >
                {region.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
