import React, { type ReactNode } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useAccordion } from "../utils/Context/AcoordingContext";
 
interface AccordionProps {
  title: string;
  children: ReactNode;
  className?:string
}

const CustomAccordion: React.FC<AccordionProps> = ({ title, children,className }) => {
  const { expanded, setExpanded } = useAccordion();

  const isOpen = expanded === title;

  const toggle = () => {
    setExpanded(isOpen ? false : title);
  };

  return (
    <div className={`${className} flex flex-col    px-6 py-4 rounded-lg ${title===expanded && "opacity-100"} hover:opacity-100 opacity-70 w-full mx-auto z-10 `}>
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggle}
      >
        <span className={`text-sm xl:text-xl font-semibold ${title===expanded && "text-green-600 text-nowrap"}`}>{title}</span>
        <KeyboardArrowDownIcon
          fontSize="medium"
          className={`text-gray-400 transition-all duration-300 ease-in-out ${
            expanded === title ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div
        style={{ transformOrigin: "top" }}
        className={`overflow-hidden will-change-transform transition-[max-height,opacity,transform] ease-in-out duration-600
    ${
      isOpen
        ? "max-h-[1000px] opacity-100 scale-100"
        : "max-h-0 opacity-0 scale-95"
    }`}
      >
        <div
        tabIndex={0}
          className={`transition-opacity duration-300 flex flex-col gap-2 items-start justify-center py-3 w-full  bg-opacity-65 *:w-full`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomAccordion;
