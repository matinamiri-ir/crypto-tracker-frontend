import React, { useState, useEffect } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import AcoordingContext from "../../utils/Context/AcoordingContext";
import CustomAccordion from "../Accordion";
import DarkMode from "../DarkMode";
import SubMobileMenu from "./SubMobileMenu";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  function closeTab() {
    setOpen(false);
  }

  return (
    <div className="flex items-center xl:hidden   ">
      {/* دکمه همبرگر */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="p-2 focus:outline-none"
      >
        <img
          src="/images/svgexport-6.svg"
          alt="burger-menu"
          className="w-9"
          draggable="false"
          loading="lazy"
        />
      </button>

      <div
        className={`fixed inset-0 z-50 dark:bg-[#1a2235] bg-white shadow-lg transform transition-transform duration-800 ease-in-out
          ${open ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className={`flex justify-between p-4 `}>
          <div className="block xl:hidden">
            <DarkMode />
          </div>
          <div
            role="button"
            tabIndex={0}
            className={`flex items-centr justify-center font-semibold  `}
            onClick={closeTab}
          >
            <ClearIcon
              fontSize="large"
              className={`text-subtle    transition-all ease-in-out  duration-300 ${
                open ? " rotate-0" : " rotate-90 "
              }`}
            />
          </div>
        </div>
        <ul className="flex items-start flex-col gap-4 w-full px-4">
          <AcoordingContext>
            <CustomAccordion title="matin">
              <SubMobileMenu />
            </CustomAccordion>
            <CustomAccordion title="ali">
              <span>hello</span>
            </CustomAccordion>{" "}
            <CustomAccordion title="reza">
              <span>hello</span>
            </CustomAccordion>
          </AcoordingContext>
        </ul>
      </div>
    </div>
  );
}
