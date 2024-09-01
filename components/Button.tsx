"use client";

import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";

const Button = ({ title, isBack }: ButtonProps) => {
  const router = useRouter();
  return isBack ? (
    <button
      className="flex items-center gap-2 shadow-md bg-dark-blue px-6 py-2 rounded-md"
      onClick={() => router.back()}
    >
      <ArrowLeftIcon className="h-4 w-4" />
      <span className="text-xs">{title}</span>
    </button>
  ) : (
    <button className="flex items-center gap-2 shadow-md bg-dark-blue px-6 py-2 rounded-md">
      <span className="text-xs">{title}</span>
    </button>
  );
};

export default Button;
