"use client";

import CountryList from "@/components/CountryList";
import Input from "@/components/Input";
import Select from "@/components/Select";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  return (
    <main className="h-[calc(100vh-5rem)] flex flex-col px-4 md:px-16 lg:px-24 py-8 bg-very-light-gray dark:bg-very-dark-blue-dm text-very-dark-blue-lm dark:text-white">
      <div className="flex flex-col gap-8 md:flex-row md:justify-between w-full">
        <Input onInputChange={setInputValue} />
        <Select onRegionChange={setRegion} />
      </div>

      <div className="mt-6">
        <CountryList inputValue={inputValue} region={region} />
      </div>
    </main>
  );
}
