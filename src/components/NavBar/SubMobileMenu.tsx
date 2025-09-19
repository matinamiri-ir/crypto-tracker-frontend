
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";
function SubMobileMenu() {
  return (
    <li
      tabIndex={0}
      className="flex items-center group justify-between  rounded-xl  focus:bg-gray-200 px-3 py-2 dark:focus:bg-gray-700"
    >
      <h4 className="text-base font-normal ">items</h4>
      <span className="transition-opacity ease-in-out duration-500 opacity-0 group-focus:opacity-100 rotate-90 ">
        <KeyboardArrowDownIcon />
      </span>
    </li>
  );
}

export default SubMobileMenu;
