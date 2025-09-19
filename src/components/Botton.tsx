import React, { type ReactNode } from "react";
import { Link } from "react-router-dom";
interface buttonProp {
  title: string;
  className?: string;
  children?: ReactNode;
  link: string;
}
const Botton: React.FC<buttonProp> = ({ title, className, children,link }) => {
  return (
    <div
      className={`${className} flex items-center py-2 px-1 xl:py-3 xl:px-2 text-nowrap gap-2 hover:scale-102 `}
    >
        <Link to={link} className="flex items-center gap-2 cursor-pointer text-[14px] xl:text-base text-center  text-white  bg-[#0a0f1a] dark:text-[#0a0f1a] dark:bg-white font-medium px-2 py-1   rounded-md">
          <p>{title}</p>
          {children}
        </Link>
     
    </div>
  );
};

export default Botton;
