import React from "react";
import DarkMode from "../DarkMode";
import NavBarItem from "./NavBarItem";
import menuData from "../../utils/navBarData";
import SubMenuItem from "./SubMenuItem";
import Logo from "../Logo";
import MobileMenu from "./MobileMenu";
import Qrcode from "./Qrcode";
import Botton from "../Botton";
import { useTheme } from "../../utils/Context/ThemeProvider";


function Navbar() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <nav
      className={`fixed w-full  flex items-center gap-12 justify-between  px-[5px] xl:px-[15px] py-1  bg-secondary border-b border-gray-300 dark:border-gray-700    z-50 
      
       top-0 h-[60px]`}
    >
      <MobileMenu />
      <div className="flex items-center gap-8">
        <Logo />
        <div className="hidden  xl:flex items-center gap-4 justify-center ">
          {menuData.map((item, index) => (
            <NavBarItem key={index} name={item.title}>
              {item.subItems?.map((subItem, index) => (
                <SubMenuItem
                  key={index}
                  icon={isDark ? subItem?.darkImage : subItem?.image}
                  title={subItem?.title}
                  description={subItem?.description}
                  className={`${
                    subItem?.title === "سابقه معاملات" &&
                    "relative before:absolute before:-top-2 before:left-0 before:w-full before:h-[2px] before:bg-gray-100 dark:before:bg-gray-500 "
                  }`}
                />
              ))}
            </NavBarItem>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Botton link="register/signup" title="ورود | ثبت نام" />
        <Qrcode />
        <div className="hidden xl:block">
          <DarkMode />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
