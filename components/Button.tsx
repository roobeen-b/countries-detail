"use client";

import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";

const Button = ({ title, isBack }: ButtonProps) => {
  const router = useRouter();
  return isBack ? (
    <button
      className="flex items-center gap-2 shadow-md bg-white dark:bg-dark-blue text-very-dark-blue-lm dark:text-white px-6 py-2 rounded-md hover:text-very-dark-blue-lm dark:hover:opacity-80"
      onClick={() => router.back()}
    >
      <ArrowLeftIcon className="h-4 w-4" />
      <span className="text-xs">{title}</span>
    </button>
  ) : (
    <button className="flex items-center gap-2 shadow-md bg-white dark:bg-dark-blue text-dark-gray dark:text-white px-6 py-2 rounded-md hover:text-very-dark-blue-lm dark:hover:opacity-80">
      <span className="text-xs">{title}</span>
    </button>
  );
};

export default Button;
