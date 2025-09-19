import React from "react";
import { useTheme } from "../utils/Context/ThemeProvider";


const DarkMode: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      role="switch"
      tabIndex={0}
      aria-checked={isDark}
      onClick={toggleTheme}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          toggleTheme();
        }
      }}
      className={`relative flex items-center w-[62px] bg-gray-300 dark:bg-slate-700 rounded-full h-[30px] cursor-pointer select-none`}
    >
      <div
        className={`absolute top-0 left-0 transition-transform ease-in-out duration-500 rounded-full p-[2px] w-[30px] h-[29px] ${
          isDark ? "translate-x-0 rotate-0" : "translate-x-[32px] rotate-[360deg]"
        }`}
      >
        <div
          className={`flex items-center w-full h-full rounded-full justify-center
              cursor-pointer transition-all duration-200
              focus:outline-none focus:ring-1 focus:ring-offset-2
              hover:scale-105 active:scale-95
              ${
                isDark
                  ? "bg-[#0a0f1a] focus:ring-blue-400"
                  : "bg-white focus:ring-blue-500"
              }`}
        >
          <img
            src={
              isDark
                ? "/images/NavBar/dark/moonDark.svg"
                : "/images/NavBar/sunIcon.svg"
            }
            alt="theme icon"
            loading="lazy"
            draggable="false"
            className="w-5 h-5 pointer-events-none select-none"
          />
        </div>
      </div>
    </div>
  );
};

export default DarkMode;
