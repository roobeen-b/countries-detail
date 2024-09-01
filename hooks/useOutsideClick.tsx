import { useEffect } from "react";

type TOutsideClickProps = {
  ref: React.RefObject<HTMLDivElement>;
  handler: () => void;
};

export const useOutsideClick = ({ ref, handler }: TOutsideClickProps) => {
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref, handler]);
};
