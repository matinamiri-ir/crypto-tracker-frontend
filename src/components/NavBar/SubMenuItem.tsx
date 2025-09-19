import React, { type FC } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
interface SubMenuItemProps {
  icon: string | undefined;
  title: string;
  description: string | undefined;
  className?: string;
}

const SubMenuItem: FC<SubMenuItemProps> = ({
  icon,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={`${className} relative w-full px-4 py-2 group hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg
  `}
    >
      <div className=" flex items-center gap-2  ">
        {icon && <div className="flex items-center w-[36px] h-[36] rounded-md">
          <img src={icon} alt="submenu-icon" className="w-full object-cover" />
        </div>}
        <div className="flex flex-col gap-1 items-start justify-center px-4 ">
          <div className="text-base font-normal text-blue-500 dark:text-blue-400">
            {title}
          </div>
          { description && <div className="text-sm font-light truncate">{description}.</div>}
        </div>
        <div className="absolute xl:left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center   ">
          <ArrowBackIosIcon fontSize="small" className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default SubMenuItem;
