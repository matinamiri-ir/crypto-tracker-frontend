import React from "react";
import { useTheme } from "../../utils/Context/ThemeProvider";
import WestIcon from "@mui/icons-material/West";
function Header() {
  const { theme } = useTheme();
  return (
    <section className="w-full bg-[#0f2341] xl:px-12  py-18  text-subtle ">
      <div className="container mx-auto flex flex-col xl:px-18 px-4 items-center justify-between gap-8 xl:flex-row ">
        <div className=" gap-5 flex flex-col items-center justify-center order-2 xl:order-1">
          <h2 className="xl:text-5xl text-[26px] !font-[Irancell1] font-bold text-center text-white">
            صرافی ارز دیجیتال ماکوین
          </h2>
          <p className="xl:text-[22px] text-[18px] font-medium text-white opacity-80">
            رتبه برتر حجم معاملات بیت کوین
          </p>

          <div
            tabIndex={0}
            className="flex items-center gap-4 focus:outline-2 outline-blue-400    py-2 px-4 xl:p-2 rounded-full  w-full border-2 border-gray-400"
          >
            <input
              dir="rtl"
              type="number"
              className="bg-inherit outline-none  border-none w-full xl:placeholder:text-lg placeholder:text-base text-white   text-base font-normal flex-3/4"
              placeholder="شماره موبایلتان را وارد کنید"
            />
            <div
              role="button"
              className="bg-green-800 hover:bg-green-900 group flex items-cetner justify-center gap-2 text-white font-semibold text-lg xl:text-base  px-4 py-2   text-center text-nowrap rounded-full flex-1/4 cursor-pointer"
            >
              <p>ثبت نام  </p>
              <div tabIndex={0} className="lg:group-hover:scale-105 group-focus-within:scale-105 group-focus-visible:bg-red-500 ">
                <WestIcon fontSize="medium" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 w-full xl:pt-10 ">
            <div className="bg-white px-4 py-3 rounded-xl shadow-lg">
              <div className="flex flex-col gap-1 justiy-center">
                <h3>بیت کوین</h3>
                <p>قیمت</p>
              </div>
            </div>
            <div className="bg-white px-4 py-3 rounded-xl shadow-lg">
              <div className="flex flex-col gap-1 justiy-center">
                <h3>بیت کوین</h3>
                <p>قیمت</p>
              </div>
            </div>{" "}
            <div className="bg-white px-4 py-3 rounded-xl shadow-lg">
              <div className="flex flex-col gap-1 justiy-center">
                <h3>بیت کوین</h3>
                <p>قیمت</p>
              </div>
            </div>{" "}
            <div className="bg-white px-4 py-3 rounded-xl shadow-lg">
              <div className="flex flex-col gap-1 justiy-center">
                <h3>بیت کوین</h3>
                <p>قیمت</p>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1">
          <img
            src={
              theme === "dark"
                ? "/public/images/header/hero-img-dark.png"
                : "/public/images/header/hero-image-light.png"
            }
            alt="header-banner"
            draggable="false"
            className="w-[650px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
