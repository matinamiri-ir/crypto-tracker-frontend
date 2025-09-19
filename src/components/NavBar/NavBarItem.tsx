import React, { useState, useRef } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import type { FC, ReactNode } from "react";

type Props = {
  name: string;
  children: ReactNode;
};

const NavBarItem: FC<Props> = ({ name, children }) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  return (
    <div
      className="relative flex items-center cursor-pointer z-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`
          relative flex items-center gap-1 rounded-[12px] transition-colors px-3 py-2
          ${open ? "bg-gray-100 dark:bg-gray-700" : "hover:bg-gray-200 dark:hover:bg-gray-600"}
        `}
      >
        <span className="text-md font-medium">{name}</span>

        {children && (
          <div
            className={`transition-transform transform duration-300 ease-in-out ${
              open ? "rotate-180" : "rotate-0"
            }`}
          >
            <ArrowDropDownIcon fontSize="medium" className="text-gray-400" />
          </div>
        )}
      </div>

      {children && open && (
        <div className="absolute z-20  bg-secondary dark:bg-[#1f2937] rounded-xl px-4 py-6 top-full mt-6 min-w-[350px] flex flex-col gap-4 items-start *:cursor-pointer shadow-lg transition-all duration-200 ">
          {children}
        </div>
      )}
    </div>
  );
};

export default NavBarItem;
